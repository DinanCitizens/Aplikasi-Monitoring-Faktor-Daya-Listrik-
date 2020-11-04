import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-infocosphi',
  templateUrl: './infocosphi.page.html',
  styleUrls: ['./infocosphi.page.scss'],
})
export class InfocosphiPage  {

  constructor(public navCtrl: NavController,
  public alertController: AlertController) { }

goToAboutPage(){
    this.navCtrl.navigateForward('/about');
    }
  
}
