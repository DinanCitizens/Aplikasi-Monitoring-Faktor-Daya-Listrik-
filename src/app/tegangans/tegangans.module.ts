import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TegangansPageRoutingModule } from './tegangans-routing.module';

import { TegangansPage } from './tegangans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TegangansPageRoutingModule
  ],
  declarations: [TegangansPage]
})
export class TegangansPageModule {}
