import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoteganganPageRoutingModule } from './infotegangan-routing.module';

import { InfoteganganPage } from './infotegangan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoteganganPageRoutingModule
  ],
  declarations: [InfoteganganPage]
})
export class InfoteganganPageModule {}
