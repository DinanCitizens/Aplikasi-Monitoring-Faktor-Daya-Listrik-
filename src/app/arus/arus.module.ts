import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArusPageRoutingModule } from './arus-routing.module';

import { ArusPage } from './arus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArusPageRoutingModule
  ],
  declarations: [ArusPage]
})
export class ArusPageModule {}
