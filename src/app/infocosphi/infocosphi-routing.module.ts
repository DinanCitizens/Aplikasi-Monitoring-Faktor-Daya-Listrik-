import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfocosphiPage } from './infocosphi.page';

const routes: Routes = [
  {
    path: '',
    component: InfocosphiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfocosphiPageRoutingModule {}
