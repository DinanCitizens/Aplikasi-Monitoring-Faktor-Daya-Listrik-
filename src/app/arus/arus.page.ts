import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-arus',
  templateUrl: './arus.page.html',
  styleUrls: ['./arus.page.scss'],
})

export class ArusPage {

constructor(
public navCtrl: NavController
) { }

goToArusRPage(){
    this.navCtrl.navigateForward('/arusr');
    }

goToArusSPage(){
    this.navCtrl.navigateForward('/aruss');
    }

goToArusTPage(){
    this.navCtrl.navigateForward('/arust');
    }
}
