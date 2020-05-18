import { NgModule, Directive, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArusPageRoutingModule } from './arus-routing.module';
import { ArusPage } from './arus.page';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var firebaseConfig = {
  apiKey: "AIzaSyA0q8NZt2rryZqIvvq4AyVOpFSLOseWa-4",
  authDomain: "koneksi-firebase-auth-ke-ionic.firebaseapp.com",
  databaseURL: "https://koneksi-firebase-auth-ke-ionic.firebaseio.com",
  projectId: "koneksi-firebase-auth-ke-ionic",
  storageBucket: "koneksi-firebase-auth-ke-ionic.appspot.com",
  messagingSenderId: "790155383412",
  appId: "1:790155383412:web:81ba65f294ac7cedbfb721",
  measurementId: "G-YXX6FEY7JP"
  };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ArusPageRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  declarations: [ArusPage],
  providers: [],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
@Directive({
  
})
export class ArusPageModule {}
