import { Component, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';
import { Platform } from '@ionic/angular';
import * as papa from 'papaparse';

@Component({
  selector: 'app-rekapitulasi',
  templateUrl: './rekapitulasi.page.html',
  styleUrls: ['./rekapitulasi.page.scss'],
})
export class RekapitulasiPage {

selectedDate: string="";
csvData: any[] = [];
headerRow: any[] = [];

  constructor( 
  private http: HttpClient,
  public navCtrl: NavController,
  private downloader: Downloader,
  public datePicker: DatePicker,
  public datePipe: DatePipe,
  public platform: Platform
  ) {
    this.platform.ready().then(()=> {
      this.selectedDate = this.datePipe.transform(new Date(),"dd-MM-yyyy");
    })
    // this.readCsvData();
  }

  // private readCsvData() {
  //   this.http.get('https://api.thingspeak.com/channels/1092085/feeds.json?api_key=YJQJLM4J0A3IP1QU&results=10')
  //     .subscribe(
  //     data => this.extractData(data),
  //     err => this.handleError(err)
  //     );
  // }

  // private extractData(res) {
  //   let csvData = res['_body'] || '';
  //   let parsedData = papa.parse(csvData).data;
 
  //   this.headerRow = parsedData[0];
 
  //   parsedData.splice(0, 1);
  //   this.csvData = parsedData;
  // }
 
  // downloadCSV() {
  //   let csv = papa.unparse({
  //     fields: this.headerRow,
  //     data: this.csvData
  //   });
 
  //   // Dummy implementation for Desktop download purpose
  //   var blob = new Blob([csv]);
  //   var a = window.document.createElement("a");
  //   a.href = window.URL.createObjectURL(blob);
  //   a.download = "newdata.csv";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // }
 
  // private handleError(err) {
  //   console.log('something went wrong: ', err);
  // }
 
  // trackByFn(index: any, item: any) {
  //   return index;
  // }

  
  }
