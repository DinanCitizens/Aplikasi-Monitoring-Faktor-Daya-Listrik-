import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeganganrPageRoutingModule } from './teganganr-routing.module';

import { TeganganrPage } from './teganganr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeganganrPageRoutingModule
  ],
  declarations: [TeganganrPage]
})
export class TeganganrPageModule {}
