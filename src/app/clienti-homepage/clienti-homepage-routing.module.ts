import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientiHomePage } from './clienti-homepage.page';

const routes: Routes = [
  {
    path: '',
    component: ClientiHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientiHomePageRoutingModule {}
