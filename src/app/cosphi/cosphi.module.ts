import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CosphiPageRoutingModule } from './cosphi-routing.module';

import { CosphiPage } from './cosphi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CosphiPageRoutingModule
  ],
  declarations: [CosphiPage]
})
export class CosphiPageModule {}
