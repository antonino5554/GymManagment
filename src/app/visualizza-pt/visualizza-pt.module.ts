import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizzaPtPageRoutingModule } from './visualizza-pt-routing.module';

import { VisualizzaPtPage } from './visualizza-pt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizzaPtPageRoutingModule
  ],
  declarations: [VisualizzaPtPage]
})
export class VisualizzaPtPageModule {}
