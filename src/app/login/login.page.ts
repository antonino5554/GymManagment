import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'test@example.com' && this.password === '123456') {
      // Naviga a home (assicurati che la pagina esista)
      this.router.navigate(['/home']);
    } else {
      alert('Credenziali non valide');
    }
  }
}
