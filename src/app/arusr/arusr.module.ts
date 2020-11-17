import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArusrPageRoutingModule } from './arusr-routing.module';
import { ArusrPage } from './arusr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArusrPageRoutingModule
  ],
  declarations: [ArusrPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ArusrPageModule {}
