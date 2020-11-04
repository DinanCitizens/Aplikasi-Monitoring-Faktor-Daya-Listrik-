import { Component, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';

@Component({
  selector: 'app-rekapitulasi',
  templateUrl: './rekapitulasi.page.html',
  styleUrls: ['./rekapitulasi.page.scss'],
})
export class RekapitulasiPage {

datafield: any;

  constructor( 
  private http: HttpClient,
  private downloader: Downloader,
  public navCtrl: NavController,
  public platform: Platform,
  public api: ApiService,
  

  ) {
    this.getDataField();
  }
  async getDataField(){
    await this.api.getDataField().subscribe(res => {
      console.log(res);
      this.datafield = res.results;
      console.log(this.datafield);
    }, err => {
      console.log(err);
    });
  }


}
    

