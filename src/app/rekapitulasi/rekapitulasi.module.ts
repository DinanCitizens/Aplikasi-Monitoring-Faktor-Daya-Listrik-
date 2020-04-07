import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RekapitulasiPageRoutingModule } from './rekapitulasi-routing.module';

import { RekapitulasiPage } from './rekapitulasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RekapitulasiPageRoutingModule
  ],
  declarations: [RekapitulasiPage]
})
export class RekapitulasiPageModule {}
