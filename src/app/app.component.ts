import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  userEmail: string;
  public selectedIndex = 0;
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
    
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  
  }
}
