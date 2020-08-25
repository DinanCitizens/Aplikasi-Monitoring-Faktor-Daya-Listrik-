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
  }
  
  Download(){
    var downloadurl="https://api.thingspeak.com/channels/1092085/feeds.json?api_key=YJQJLM4J0A3IP1QU&results=2";

    var request:DownloadRequest={
      uri:downloadurl,
      title:"Download",
      description: "Nyoba Download",
      mimeType: "user/txt",
      visibleInDownloadsUi:true,
      notificationVisibility:NotificationVisibility.
      VisibleNotifyCompleted,
      destinationInExternalFilesDir:{
        dirType: 'Downloads',
        subPath: 'MyFile.csv'
      }
    };
    this.downloader.download(request).then((location:string)=>{
      alert("File downloaded at:"+location)

      },(err)=>{
        alert(JSON.stringify(err));
      })
      }

  SelectDate(){
    var options={
      date: new Date(),
      mode:'date',
      androidTheme:this.datePicker.ANDROID_THEMES. THEME_TRADITIONAL
    }
    this.datePicker.show(options).then((date)=>{
      this.selectedDate = this.datePipe.transform(date,"dd-MM-yyyy");
    })
  }
  }
