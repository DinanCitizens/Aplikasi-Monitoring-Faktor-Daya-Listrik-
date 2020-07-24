import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from 'src/environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';


import { AuthenticationService } from './services/authentication.service';
import { ApiService } from './services/api.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FCM } from '@ionic-native/fcm/ngx';
import * as firebase from 'firebase';
firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
  IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireDatabaseModule,
  HttpClientModule,
  ],
  exports:[],

  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationService,
    ApiService,
    FCM,
    HTTP,
    Downloader,
    DatePicker,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
