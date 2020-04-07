import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeganganPage } from './tegangan.page';

const routes: Routes = [
  {
    path: '',
    component: TeganganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeganganPageRoutingModule {}
