import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-infodaya',
  templateUrl: './infodaya.page.html',
  styleUrls: ['./infodaya.page.scss'],
})
export class InfodayaPage  {

  constructor(public navCtrl: NavController,
  public alertController: AlertController) { }

  goToAboutPage(){
    this.navCtrl.navigateForward('/about');
    }

}
