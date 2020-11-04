import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfolistrikPage } from './infolistrik.page';

const routes: Routes = [
  {
    path: '',
    component: InfolistrikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfolistrikPageRoutingModule {}
