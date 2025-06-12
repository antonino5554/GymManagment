import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizzaPrenotazioniPageRoutingModule } from './visualizza-prenotazioni-routing.module';

import { VisualizzaPrenotazioniPage } from './visualizza-prenotazioni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizzaPrenotazioniPageRoutingModule
  ],
  declarations: [VisualizzaPrenotazioniPage]
})
export class VisualizzaPrenotazioniPageModule {}
