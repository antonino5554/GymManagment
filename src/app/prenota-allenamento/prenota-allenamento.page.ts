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
  slots: any[] = [];

  constructor(private http: HttpClient, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.caricaSlotDisponibili();
  }

  caricaSlotDisponibili() {
    this.http.get<any>('http://localhost:5000/api/customer/slots?trainer_id=1') // ID trainer dummy
      .subscribe({
        next: res => {
          this.slots = res.data || [];
        },
        error: err => {
          this.mostraAlert('Errore', 'Impossibile caricare gli allenamenti.');
        }
      });
  }

  prenota(slotId: number) {
    this.http.post('http://localhost:5000/api/customer/book', { slot_id: slotId }).subscribe({
      next: () => {
        this.mostraAlert('Successo', 'Allenamento prenotato con successo!');
        this.caricaSlotDisponibili();
      },
      error: err => {
        this.mostraAlert('Errore', err.error?.message || 'Errore durante la prenotazione.');
      }
    });
  }

  async mostraAlert(titolo: string, messaggio: string) {
    const alert = await this.alertCtrl.create({
      header: titolo,
      message: messaggio,
      buttons: ['OK']
    });
    await alert.present();
  }
}
