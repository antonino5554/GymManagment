import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtHomepagePage } from './pt-homepage.page';

const routes: Routes = [
  {
    path: '',
    component: PtHomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtHomepagePageRoutingModule {}
