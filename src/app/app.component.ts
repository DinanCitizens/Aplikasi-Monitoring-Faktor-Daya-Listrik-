import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Dashboard',
      url: 'dashboard',
      icon: 'home'
    },
    {
      title: 'Monitoring Arus',
      url: 'arus',
      icon: 'bar-chart'
    },
    {
      title: 'Monitoring Tegangan',
      url: 'tegangan',
      icon: 'bar-chart'
    },
    {
      title: 'Monitoring CosPhi',
      url: 'cosphi',
      icon: 'bar-chart'
    },
    {
      title: 'Monitoring Daya',
      url: 'daya',
      icon: 'bar-chart'
    },
    {
      title: 'Kontrol Sensor',
      url: 'kontrolsensor',
      icon: 'settings'
    },
    {
      title: 'Rekapitulasi Data',
      url: 'rekapitulasi',
      icon: 'documents'
    },
    {
      title: 'Keluar',
      url: 'logout',
      icon: 'exit'
    }
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router  
  ) {
  this.initializeApp();
  }
  initializeApp(){
  this.platform.ready().then(() => {
  this.statusBar.styleDefault();
  this.splashScreen.hide();
  
  this.fcm.getToken().then(token => {
  console.log(token);
  });

  this.fcm.onTokenRefresh().subscribe(token => {
  console.log(token);
  });

  this.fcm.onNotification().subscribe(data => {
  console.log(data);
  if (data.wasTapped) {
  console.log('Receive in background');
  this.router.navigate([data.landing_page, data.price]);
  } else {
  console.log('Receive in foreground');
  this.router.navigate([data.landing_page, 
  data.price]);

  }
  });
  this.fcm.subscribeToTopic('people');
  this.fcm.unsubscribeFromTopic('marketing');
});
}
}






  
