//importa le funzionalità necessarie ad Angular
import { NgModule } from '@angular/core';               //permette di definire un modulo
import { Routes, RouterModule } from '@angular/router'; //permette di gestire la navigazione tra pagine

import { CreaAllenamentoPage } from './crea-allenamento.page'; //permette di mostrare la pagina d'interesse

const routes: Routes = [
  {
    path: '',
    component: CreaAllenamentoPage //mostra la pagina
  }
];

//Costruisce un modulo di navigazione
@NgModule({
  //collega la lista routes al modulo, per sapere quale pagina mostrare
  //routes contiene informazioni sui collegamenti tra le posizioni e le pagine da visualizzare
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  //rende la navigazione pubblica
})
// usiamo il nome del modulo per collegare la navigazione di questa pagina con il resto dell'app
export class CreaAllenamentoPageRoutingModule {}
