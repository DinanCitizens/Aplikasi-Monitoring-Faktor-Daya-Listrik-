import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RekapitulasiPage } from './rekapitulasi.page';

const routes: Routes = [
  {
    path: '',
    component: RekapitulasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RekapitulasiPageRoutingModule {}
