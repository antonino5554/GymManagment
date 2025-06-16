import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visualizza-allenamenti',
  templateUrl: './visualizza-allenamenti.page.html',
  styleUrls: ['./visualizza-allenamenti.page.scss'],
  standalone: false
})
export class VisualizzaAllenamentiPage implements OnInit {
  allenamenti: any[] = [];

  constructor(
    private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/api/trainer/schedule')
    .subscribe({
      next: (data) => {
          this.allenamenti = data.data;
      },
      error: (err) => {
        console.error('Errore HTTP', err);
      }
    });
  }
  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleString();
  }
}
