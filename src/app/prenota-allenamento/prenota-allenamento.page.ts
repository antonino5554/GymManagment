import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-prenota-allenamento',
  templateUrl: './prenota-allenamento.page.html',
  styleUrls: ['./prenota-allenamento.page.scss'],
  standalone: false
})
export class PrenotaAllenamentoPage implements OnInit {
  trainers: any[] = [];
  selectedTrainerId: number | null = null;
  filteredSlots: any[] = [];
  slotPrenotati: number[] = [];

  constructor(private http: HttpClient, private toastController: ToastController) {}

  ngOnInit() {
  this.caricaPrenotazioniEsistenti().then(() => {
    this.caricaTrainer();
  });
}


  caricaTrainer() {
    this.http.get<any>('http://localhost:5000/api/customer/trainers').subscribe({
      next: res => {
        this.trainers = res.data;
        if (this.trainers.length > 0) {
          this.selectedTrainerId = this.trainers[0].id;
          this.caricaSlotDisponibili();
        }
      },
      error: () => {
        this.mostraToast('Impossibile caricare i trainer', 'danger');
      }
    });
  }

  caricaSlotDisponibili() {
    if (!this.selectedTrainerId) return;

    this.http.get<any>(`http://localhost:5000/api/customer/slots?trainer_id=${this.selectedTrainerId}`).subscribe({
      next: res => {
        this.filteredSlots = res.data.map((slot: any) => ({
          ...slot,
          giaPrenotato: this.slotPrenotati.includes(slot.id)
        }));
      },
      error: () => {
        this.mostraToast('Impossibile caricare gli slot disponibili', 'danger');
      }
    });
  }

  async caricaPrenotazioniEsistenti() {
  return new Promise<void>((resolve) => {
    this.http.get<any>('http://localhost:5000/api/customer/dashboard').subscribe({
      next: res => {
        const prenotazioni = res.data.upcoming_bookings || [];
        this.slotPrenotati = prenotazioni.map((p: any) => p.slot_id);
        resolve();
      },
      error: () => {
        this.mostraToast('Impossibile recuperare le prenotazioni esistenti', 'danger');
        resolve(); // comunque risolvi per non bloccare
      }
    });
  });
}


  prenota(slotId: number) {
    this.http.post('http://localhost:5000/api/customer/book', { slot_id: slotId }).subscribe({
      next: () => {
        this.slotPrenotati.push(slotId);
        this.filteredSlots = this.filteredSlots.map(slot =>
          slot.id === slotId ? { ...slot, giaPrenotato: true } : slot
        );
        this.mostraToast('Allenamento prenotato!', 'success');
      },
      error: err => {
        this.mostraToast(err.error?.message || 'Errore nella prenotazione', 'danger');
      }
    });
  }

  async mostraToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    await toast.present();
  }
}
