import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-infotegangan',
  templateUrl: './infotegangan.page.html',
  styleUrls: ['./infotegangan.page.scss'],
})
export class InfoteganganPage  {

  constructor(public navCtrl: NavController,
  public alertController: AlertController) { }

  goToAboutPage(){
    this.navCtrl.navigateForward('/dashboard');
    }

}
