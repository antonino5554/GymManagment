//importa le funzionalità necessarie ad Angular e Ionic
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';           //permette la navigazione tra pagine
import { HttpClient } from '@angular/common/http';  //HttpClient è necessario per fare richieste HTTP (POST e GET)

@Component({  //Definisce il componente Angular
  selector: 'app-visualizza-pt-admin',            //Nome del selettore del componente, usato per inserire il componente nel template HTML
  templateUrl: './visualizza-pt-admin.page.html', //File HTML che definisce il layout della pagina
  styleUrls: ['./visualizza-pt-admin.page.scss'], //File CSS che definisce lo stile della pagina
  standalone: false
})
export class VisualizzaPtAdminPage implements OnInit {
  personalTrainers: any[] = []; //array che conterrà i personal trainer registrati

  //Il costruttore viene utilizzato per inizializzare il componente con i servizi HttpClient e Router
  constructor(private http: HttpClient, private router: Router) {}

  //Metodo che viene chiamato quando il componente viene inizializzato
  ngOnInit() {
  this.http.get<any>('http://localhost:5000/api/admin/trainers')  //effettua una richiesta GET per ottenere i personal trainer
    .subscribe({
      //la richietsa ha successo: salva i dati nell'array
      next: (data) => {
        this.personalTrainers = data.data;
      },
      //si verifica un errore, viene stampato un messaggio.
      error: (err) => {
        console.error('Errore nel caricamento dei PT', err);
      }
    });
  }
}

