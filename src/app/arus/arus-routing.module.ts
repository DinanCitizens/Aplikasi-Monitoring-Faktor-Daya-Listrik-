import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArusPage } from './arus.page';

const routes: Routes = [
  {
    path: '',
    component: ArusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArusPageRoutingModule {}
