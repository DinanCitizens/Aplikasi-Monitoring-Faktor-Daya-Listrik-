import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArustPageRoutingModule } from './arust-routing.module';

import { ArustPage } from './arust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArustPageRoutingModule
  ],
  declarations: [ArustPage]
})
export class ArustPageModule {}
