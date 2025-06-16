import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizzaPtAdminPageRoutingModule } from './visualizza-pt-admin-routing.module';

import { VisualizzaPtAdminPage } from './visualizza-pt-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizzaPtAdminPageRoutingModule
  ],
  declarations: [VisualizzaPtAdminPage]
})
export class VisualizzaPtAdminPageModule {}
