import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DayaPage } from './daya.page';

const routes: Routes = [
  {path: '',
  component: DayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes,)],
  exports: [RouterModule],
})
export class DayaPageRoutingModule {}
