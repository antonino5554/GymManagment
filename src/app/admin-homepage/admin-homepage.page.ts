//importa le funzionalità necessarie ad Angular e Ionic
import { Component, OnInit } from '@angular/core';

@Component({                                  //Definisce il componente Angular
  selector: 'app-admin-homepage',             //Nome del selettore del componente, usato per inserire il componente nel template HTML
  templateUrl: './admin-homepage.page.html',  //File HTML che definisce il layout della pagina
  styleUrls: ['./admin-homepage.page.scss'],  //File CSS che definisce lo stile della pagina
  standalone: false
})
export class AdminHomepagePage implements OnInit{

  nomeUtente: string = " "; //Proprietà per memorizzare il nome dell'utente

 //Metodo che viene chiamato quando il componente viene inizializzato
 ngOnInit() {
    const userString = sessionStorage.getItem('user');  //Recupera la stringa dell'utente dal sessionStorage
    if (userString) {                                   //Se la stringa dell'utente esiste, la converte in un oggetto JSON
      const user = JSON.parse(userString);
      this.nomeUtente = user.full_name || user.username || '';  //Imposta il nome dell'utente, preferendo il nome completo se disponibile, altrimenti il nome utente
    }
  }
}

