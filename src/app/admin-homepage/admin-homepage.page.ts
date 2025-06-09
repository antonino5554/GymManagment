import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.page.html',
  styleUrls: ['./admin-homepage.page.scss'],
  standalone: false
})
export class AdminHomepagePage {
  constructor(private router: Router) {}

  goToTrainers() {
    this.router.navigate(['/personal-trainer']);
  }

  goToClients() {
    
    this.router.navigate(['/clienti']);
  }
}

