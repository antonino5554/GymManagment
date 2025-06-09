import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaAllenamentoPageRoutingModule } from './crea-allenamento-routing.module';

import { CreaAllenamentoPage } from './crea-allenamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaAllenamentoPageRoutingModule
  ],
  declarations: [CreaAllenamentoPage]
})
export class CreaAllenamentoPageModule {}
