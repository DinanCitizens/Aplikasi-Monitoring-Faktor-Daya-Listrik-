import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RekapitulasiPageRoutingModule } from './rekapitulasi-routing.module';

import { RekapitulasiPage } from './rekapitulasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RekapitulasiPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RekapitulasiPage]
})
export class RekapitulasiPageModule {}
