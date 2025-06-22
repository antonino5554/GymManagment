import { Component, OnInit } from '@angular/core'; // Importa i moduli necessari da Angular e Ionic

@Component({                                  // Definisce il componente Angular
  selector: 'app-clienti-home',               // Nome del selettore del componente, usato per inserire il componente nel template HTML
  templateUrl: './clienti-homepage.page.html', // File HTML che definisce il layout della pagina
  styleUrls: ['./clienti-homepage.page.scss'], // File CSS che definisce lo stile della pagina
  standalone: false
})
export class ClientiHomePage implements OnInit { // Questa classe rappresenta la pagina principale per i clienti

  nomeUtente: string = ''; // Proprietà per memorizzare il nome dell'utente

  constructor() { } // Il costruttore viene utilizzato per inizializzare il componente, ma in questo caso non ha dipendenze da iniettare

  ngOnInit() {                                          // Metodo che viene chiamato quando il componente viene inizializzato
    const userString = sessionStorage.getItem('user');  // Recupera la stringa dell'utente dal sessionStorage
    if (userString) {                                    // Se la stringa dell'utente esiste, la converte in un oggetto JSON
      const user = JSON.parse(userString);               
      this.nomeUtente = user.full_name || user.username || ''; // Imposta il nome dell'utente, preferendo il nome completo se disponibile, altrimenti il nome utente
    }
  }
}
