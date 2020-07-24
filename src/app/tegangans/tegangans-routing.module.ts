import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TegangansPage } from './tegangans.page';

const routes: Routes = [
  {
    path: '',
    component: TegangansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TegangansPageRoutingModule {}
