import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({                            // Definisce il componente Angular
  selector: 'app-valuta-pt',          // Nome del selettore del componente, usato per inserire il componente nel template HTML 
  templateUrl: './valuta-pt.page.html', // File HTML che definisce il layout della pagina
  styleUrls: ['./valuta-pt.page.scss'], // File CSS che definisce lo stile della pagina
  standalone: false                    // Indica che questo componente non è un componente standalone, ma fa parte di un modulo Angular
})
export class ValutaPtPage implements OnInit {    // Questa classe rappresenta la pagina per valutare i personal trainer
  trainers: any[] = [];                        // Proprietà per memorizzare l'elenco dei trainer
  selectedTrainerId: number | null = null;    // Proprietà per memorizzare l'ID del trainer selezionato
  rating: number = 0;                       // Proprietà per memorizzare la valutazione selezionata
  stars = [1, 2, 3, 4, 5];            // Array per rappresentare le stelle della valutazione

  constructor(private http: HttpClient, private toastCtrl: ToastController) {}  // Il costruttore viene utilizzato per iniettare le dipendenze necessarie

  ngOnInit() {                                                                     // Metodo che viene chiamato quando il componente viene inizializzato
    this.http.get<any>('http://localhost:5000/api/customer/trainers').subscribe({  // Effettua una richiesta GET al server per ottenere l'elenco dei trainer
      next: res => {                                                                // Gestisce la risposta del server
        this.trainers = res.data;                                                  // Assegna i dati dei trainer alla proprietà trainers
        console.log(this.trainers);                                                // Stampa i trainer nella console per il debug
      },
      error: () => this.mostraToast('Errore nel caricamento dei trainer', 'danger')  // Gestisce gli errori della richiesta e mostra un messaggio di errore
    });
  }

  setRating(value: number) {   // Metodo per impostare la valutazione selezionata
    this.rating = value;       // Assegna il valore della valutazione alla proprietà rating
  }

  submitRating() {                // Metodo per inviare la valutazione al server                                                    
    if (!this.selectedTrainerId || this.rating === 0) {    // Controlla se è stato selezionato un trainer e se è stata assegnata una valutazione
      this.mostraToast('Seleziona un trainer e assegna una valutazione', 'warning');    // Mostra un messaggio di avviso se non sono stati selezionati un trainer o una valutazione
      return;                          // Esce dal metodo se non sono stati selezionati un trainer o una valutazione
    }

    const body = {                        // Crea un oggetto con i dati della valutazione
      trainer_id: this.selectedTrainerId, // ID del trainer selezionato
      rating: this.rating,                // Valutazione selezionata
    };
    console.log(body);

    this.http.post('http://localhost:5000/api/customer/rate', body).subscribe({  // Effettua una richiesta POST al server per inviare la valutazione
      next: () => {                // Gestisce la risposta del server
        this.mostraToast('Valutazione inviata con successo!', 'success');  // Mostra un messaggio di successo se la valutazione è stata inviata correttamente
        this.rating = 0;                   // Resetta la valutazione a 0
        this.selectedTrainerId = null;   // Resetta l'ID del trainer selezionato
      },
      error: err => {             // Gestisce gli errori della richiesta
        const msg = err.error?.message || 'Errore durante l\'invio della valutazione';   // Recupera il messaggio di errore dal server o usa un messaggio predefinito
        this.mostraToast(msg, 'danger');   // Mostra un messaggio di errore se la richiesta fallisce
      }
    });
  }

  async mostraToast(message: string, color: string) {    // Metodo per mostrare un messaggio di notifica (toast)
    const toast = await this.toastCtrl.create({    // Crea un toast con il messaggio e le opzioni specificate
      message,        
      duration: 2000,
      color,
      position: 'bottom'
    });
    await toast.present();   // Mostra il toast all'utente
  }
}
