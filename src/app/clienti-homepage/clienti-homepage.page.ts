import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clienti-home',
  templateUrl: './clienti-homepage.page.html',
  styleUrls: ['./clienti-homepage.page.scss'],
  standalone: false
})
export class ClientiHomePage implements OnInit {

  nomeUtente: string = '';

  constructor() { }

  ngOnInit() {
    const userString = sessionStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.nomeUtente = user.full_name || user.username || '';
    }
  }
}
