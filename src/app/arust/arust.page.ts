import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as HighCharts from 'highcharts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-arust',
  templateUrl: './arust.page.html',
  styleUrls: ['./arust.page.scss'],
})
export class ArustPage {

  chart: any;
  datatanggal: any = [];
  datanilai: any = [];

  constructor(
  public navCtrl: NavController,
  private http: HttpClient
  ) { }

 goToArusPage(){
    this.navCtrl.navigateForward('/arus');
    }

  getConfigResponse():Promise<any> {
  return this.http.get('https://api.thingspeak.com/channels/1092085/feeds.json?api_key=YJQJLM4J0A3IP1QU&results=10').toPromise();
  } 

 async chartOnLoad() {
  console.log(this.chart.series[0]);
  let data = await this.getConfigResponse();
  console.log(data.feeds);
  this.chart.series[0].setData(data.feeds.map(feed => {
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

ionViewDidEnter() {
  this.chart = HighCharts.chart('container', {
    chart: {
      type: 'spline',
      marginRight: 10,
      events: {
        load: () => {
          setInterval(async () => {
            await this.chartOnLoad();
          }, 15000);
        }
      },
    },

    time: {
      useUTC: false
    },

    title: {
      text: 'Live Monitoring Arus T'
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
      name: 'Arus T',
      type: undefined,
      data: []
    }]

  });

  }
}
