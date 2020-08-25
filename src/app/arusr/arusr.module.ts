import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArusrPageRoutingModule } from './arusr-routing.module';

import { ArusrPage } from './arusr.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArusrPageRoutingModule,
    ChartsModule
  ],
  declarations: [ArusrPage]
})
export class ArusrPageModule {}
