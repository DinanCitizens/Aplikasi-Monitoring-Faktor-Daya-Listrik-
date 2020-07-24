import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TegangantPageRoutingModule } from './tegangant-routing.module';

import { TegangantPage } from './tegangant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TegangantPageRoutingModule
  ],
  declarations: [TegangantPage]
})
export class TegangantPageModule {}
