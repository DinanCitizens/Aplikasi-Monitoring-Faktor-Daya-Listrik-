import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoteganganPage } from './infotegangan.page';

const routes: Routes = [
  {
    path: '',
    component: InfoteganganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoteganganPageRoutingModule {}
