import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KontrolsensorPage } from './kontrolsensor.page';

const routes: Routes = [
  {
    path: '',
    component: KontrolsensorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KontrolsensorPageRoutingModule {}
