import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {
  username: string = '';
  password: string = '';
  email: string = '';
  full_name: string = '';
  phone: string = '';
  role: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const userData = {
      username: this.username,
      password: this.password,
      email: this.email,
      full_name: this.full_name,
      phone: this.phone,
      role: this.role
    };

    this.http.post<any>('http://localhost:5000/api/register', userData)
      .subscribe({
        next: (response) => {
          if (response.status === 'success') {
            alert('Registrazione avvenuta con successo! Effettua ora il login.');
            this.router.navigate(['/login']);
          } else {
            alert('Errore: ' + response.message);
          }
        },
        error: (err) => {
          alert('Errore nella registrazione. Riprova.');
        }
      });
  }
}
