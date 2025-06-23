import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({                       // Definisce il componente Angular per la pagina di prenotazione degli allenamenti
  selector: 'app-prenota-allenamento',  // nome del selettore del componente, usato per inserire il componente nel template HTML
  templateUrl: './prenota-allenamento.page.html', // file HTML che definisce il layout della pagina di prenotazione degli allenamenti
  styleUrls: ['./prenota-allenamento.page.scss'], // file CSS che definisce lo stile della pagina di prenotazione degli allenamenti
  standalone: false
})
export class PrenotaAllenamentoPage implements OnInit {  // Questa classe rappresenta la pagina di prenotazione degli allenamenti
  trainers: any[] = [];                       // Array per memorizzare i trainer disponibili
  selectedTrainerId: number | null = null;   // ID del trainer selezionato, inizialmente nullo
  filteredSlots: any[] = [];               // Array per memorizzare gli slot disponibili filtrati
  slotPrenotati: number[] = [];              // Array per memorizzare gli ID degli slot già prenotati

  constructor(private http: HttpClient, private toastController: ToastController) {}  // Il costruttore viene utilizzato per iniettare le dipendenze necessarie,

  ngOnInit() {                      // Metodo chiamato all'inizializzazione del componente
  this.caricaPrenotazioniEsistenti().then(() => { // Carica le prenotazioni esistenti prima di caricare i trainer
    this.caricaTrainer();           // Carica i trainer disponibili
  });
}


  caricaTrainer() {                                         // Metodo per caricare i trainer disponibili
    this.http.get<any>('http://localhost:5000/api/customer/trainers').subscribe({  // Effettua una richiesta GET al server per ottenere i trainer
      next: res => {                          // Gestisce la risposta del server
        this.trainers = res.data;           // Memorizza i trainer nella proprietà 'trainers'
        if (this.trainers.length > 0) {        // Se ci sono trainer disponibili
          this.selectedTrainerId = this.trainers[0].id;    // Seleziona il primo trainer come predefinito
          this.caricaSlotDisponibili();          // Carica gli slot disponibili per il trainer selezionato
        }
      },
      error: () => {                   // Gestisce gli errori della richiesta
        this.mostraToast('Impossibile caricare i trainer', 'danger'); // Mostra un messaggio di errore se il caricamento fallisce
      }
    });
  }

  caricaSlotDisponibili() {             // Metodo per caricare gli slot disponibili per il trainer selezionato
    if (!this.selectedTrainerId) return;   // Se non è selezionato nessun trainer, esce dal metodo

    this.http.get<any>(`http://localhost:5000/api/customer/slots?trainer_id=${this.selectedTrainerId}`).subscribe({  // Effettua una richiesta GET al server per ottenere gli slot disponibili
      next: res => {                // Gestisce la risposta del server
        this.filteredSlots = res.data.map((slot: any) => ({   // Mappa gli slot in un formato più semplice
          ...slot,  // Mantiene tutte le proprietà dello slot originale
          giaPrenotato: this.slotPrenotati.includes(slot.id)  // Aggiunge una proprietà per indicare se lo slot è già prenotato
        }));
      },
      error: () => {                   // Gestisce gli errori della richiesta
        this.mostraToast('Impossibile caricare gli slot disponibili', 'danger'); // Mostra un messaggio di errore se il caricamento fallisce
      }
    });
  }

  async caricaPrenotazioniEsistenti() {                     // Metodo per caricare le prenotazioni esistenti dell'utente
  return new Promise<void>((resolve) => {                   // Restituisce una promessa per gestire l'asincronicità
    this.http.get<any>('http://localhost:5000/api/customer/dashboard').subscribe({  // Effettua una richiesta GET al server per ottenere le prenotazioni
      next: res => {                                       // Gestisce la risposta del server
        const prenotazioni = res.data.upcoming_bookings || [];    // Estrae le prenotazioni in arrivo dalla risposta, o un array vuoto se non ci sono
        this.slotPrenotati = prenotazioni.map((p: any) => p.slot_id);  // Mappa le prenotazioni per ottenere gli ID degli slot prenotati
        resolve();                                        // Risolve la promessa per indicare che il caricamento è completato
      },
      error: () => {                                // Gestisce gli errori della richiesta
        this.mostraToast('Impossibile recuperare le prenotazioni esistenti', 'danger'); // Mostra un messaggio di errore se il caricamento fallisce
        resolve(); // Risolve comunque la promessa per evitare blocchi nell'applicazione
      }
    });
  });
}


  prenota(slotId: number) {              // Metodo per prenotare uno slot di allenamento
    this.http.post('http://localhost:5000/api/customer/book', { slot_id: slotId }).subscribe({ // Effettua una richiesta POST al server per prenotare lo slot
      next: () => {         // Gestisce la risposta del server
        this.slotPrenotati.push(slotId);  // Aggiunge l'ID dello slot prenotato all'array degli slot prenotati
        this.filteredSlots = this.filteredSlots.map(slot =>  // Aggiorna lo stato degli slot filtrati
          slot.id === slotId ? { ...slot, giaPrenotato: true } : slot  // Imposta la proprietà 'giaPrenotato' a true per lo slot prenotato
        );
        this.mostraToast('Allenamento prenotato!', 'success'); // Mostra un messaggio di successo
      },
      error: err => {         // Gestisce gli errori della richiesta
        this.mostraToast(err.error?.message || 'Errore nella prenotazione', 'danger');  // Mostra un messaggio di errore se la prenotazione fallisce
      }
    });
  }

  async mostraToast(message: string, color: string) {  // Metodo per mostrare un messaggio di notifica (toast)
    const toast = await this.toastController.create({  // Crea un toast con il messaggio e le opzioni specificate
      message,
      duration: 2000,
      color
    });
    await toast.present();  // Mostra il toast all'utente
  }
}
