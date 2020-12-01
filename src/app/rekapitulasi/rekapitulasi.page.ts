import { Component, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import * as json2csv from 'json2csv';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-rekapitulasi',
  templateUrl: './rekapitulasi.page.html',
  styleUrls: ['./rekapitulasi.page.scss'],
})
export class RekapitulasiPage {

  start: any;
  end: any;
  downloadLink: any;

  constructor(
    public navCtrl: NavController,
    public api: ApiService,
    private file: File
  ) {  }

  async getData() {
    let res: any = await this.api.get(this.start, this.end);
    return res.feeds;
  }
  
  async downloadRekap() {
    let data = await this.getData(); 
    let fields = ['created_at', 'entry_id', 'field1'];
    let csv = json2csv.parse(data, {
      fields, output: 'test.xlsx'
    });
    //let blob = new Blob([csv], {type: 'text/plain'});

    let dirExists = false;
    try {
      await this.file.checkDir(this.file.externalDataDirectory, 'csv');
      dirExists = true; 
    } catch(e) {
      try {
        await this.file.createDir(this.file.externalDataDirectory, 'csv', false);
        dirExists = true;
      } catch(e) {
        console.log('Failed to create directory');
      }
    }

    if(dirExists == true) {
      try {
        await this.file.createFile(this.file.externalDataDirectory, 'Rekapitulasi Data Sensor.xlsx', true);
        await this.file.writeFile(this.file.externalDataDirectory, 'Rekapitulasi Data Sensor.xlsx', csv, {replace: false, append: true});
        console.log('Berhasil membuat file');
      } catch(e) {
       console.log('Gagal membuat file'); 
      }
    }
   
  }  

}
    

