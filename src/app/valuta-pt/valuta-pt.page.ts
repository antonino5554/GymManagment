import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-valuta-pt',
  templateUrl: './valuta-pt.page.html',
  styleUrls: ['./valuta-pt.page.scss'],
  standalone: false
})
export class ValutaPtPage implements OnInit {
  trainers: any[] = [];
  selectedTrainerId: number | null = null;
  rating = 0;
  review = '';
  stars = [1, 2, 3, 4, 5];

  constructor(private http: HttpClient, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.loadTrainers();
  }

  loadTrainers() {
    this.http.get<any>('http://localhost:5000/api/customer/trainers').subscribe(res => {
      if (res.status === 'success') {
        this.trainers = res.data;
      }
    });
  }

  setRating(value: number) {
    this.rating = value;
  }

  async submitRating() {
    if (!this.selectedTrainerId || this.rating < 1) {
      return this.presentAlert('Errore', 'Seleziona un trainer e una valutazione valida.');
    }

    const body = {
      trainer_id: this.selectedTrainerId,
      rating: this.rating,
      review: this.review,
    };

    this.http.post<any>('http://localhost:5000/api/customer/rate', body).subscribe(
      async (res) => {
        await this.presentAlert('Successo', 'Valutazione inviata con successo.');
        this.selectedTrainerId = null;
        this.rating = 0;
        this.review = '';
      },
      async (err) => {
        let msg = 'Errore durante l\'invio della valutazione.';
        if (err.status === 403 && err.error.message.includes('sessione')) {
          msg = 'Non puoi valutare questo trainer. Devi prima fare almeno un allenamento con lui.';
        }
        await this.presentAlert('Errore', msg);
      }
    );
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
