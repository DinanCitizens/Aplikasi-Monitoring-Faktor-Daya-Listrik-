import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-tegangan',
  templateUrl: './tegangan.page.html',
  styleUrls: ['./tegangan.page.scss'],
})
export class TeganganPage {

  constructor(
  public navCtrl: NavController) { }

  goToTeganganRPage(){
    this.navCtrl.navigateForward('/teganganr');
    }

goToTeganganSPage(){
    this.navCtrl.navigateForward('/tegangans');
    }

goToTeganganTPage(){
    this.navCtrl.navigateForward('/tegangant');
    }
}
