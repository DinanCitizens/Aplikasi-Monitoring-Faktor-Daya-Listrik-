import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeganganPageRoutingModule } from './tegangan-routing.module';

import { TeganganPage } from './tegangan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeganganPageRoutingModule

  ],
  declarations: [TeganganPage
  ]
})
export class TeganganPageModule {}
