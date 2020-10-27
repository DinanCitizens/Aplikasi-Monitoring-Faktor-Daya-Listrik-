import { Component, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Platform } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-rekapitulasi',
  templateUrl: './rekapitulasi.page.html',
  styleUrls: ['./rekapitulasi.page.scss'],
})
export class RekapitulasiPage {

selectedDate: string="";
chart: any;
datafield: any;

  constructor( 
  private http: HttpClient,
  public navCtrl: NavController,
  public datePipe: DatePipe,
  public platform: Platform,
  public api: ApiService,
  public appService: AppService
  ) {
    this.platform.ready().then(()=> {
      this.selectedDate = this.datePipe.transform(new Date(),"dd-MM-yyyy");
    })
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

   jsonData =  [
      {
        created_at: "Anil Singh",
        entry_id: 33,
        field1: 98,
      },
      {
        created_at: 'Reena Singh',
        entry_id: 28,
        field1: 99,
      },
      {
        created_at: 'Aradhya',
        entry_id: 4,
        field1: 99,
      },
    ];

  download(){
    this.appService.downloadFile(this.jsonData, 'jsontocsv');
  }

}
    

