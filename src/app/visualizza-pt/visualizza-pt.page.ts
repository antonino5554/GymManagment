import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visualizza-pt',
  templateUrl: './visualizza-pt.page.html',
  styleUrls: ['./visualizza-pt.page.scss'],
  standalone: false
})
export class VisualizzaPtPage implements OnInit {
  personalTrainers: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
  this.http.get<any>('http://localhost:5000/api/customer/trainers',)
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
