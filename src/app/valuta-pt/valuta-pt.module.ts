import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValutaPtPageRoutingModule } from './valuta-pt-routing.module';

import { ValutaPtPage } from './valuta-pt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValutaPtPageRoutingModule
  ],
  declarations: [ValutaPtPage]
})
export class ValutaPtPageModule {}
