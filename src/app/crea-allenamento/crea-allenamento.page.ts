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
    function formatLocale(dateStr: string): string {
      const d = new Date(dateStr);
      const yyyy = d.getFullYear();
      const mm = ('0' + (d.getMonth() + 1)).slice(-2);
      const dd = ('0' + d.getDate()).slice(-2);
      const hh = ('0' + d.getHours()).slice(-2);
      const mi = ('0' + d.getMinutes()).slice(-2);
      return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
  }

    const start = formatLocale(this.dataInizio);
    const end = formatLocale(this.dataFine);

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
