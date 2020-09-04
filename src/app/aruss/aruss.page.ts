import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as HighCharts from 'highcharts';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-aruss',
  templateUrl: './aruss.page.html',
  styleUrls: ['./aruss.page.scss'],
})
export class ArussPage {

  chart: any;
  datatanggal: any = [];
  datanilai: any = [];


  constructor(
  public navCtrl: NavController,
  private http: HttpClient
  ) { 
  
  }

 
goToArusPage(){
    this.navCtrl.navigateForward('/arus');
    }

getConfigResponse():Promise<any> {
  return this.http.get('https://api.thingspeak.com/channels/1092085/feeds.json?api_key=YJQJLM4J0A3IP1QU&results=10').toPromise();
}

ionViewDidEnter() {
  this.chart = HighCharts.chart('container', {
    chart: {
      type: 'spline',

      marginRight: 10,
      events: {
        load: function(){
          var series = this.series[0];
          setInterval(function () {
            var x = (new Date()).getTime(),
              y = Math.random();
            series.addPoint([x, y], true, true);
          }, 1000);
        }
      }
  },

  time: {
    useUTC: false
  },

  title: {
    text: 'Live Monitoring Arus S'
  },

  accessibility:{
    announceNewData: {
      enabled: true,
      minAnnounceInterval: 15000,
      announcementFormatter: function (allSeries, newSeries, newPoint) {
        if (newPoint){
          return 'New point added. Value: ' + newPoint.y;
        }
        return false;
      }
    }
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
    name: 'Random data',
    type: undefined,
     data: function () {
       var data = [],
         time = (new Date()).getTime(),i;

       for (i = -19; i <= 0; i +=1){
        data.push({
           x: time + i * 15000,
           y: Math.random()
         });
       }
       return data;
     }()
  }]
});

}
}
