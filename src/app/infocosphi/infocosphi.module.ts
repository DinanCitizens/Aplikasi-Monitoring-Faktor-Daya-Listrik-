import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfocosphiPageRoutingModule } from './infocosphi-routing.module';

import { InfocosphiPage } from './infocosphi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfocosphiPageRoutingModule
  ],
  declarations: [InfocosphiPage]
})
export class InfocosphiPageModule {}
