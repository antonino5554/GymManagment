import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientiHomePageRoutingModule } from './clienti-homepage-routing.module';

import { ClientiHomePage } from './clienti-homepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientiHomePageRoutingModule
  ],
  declarations: [ClientiHomePage]
})
export class ClientiHomepagePageModule {}
