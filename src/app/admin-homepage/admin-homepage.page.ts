import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.page.html',
  styleUrls: ['./admin-homepage.page.scss'],
  standalone: false
})
export class AdminHomepagePage implements OnInit{

  nomeUtente: string = " ";

 ngOnInit() {
    const userString = sessionStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.nomeUtente = user.full_name || user.username || '';
    }
  }
}

