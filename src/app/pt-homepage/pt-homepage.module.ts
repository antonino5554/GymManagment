import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PtHomepagePageRoutingModule } from './pt-homepage-routing.module';

import { PtHomepagePage } from './pt-homepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PtHomepagePageRoutingModule
  ],
  declarations: [PtHomepagePage]
})
export class PtHomepagePageModule {}
