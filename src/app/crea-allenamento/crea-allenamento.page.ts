//importa le funzionalità necessarie ad Angular e Ionic
import { Component } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';  //HttpClient è necessario per fare richieste HTTP (POST e GET)
import { ToastController } from '@ionic/angular';   //ToastController mostra brevi messaggi a schermo intero

@Component({   // Definisce il componente Angular
  selector: 'app-crea-allenamento',             // Nome del selettore del componente, usato per inserire il componente nel template HTML
  templateUrl: './crea-allenamento.page.html',  // File HTML che definisce il layout della pagina
  styleUrls: ['./crea-allenamento.page.scss'],  // File CSS che definisce lo stile della pagina
  standalone: false
})
export class CreaAllenamentoPage {
  dataInizio: string = '';  // Proprietà per memorizzare la data d'inizio
  dataFine: string = '';    // Proprietà per memorizzare la data di fine

  // Il costruttore viene utilizzato per inizializzare il componente
  constructor(
    private http: HttpClient, //fornisce accesso a HTTP
    private toastController: ToastController //fornisce accesso a ToastController
  ) {}

  //funzione chiamata quando l'utente clicca per creare un nuovo allenamento
  creaAllenamento() {

    // controlla che i campi non sono vuoti, se uno dei due è vuoto si mostra un mex di errore
    if (!this.dataInizio || !this.dataFine) {
      this.mostraToast('Compila tutti i campi!', 'danger');
      return;
    }
    function formatLocale(dateStr: string): string {
      const d = new Date(dateStr);                      //Converte la stringa in un oggetto data
      const yyyy = d.getFullYear();                     //Estrae l'anno
      const mm = ('0' + (d.getMonth() + 1)).slice(-2);  //Estrae il mese e lo formatta a due cifre
      const dd = ('0' + d.getDate()).slice(-2);         //giorno
      const hh = ('0' + d.getHours()).slice(-2);        //ora
      const mi = ('0' + d.getMinutes()).slice(-2);      //minuti
      return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;         // ritorna la data formattata come stringa
  }

  //applica la formattazione alla data di inizio e di fine
    const start = formatLocale(this.dataInizio);
    const end = formatLocale(this.dataFine);

    const body = { //oggetto contenente le date
      start_time: start,
      end_time: end
  };

    console.log('Dati inviati:', body); //stampa i dati nella console del browser

    //Viene inviata la richiesta POST al server
    this.http.post('http://localhost:5000/api/trainer/schedule', body).subscribe({
      next: () => this.mostraToast('Allenamento creato con successo!', 'success'), // toast verde se tutto va bene
      error: (err) => {
        console.error('Errore:', err);
        this.mostraToast('Errore durante la creazione', 'danger'); //toast rosso se c'è un errore
      }
    });
  }

  //mostra un messaggio temporaneo in basso allo schermo
  async mostraToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000, //durata del toast
      color
    });
    await toast.present(); //mostra il toast
  }
}
