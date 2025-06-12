import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-valuta-pt',
  templateUrl: './valuta-pt.page.html',
  styleUrls: ['./valuta-pt.page.scss'],
  standalone: false
})
export class ValutaPtPage implements OnInit {
  trainers: any[] = [];
  selectedTrainerId: number | null = null;
  rating: number = 0;
  review: string = '';
  stars = [1, 2, 3, 4, 5];

  constructor(private http: HttpClient, private toastCtrl: ToastController) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/api/customer/trainers').subscribe({
      next: res => {
        this.trainers = res.data;
        console.log(this.trainers);
      },
      error: () => this.mostraToast('Errore nel caricamento dei trainer', 'danger')
    });
  }

  setRating(value: number) {
    this.rating = value;
  }

  submitRating() {
    if (!this.selectedTrainerId || this.rating === 0) {
      this.mostraToast('Seleziona un trainer e assegna una valutazione', 'warning');
      return;
    }

    const body = {
      trainer_id: this.selectedTrainerId,
      rating: this.rating,
      review: this.review || ''
    };
    console.log(body);

    this.http.post('http://localhost:5000/api/customer/rate', body).subscribe({
      next: () => {
        this.mostraToast('Valutazione inviata con successo!', 'success');
        this.rating = 0;
        this.review = '';
        this.selectedTrainerId = null;
      },
      error: err => {
        const msg = err.error?.message || 'Errore durante l\'invio della valutazione';
        this.mostraToast(msg, 'danger');
      }
    });
  }

  async mostraToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    await toast.present();
  }
}
