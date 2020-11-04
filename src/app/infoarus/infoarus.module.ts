import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoarusPageRoutingModule } from './infoarus-routing.module';

import { InfoarusPage } from './infoarus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoarusPageRoutingModule
  ],
  declarations: [InfoarusPage]
})
export class InfoarusPageModule {}
