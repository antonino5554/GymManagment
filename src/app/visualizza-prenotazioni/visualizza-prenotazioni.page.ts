import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-visualizza-prenotazioni',
  templateUrl: './visualizza-prenotazioni.page.html',
  styleUrls: ['./visualizza-prenotazioni.page.scss'],
  standalone: false
})
export class VisualizzaPrenotazioniPage implements OnInit {
  prenotazioni: any[] = [];

  constructor(private http: HttpClient, private toastController: ToastController) {}

  ngOnInit() {
    this.caricaPrenotazioni();
  }

  caricaPrenotazioni() {
    this.http.get<any>('http://localhost:5000/api/customer/dashboard').subscribe({
      next: res => {
        const raw = res.data.upcoming_bookings || [];
        this.prenotazioni = raw.map((p: any) => ({
          id: p.id,
          trainer_name: p.trainer_name || 'Trainer',
          start_time: p.start_time,
          past: new Date(p.start_time) < new Date()
        }));
      },
      error: () => {
        this.mostraToast('Errore nel caricamento delle prenotazioni', 'danger');
      }
    });
  }

  cancellaPrenotazione(id: number) {
    this.http.delete(`http://localhost:5000/api/customer/bookings/${id}`).subscribe({
      next: () => {
        this.prenotazioni = this.prenotazioni.filter(p => p.id !== id);
        this.mostraToast('Prenotazione cancellata', 'success');
      },
      error: () => {
        this.mostraToast('Errore durante la cancellazione', 'danger');
      }
    });
  }

  async mostraToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }
}
