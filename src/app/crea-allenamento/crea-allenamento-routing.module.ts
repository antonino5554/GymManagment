import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaAllenamentoPage } from './crea-allenamento.page';

const routes: Routes = [
  {
    path: '',
    component: CreaAllenamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaAllenamentoPageRoutingModule {}
