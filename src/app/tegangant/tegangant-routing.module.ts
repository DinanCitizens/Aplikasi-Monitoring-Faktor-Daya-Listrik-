import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TegangantPage } from './tegangant.page';

const routes: Routes = [
  {
    path: '',
    component: TegangantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TegangantPageRoutingModule {}
