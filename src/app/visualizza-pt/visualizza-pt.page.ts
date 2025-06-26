import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({                      // Definisce il componente Angular per la pagina di visualizzazione dei personal trainer   
  selector: 'app-visualizza-pt',  // nome del selettore del componente, usato per inserire il componente nel template HTML
  templateUrl: './visualizza-pt.page.html', // file HTML che definisce il layout della pagina di visualizzazione dei personal trainer
  styleUrls: ['./visualizza-pt.page.scss'],  // file CSS che definisce lo stile della pagina di visualizzazione dei personal trainer
  standalone: false  // indica che questo componente non è un componente standalone, ma fa parte di un modulo Angular
})
export class VisualizzaPtPage implements OnInit {  // Questa classe rappresenta la pagina di visualizzazione dei personal trainer
  personalTrainers: any[] = [];   // Array per memorizzare i personal trainer disponibili

  constructor(private http: HttpClient, private router: Router) {} // Il costruttore viene utilizzato per iniettare le dipendenze necessarie,
                                                                  //come HttpClient per le richieste HTTP e Router per la navigazione

  ngOnInit() {    // Metodo chiamato all'inizializzazione del componente
  this.http.get<any>('http://localhost:5000/api/customer/trainers',) // Effettua una richiesta GET al server per ottenere i personal trainer
    .subscribe({     // Gestisce la risposta del server\
      next: (data) => {  // Quando la richiesta ha successo, esegue questa funzione
        this.personalTrainers = data.data;  // Memorizza i personal trainer nella proprietà 'personalTrainers'
      },
      error: (err) => {    // Gestisce gli errori della richiesta
        console.error('Errore nel caricamento dei PT', err); // Stampa un messaggio di errore nella console se il caricamento fallisce
      }
    });
  }
}
