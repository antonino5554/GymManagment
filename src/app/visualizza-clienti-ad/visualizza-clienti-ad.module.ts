import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizzaClientiAdPageRoutingModule } from './visualizza-clienti-ad-routing.module';

import { VisualizzaClientiAdPage } from './visualizza-clienti-ad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizzaClientiAdPageRoutingModule
  ],
  declarations: [VisualizzaClientiAdPage]
})
export class VisualizzaClientiAdPageModule {}
