import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayaPageRoutingModule } from './daya-routing.module';

import { DayaPage } from './daya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayaPageRoutingModule
  ],
  declarations: [DayaPage]
})
export class DayaPageModule {}
