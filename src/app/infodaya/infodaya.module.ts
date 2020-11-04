import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfodayaPageRoutingModule } from './infodaya-routing.module';

import { InfodayaPage } from './infodaya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfodayaPageRoutingModule
  ],
  declarations: [InfodayaPage]
})
export class InfodayaPageModule {}
