import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizzaClientiAdPage } from './visualizza-clienti-ad.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizzaClientiAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizzaClientiAdPageRoutingModule {}
