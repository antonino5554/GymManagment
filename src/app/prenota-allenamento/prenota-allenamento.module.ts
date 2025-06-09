import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrenotaAllenamentoPageRoutingModule } from './prenota-allenamento-routing.module';

import { PrenotaAllenamentoPage } from './prenota-allenamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrenotaAllenamentoPageRoutingModule
  ],
  declarations: [PrenotaAllenamentoPage]
})
export class PrenotaAllenamentoPageModule {}
