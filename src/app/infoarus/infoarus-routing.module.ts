import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoarusPage } from './infoarus.page';

const routes: Routes = [
  {
    path: '',
    component: InfoarusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoarusPageRoutingModule {}
