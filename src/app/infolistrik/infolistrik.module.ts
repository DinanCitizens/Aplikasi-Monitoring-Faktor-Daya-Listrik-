import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfolistrikPageRoutingModule } from './infolistrik-routing.module';

import { InfolistrikPage } from './infolistrik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfolistrikPageRoutingModule
  ],
  declarations: [InfolistrikPage]
})
export class InfolistrikPageModule {}
