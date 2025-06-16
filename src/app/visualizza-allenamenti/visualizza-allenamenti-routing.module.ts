import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizzaAllenamentiPage } from './visualizza-allenamenti.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizzaAllenamentiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizzaAllenamentiPageRoutingModule {}
