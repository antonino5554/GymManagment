import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-prenota-allenamento',
  templateUrl: './prenota-allenamento.page.html',
  styleUrls: ['./prenota-allenamento.page.scss'],
  standalone: false
})
export class PrenotaAllenamentoPage implements OnInit {
  trainers: any[] = [];
  slots: any[] = [];
  trainerId: number | null = null;

  constructor(private http: HttpClient, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.caricaTrainers();
  }

  caricaTrainers() {
    this.http.get<any>('http://localhost:5000/api/customer/trainers').subscribe({
      next: res => {
        this.trainers = res.data;
      },
      error: () => this.mostraAlert('Errore', 'Impossibile caricare i trainer.')
    });
  }

  caricaAllenamenti() {
    if (!this.trainerId) return;
    this.http.get<any>(`http://localhost:5000/api/customer/slots?trainer_id=${this.trainerId}`)
      .subscribe({
        next: res => this.slots = res.data,
        error: () => this.mostraAlert('Errore', 'Impossibile caricare gli allenamenti.')
      });
  }

  prenota(slotId: number) {
    this.http.post('http://localhost:5000/api/customer/book', { slot_id: slotId }).subscribe({
      next: () => {
        this.mostraAlert('Successo', 'Allenamento prenotato!');
        this.caricaAllenamenti();
      },
      error: err => this.mostraAlert('Errore', err.error?.message || 'Errore nella prenotazione')
    });
  }

  async mostraAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({ header, message, buttons: ['OK'] });
    await alert.present();
  }
}
