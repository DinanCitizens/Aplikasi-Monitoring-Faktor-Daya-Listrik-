import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {

  constructor(public navCtrl: NavController,
  public alertController: AlertController) { }

  goToInfoListrik(){
    this.navCtrl.navigateForward('/infolistrik');
    }

goToInfoArus(){
    this.navCtrl.navigateForward('/infoarus');
    }

goToInfoTegangan(){
    this.navCtrl.navigateForward('/infotegangan');
    }

goToInfoCosphi(){
    this.navCtrl.navigateForward('/infocosphi');
    }

goToInfoDaya(){
    this.navCtrl.navigateForward('/infodaya');
    }
}
