import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-crea-allenamento',
  templateUrl: './crea-allenamento.page.html',
  styleUrls: ['./crea-allenamento.page.scss'],
  standalone: false
})
export class CreaAllenamentoPage {
  dataInizio: string = '';
  dataFine: string = '';

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  creaAllenamento() {
    if (!this.dataInizio || !this.dataFine) {
      this.mostraToast('Compila tutti i campi!', 'danger');
      return;
    }

    const start = new Date(this.dataInizio).toISOString().slice(0, 19);
    const end = new Date(this.dataFine).toISOString().slice(0, 19);

    const body = {
      start_time: start,
      end_time: end
    };

    console.log('Dati inviati:', body);

    this.http.post('http://localhost:5000/api/trainer/schedule', body).subscribe({
      next: () => this.mostraToast('Allenamento creato con successo!', 'success'),
      error: (err) => {
        console.error('Errore:', err);
        this.mostraToast('Errore durante la creazione', 'danger');
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
