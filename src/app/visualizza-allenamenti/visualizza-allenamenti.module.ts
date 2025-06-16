import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizzaAllenamentiPageRoutingModule } from './visualizza-allenamenti-routing.module';

import { VisualizzaAllenamentiPage } from './visualizza-allenamenti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizzaAllenamentiPageRoutingModule
  ],
  declarations: [VisualizzaAllenamentiPage]
})
export class VisualizzaAllenamentiPageModule {}
