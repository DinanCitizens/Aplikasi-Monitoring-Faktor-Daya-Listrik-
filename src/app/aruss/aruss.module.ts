import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArussPageRoutingModule } from './aruss-routing.module';

import { ArussPage } from './aruss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArussPageRoutingModule
  ],
  declarations: [ArussPage]
})
export class ArussPageModule {}
