import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from './services/authentication.service';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { LoadingService } from './services/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{

  rootPage:any
  userEmail: string;
  private myToast: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private loadingService: LoadingService,
    private alertController : AlertController,
    private toast: ToastController,
  ) {
  this.initializeApp();
  this.afAuth.authState.subscribe(user => {
    if (!user || !user.emailVerified) {
    this.rootPage = 'LoginPage'
    }
    else {
    this.rootPage = 'DashboardPage'
    }
  })
  }

   goTologout(){
   
    this.alertController.create({
      header: 'Apakah anda ingin keluar?',
      buttons: [
      {
        text: 'ya',
        handler: () => {
          this.loadingService.present({
          message:'Tunggu Sebentar',
          duration: 2000
          });
          this.navCtrl.navigateForward('logout');
          this.myToast = this.toast.create({
             message: 'Logout Berhasil',
             duration: 5000
             }).then((toastData) => {
                console.log(toastData);
             toastData.present();
             });
         console.log('Sudah logout');
        }
      },
      {
        text: 'Batal',
        handler: () => {
          this.navCtrl.navigateBack('dashboard');
          console.log('Batal logout');
        }
      }]
     }).then(res => {
       res.present();
     });
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

ngOnInit() {

  if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }

  }

}






  
