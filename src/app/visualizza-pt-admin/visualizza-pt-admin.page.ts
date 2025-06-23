import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visualizza-pt-admin',
  templateUrl: './visualizza-pt-admin.page.html',
  styleUrls: ['./visualizza-pt-admin.page.scss'],
  standalone: false
})
export class VisualizzaPtAdminPage implements OnInit {
  personalTrainers: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
  this.http.get<any>('http://localhost:5000/api/admin/trainers')
    .subscribe({
      next: (data) => {
        this.personalTrainers = data.data;
      },
      error: (err) => {
        console.error('Errore nel caricamento dei PT', err);
      }
    });
  }
}

