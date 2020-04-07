import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CosphiPage } from './cosphi.page';

const routes: Routes = [
  {
    path: '',
    component: CosphiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CosphiPageRoutingModule {}
