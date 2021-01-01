import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-infolistrik',
  templateUrl: './infolistrik.page.html',
  styleUrls: ['./infolistrik.page.scss'],
})
export class InfolistrikPage {

  constructor(public navCtrl: NavController,
  public alertController: AlertController) { }

 goToAboutPage(){
    this.navCtrl.navigateForward('/dashboard');
    }

}
