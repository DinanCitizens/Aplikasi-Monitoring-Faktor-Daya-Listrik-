import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KontrolsensorPageRoutingModule } from './kontrolsensor-routing.module';

import { KontrolsensorPage } from './kontrolsensor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KontrolsensorPageRoutingModule
  ],
  declarations: [KontrolsensorPage]
})
export class KontrolsensorPageModule {}
