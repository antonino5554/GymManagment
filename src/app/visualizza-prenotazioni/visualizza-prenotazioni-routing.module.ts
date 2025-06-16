import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizzaPrenotazioniPage } from './visualizza-prenotazioni.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizzaPrenotazioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizzaPrenotazioniPageRoutingModule {}
