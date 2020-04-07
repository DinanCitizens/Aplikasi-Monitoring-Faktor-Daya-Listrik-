import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeganganPageRoutingModule } from './tegangan-routing.module';

import { TeganganPage } from './tegangan.page';

import { HighchartsChartComponent } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeganganPageRoutingModule

  ],
  declarations: [TeganganPage,
  HighchartsChartComponent
  ]
})
export class TeganganPageModule {}
