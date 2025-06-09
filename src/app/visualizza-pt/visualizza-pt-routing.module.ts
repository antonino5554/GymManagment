import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizzaPtPage } from './visualizza-pt.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizzaPtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizzaPtPageRoutingModule {}
