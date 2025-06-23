import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({                                 // Definisce il componente Angular per la pagina di visualizzazione delle prenotazioni
  selector: 'app-visualizza-prenotazioni',   // nome del selettore del componente, usato per inserire il componente nel template HTML
  templateUrl: './visualizza-prenotazioni.page.html', // file HTML che definisce il layout della pagina di visualizzazione delle prenotazioni
  styleUrls: ['./visualizza-prenotazioni.page.scss'],  // file CSS che definisce lo stile della pagina di visualizzazione delle prenotazioni
  standalone: false
})
export class VisualizzaPrenotazioniPage implements OnInit {    // Questa classe rappresenta la pagina di visualizzazione delle prenotazioni dell'utente
  prenotazioni: any[] = [];                              // Array per memorizzare le prenotazioni dell'utente

  constructor(private http: HttpClient, private toastController: ToastController) {}    // Il costruttore viene utilizzato per iniettare le dipendenze necessarie,
                                                                                        //come HttpClient per le richieste HTTP e ToastController per mostrare notifiche

  ngOnInit() {                   // Metodo chiamato all'inizializzazione del componente
    this.caricaPrenotazioni();   // Carica le prenotazioni dell'utente
  }

  caricaPrenotazioni() {                                                 // Metodo per caricare le prenotazioni dell'utente
    this.http.get<any>('http://localhost:5000/api/customer/dashboard').subscribe({ // Effettua una richiesta GET al server per ottenere le prenotazioni
      next: res => {                                // Gestisce la risposta del server
        const raw = res.data.upcoming_bookings || []; // Estrae le prenotazioni in arrivo dalla risposta, o un array vuoto se non ci sono
        this.prenotazioni = raw.map((p: any) => ({  // Mappa le prenotazioni in un formato più semplice
          id: p.id,                                // ID della prenotazione
          trainer_name: p.trainer_name || 'Trainer', // Nome del trainer, con un valore predefinito se non presente
          start_time: p.start_time,            // Orario di inizio della prenotazione
          past: new Date(p.start_time) < new Date()  // Controlla se la prenotazione è passata
        }));
      },
      error: () => {                      // Gestisce gli errori della richiesta
        this.mostraToast('Errore nel caricamento delle prenotazioni', 'danger');  // Mostra un messaggio di errore se il caricamento fallisce
      }
    });
  }

  async mostraToast(message: string, color: string) {   // Metodo per mostrare un messaggio di notifica (toast)
    const toast = await this.toastController.create({   // Crea un toast con il messaggio e le opzioni specificate
      message,
      duration: 2000,
      color
    });
   await toast.present();   // Mostra il toast all'utente
  }
}
