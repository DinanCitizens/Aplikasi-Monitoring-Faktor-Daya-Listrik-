import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArussPage } from './aruss.page';

const routes: Routes = [
  {
    path: '',
    component: ArussPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArussPageRoutingModule {}
