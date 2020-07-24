import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-teganganr',
  templateUrl: './teganganr.page.html',
  styleUrls: ['./teganganr.page.scss'],
})
export class TeganganrPage {

  constructor(
  public navCtrl: NavController) { }

  goToTeganganPage(){
    this.navCtrl.navigateForward('/tegangan');
    }
 
ionViewDidEnter(){
  var myChart = HighCharts.chart('container', {
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
    text: 'Live Monitoring Tegangan R'
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
      text: 'Voltage'
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

  legend: {
    enabled: false
  },

  exporting: {
    enabled: false
  },

  series: [{
    name: 'Random data',
    type: undefined,
    data: (function () {
      var data = [],
        time = (new Date()).getTime(),i;

      for (i = -19; i <= 0; i +=1){
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())
  }]
});

}
}

