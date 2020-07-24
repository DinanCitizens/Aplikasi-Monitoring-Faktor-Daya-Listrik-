import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/observable';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-kontrolsensor',
  templateUrl: './kontrolsensor.page.html',
  styleUrls: ['./kontrolsensor.page.scss'],
})
export class KontrolsensorPage {

  constructor( 
  public navCtrl: NavController,
  public alert: AlertController,
  public db: AngularFireDatabase
  ) {
  }

  
}
