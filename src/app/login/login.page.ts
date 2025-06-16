import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  login() {
    const dati = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:5000/api/login', dati).subscribe({
      next: async (risposta) => {
        console.log(risposta);

        if (!risposta || !risposta.data) {
          this.mostraToast('Login fallito', 'danger');
          return;
        }

        const user: User = risposta.data;
        delete user.password;

        sessionStorage.setItem('user', JSON.stringify(user));

        switch (user.role) {
          case 'admin':
            this.router.navigate(['/admin-home']);
            break;
          case 'trainer':
            this.router.navigate(['/pt-homepage']);
            break;
          case 'customer':
            this.router.navigate(['/clienti-homepage']);
            break;
          default:
            this.router.navigate(['/login']);
            break;
        }
      },
      error: () => {
        this.mostraToast('Login fallito!', 'danger');
      }
    });
  }

  async mostraToast(message: string, color: string = 'danger') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    await toast.present();
  }
}
