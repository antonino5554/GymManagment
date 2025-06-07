import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValutaPtPage } from './valuta-pt.page';

const routes: Routes = [
  {
    path: '',
    component: ValutaPtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValutaPtPageRoutingModule {}
