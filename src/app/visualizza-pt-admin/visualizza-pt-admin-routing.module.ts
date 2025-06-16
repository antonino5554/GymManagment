import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizzaPtAdminPage } from './visualizza-pt-admin.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizzaPtAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizzaPtAdminPageRoutingModule {}
