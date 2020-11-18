import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as HighCharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { AngularFireList } from '@angular/fire/database/interfaces';
import { ToastController } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-arusr',
  templateUrl: './arusr.page.html',
  styleUrls: ['./arusr.page.scss'],
})
export class ArusrPage{

  chart: any;
  datatanggal: any = [];
  datanilai: any = [];
  jumlah_result: number;

  constructor(
  public navCtrl: NavController,
  private http: HttpClient,
  public toastCtrl: ToastController,
  public loadingService: LoadingService,

  ) {
    this.jumlah_result = 0;
    this.kirim();
    this.loadingService.present({});
  }

goToArusPage(){
    this.navCtrl.navigateForward('/arus');
}

url:any;
kirim() {
  const data = 'https://api.thingspeak.com/channels/1092085/fields/1.json?api_key=YJQJLM4J0A3IP1QU&results='+this.jumlah_result;
  this.http.get(data).subscribe(res => {
    this.url = res;
  });
  console.log(this.url);
}    

// getConfigResponse():Promise<any> {
//   return this.http.get('https://api.thingspeak.com/channels/1092085/fields/1.json?api_key=YJQJLM4J0A3IP1QU&results=5').toPromise();
// }

async chartOnLoad() {
  if(this.url != undefined) {
    this.chart.series[0].setData(this.url.feeds.map(feed => {
      var x = (new Date(feed.created_at)).getTime();
      var y = parseFloat(feed.field1);
      return {
        x: x,
        y: y,
        name: "Point",
        color: "#EFEFEF"
      }
    }), true);
  }
}

ionViewDidEnter() {
  this.chart = HighCharts.chart('container', {
    chart: {
      type: 'spline',
      marginRight: 10,
      events: {
        load: () => {
          setInterval(async () => {
            await this.chartOnLoad();
          }, 1000);
          this.loadingService.dismiss();
        }
      },
    },

    time: {
      useUTC: false
    },

    title: {
      text: 'Live Monitoring Arus R'
    },

    xAxis: {
     type: 'datetime',
       tickPixelInterval: 150
     },

    yAxis: {
      title: {
        text: 'Current'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },

    tooltip: {
      headerFormat: '<b>{series.name}</b></br>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },

    exporting: {
      enabled: false
    },

    series: [{
      name: 'Arus R',
      type: undefined,
      data: []
    }]

  });

  }

}

