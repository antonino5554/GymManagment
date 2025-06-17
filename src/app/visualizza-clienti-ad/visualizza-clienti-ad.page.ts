import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visualizza-clienti-ad',
  templateUrl: './visualizza-clienti-ad.page.html',
  styleUrls: ['./visualizza-clienti-ad.page.scss'],
  standalone: false // indica che questo componente non è un componente standalone, ma fa parte di un modulo Angular
})
export class VisualizzaClientiAdPage implements OnInit {
 customers: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
  this.http.get<any>('http://localhost:5000/api/admin/customers',)
    .subscribe({
      next: (data) => {
        this.customers = data.data;
      },
      error: (err) => {
        console.error('Errore nel caricamento dei PT', err);
      }
    });
  }
}
