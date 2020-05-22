import { NgModule, Directive, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArusPageRoutingModule } from './arus-routing.module';
import { ArusPage } from './arus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ArusPageRoutingModule
  ],
  declarations: [ArusPage],
  providers: [],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
@Directive({
  
})
export class ArusPageModule {}
