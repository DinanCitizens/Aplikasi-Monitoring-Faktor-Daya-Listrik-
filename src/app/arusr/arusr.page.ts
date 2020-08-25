import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-arusr',
  templateUrl: './arusr.page.html',
  styleUrls: ['./arusr.page.scss'],
})
export class ArusrPage{

  constructor(
  public navCtrl: NavController,
  private http: HttpClient
  ) { }

goToArusPage(){
    this.navCtrl.navigateForward('/arus');
    }

}

