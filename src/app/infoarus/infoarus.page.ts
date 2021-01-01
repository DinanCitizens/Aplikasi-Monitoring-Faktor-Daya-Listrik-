import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-infoarus',
  templateUrl: './infoarus.page.html',
  styleUrls: ['./infoarus.page.scss'],
})
export class InfoarusPage  {

  constructor(public navCtrl: NavController,
  public alertController: AlertController) { }

  goToAboutPage(){
    this.navCtrl.navigateForward('/dashboard');
    }

}
