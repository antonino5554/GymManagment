import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    const dati = {
      username: this.username,
      password: this.password
    }

    this.http.post<any>('http://localhost:5000/api/login', dati, { withCredentials: true })
    .subscribe({
      next: (risposta) => {

        if (risposta == null || risposta.data == null) {
          alert("Login fallito");
          return;
        }
        console.log(risposta.data)
        const user: User = risposta.data;

       
        delete user.password;

        sessionStorage.setItem('user', JSON.stringify(user));

        // Redirect in base al ruolo
        switch (user.role) {
          case 'admin':
            this.router.navigate(['/admin-home']);
            break;
          case 'trainer':
            this.router.navigate(['/trainer-home']);
            break;
          case 'customer':
            this.router.navigate(['/clienti-homepage']);
            break;
          default:
            this.router.navigate(['/home']);
            break;
        }
      },
      error: (err) => {
        console.error('Errore nel login', err);
        alert('Login fallito!');
      }
    });
  }
}
