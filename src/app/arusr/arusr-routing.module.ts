import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArusrPage } from './arusr.page';

const routes: Routes = [
  {
    path: '',
    component: ArusrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArusrPageRoutingModule {}
