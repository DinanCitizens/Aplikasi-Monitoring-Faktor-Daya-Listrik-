import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NavController, MenuController, AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  userEmail: string;
  relay: any;
  relaisdoc: any;
  statuspzem: any;

  constructor(

  private navCtrl: NavController,
  private authService: AuthenticationService,
  public menuCtrl: MenuController,
  public alert : AlertController,
  public db : AngularFireDatabase

  ) { 
    this.relaisdoc = this.db.list('/relay').valueChanges().subscribe( res => {
      this.relay = res[0];
      console.log(this.relay);
    });
  }
  aktivasipzem(statuspzem){
    console.log(this.statuspzem);
    this.db.list('relay').update('status', {
      isChecked: statuspzem
    }).then(() => {
      alert('Status Berubah');
      console.log(this.relay);
    })
  }

  ionViewWillEnter() {
  this.menuCtrl.enable(true);
  }

  ngOnInit() {

  if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }

  }

  goToInfoListrik(){
    this.navCtrl.navigateForward('/infolistrik');
    }
  goToInfoArus(){
    this.navCtrl.navigateForward('/infoarus');
    }
  goToInfoTegangan(){
    this.navCtrl.navigateForward('/infotegangan');
    }
  goToInfoCosphi(){
    this.navCtrl.navigateForward('/infocosphi');
    }
  goToInfoDaya(){
    this.navCtrl.navigateForward('/infodaya');
    }

}
