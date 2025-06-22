// Questa parte fa gli import dei moduli necessari
//"component" viene utilizzato per definire il componente Angular
//"Router" viene utilizzato per la navigazione tra le pagine
//"HttpClient" per fare le richieste HTTP
//"ToastController" per mostrare i messaggi in stile toast
//"User" importa il modello dati dell'utente, che contiene le informazioni dell'utente come username, password e ruolo
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',            //nome del selettore del componente, usato per inserire il componente nel template HTML
  templateUrl: './login.page.html', //file HTML che definisce il layout della pagina di login
  styleUrls: ['./login.page.scss'], //file CSS che definisce lo stile della pagina di login
  standalone: false                 // indica che questo componente non è un componente standalone, ma fa parte di un modulo Angular
})
export class LoginPage { // Questa classe rappresenta la pagina di login
  username: string = ''; // proprietà per memorizzare il nome utente inserito
  password: string = ''; // proprietà per memorizzare la password inserita

  constructor(                // Il costruttore viene utilizzato per iniettare le dipendenze necessarie             
    private router: Router,   // Router per la navigazione tra le pagine
    private http: HttpClient, // HttpClient per fare richieste HTTP al server
    private toastController: ToastController // ToastController per mostrare messaggi di notifica all'utente
  ) {}

  login() {              // Metodo per gestire il login dell'utente
    const dati = {       // Crea un oggetto con i dati di login
      username: this.username,  // Nome utente inserito
      password: this.password   // Password inserita
    };

    this.http.post<any>('http://localhost:5000/api/login', dati).subscribe({  // Effettua una richiesta POST al server per il login
      next: async (risposta) => {   // Gestisce la risposta del server
        console.log(risposta);      // Stampa la risposta del server nella console per il debug

        if (!risposta || !risposta.data) {    // Controlla se la risposta è valida e contiene i dati dell'utente
          this.mostraToast('Login fallito', 'danger'); // Mostra un messaggio di errore se il login fallisce
          return;                                       // Esce dal metodo se la risposta non è valida
        }

        const user: User = risposta.data;      // Assegna i dati dell'utente alla variabile user
        delete user.password;                  // Rimuove la password dall'oggetto user per motivi di sicurezza

        sessionStorage.setItem('user', JSON.stringify(user));  // Salva l'utente nel sessionStorage come stringa JSON

        switch (user.role) {                               // Controlla il ruolo dell'utente e reindirizza alla pagina appropriata   
          case 'admin':                                    // Se l'utente è un amministratore, reindirizza alla homepage dell'amministratore
            this.router.navigate(['/admin-homepage']);
            break;                                         
          case 'trainer':                                  // Se l'utente è un trainer, reindirizza alla homepage del trainer                     
            this.router.navigate(['/pt-homepage']);
            break;
          case 'customer':                                 // Se l'utente è un cliente, reindirizza alla homepage del cliente
            this.router.navigate(['/clienti-homepage']);
            break;
          default:                                 // Se il ruolo non è riconosciuto, mostra un messaggio di errore e reindirizza alla pagina di login
            this.router.navigate(['/login']);
            break;
        }
      },
      error: () => {                                // Gestisce gli errori della richiesta
        this.mostraToast('Login fallito!', 'danger');  // Mostra un messaggio di errore se la richiesta fallisce
      }
    });
  }

  async mostraToast(message: string, color: string) {  // Metodo per mostrare un messaggio di notifica (toast)
    const toast = await this.toastController.create({     // Crea un toast con il messaggio e le opzioni specificate
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    await toast.present();     // Mostra il toast all'utente
  }
}
