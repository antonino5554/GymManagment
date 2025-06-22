import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',            // nome del selettore del componente, usato per inserire il componente nel template HTML    
  templateUrl: './register.page.html',  // file HTML che definisce il layout della pagina di registrazione
  styleUrls: ['./register.page.scss'],  // file CSS che definisce lo stile della pagina di registrazione
  standalone: false                    // indica che questo componente non è un componente standalone, ma fa parte di un modulo Angular
})
export class RegisterPage {   // Questa classe rappresenta la pagina di registrazione      
  username: string = '';      // proprietà per memorizzare il nome utente inserito
  password: string = '';      // proprietà per memorizzare la password inserita
  email: string = '';         // """"""" email inserita
  full_name: string = '';     // """"""" nome completo inserito  
  phone: string = '';     // """"""" numero di telefono inserito
  role: string = '';    // """"""" ruolo dell'utente

  constructor(                // Il costruttore viene utilizzato per iniettare le dipendenze necessarie
    private http: HttpClient,
    private router: Router,
    private toastController: ToastController ) {}

  register() {        // Metodo per gestire la registrazione dell'utente
    const userData = { // Crea un oggetto con i dati di registrazione
      username: this.username, // Nome utente inserito
      password: this.password, // Password inserita
      email: this.email,      // Email inserita
      full_name: this.full_name,
      phone: this.phone,
      role: this.role
    };

    this.http.post<any>('http://localhost:5000/api/register', userData) // Effettua una richiesta POST al server per la registrazione
      .subscribe({
        next: (response) => {                         // Gestisce la risposta del server
          if (response.status === 'success') {       // Controlla se la registrazione è avvenuta con successo
            this.mostraToast('Registrazione avvenuta con successo! Effettua ora il login.'); // Mostra un messaggio di successo
            this.router.navigate(['/login']);       // Reindirizza alla pagina di login
          } else {
            this.mostraToast('Errore: ' + response.message);   // Mostra un messaggio di errore se la registrazione fallisce
          }
        },
        error: (err) => {                           // Gestisce gli errori della richiesta
          this.mostraToast('Errore nella registrazione. Riprova.');   // Mostra un messaggio di errore se la richiesta fallisce
        }
      });
  }

    async mostraToast(message: string, color: string = 'danger') {  // Metodo per mostrare un messaggio di notifica (toast)
    const toast = await this.toastController.create({     // Crea un toast con il messaggio e le opzioni specificate
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    await toast.present();     // Mostra il toast all'utente
  }
}
