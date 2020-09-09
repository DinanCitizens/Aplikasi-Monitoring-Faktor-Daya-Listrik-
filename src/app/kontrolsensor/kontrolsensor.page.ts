import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-kontrolsensor',
  templateUrl: './kontrolsensor.page.html',
  styleUrls: ['./kontrolsensor.page.scss'],
})
export class KontrolsensorPage {

	relay : any;
	relay2 : any;
	relaisDoc : any;
	statusTegangan : any;
	statusArus : any;

  constructor( 
  public alert: AlertController,
  public db: AngularFireDatabase
  ) {
  	this.relaisDoc = this.db.list('/relay').valueChanges().subscribe( res => {
  		this.relay = res[0];
  		console.log(this.relay);
  	})

  	this.relaisDoc =  this.db.list('/relay2').valueChanges().subscribe( res => {
  		this.relay2 = res[0];
  		console.log(this.relay2);
  	});
  }

  aktivasiTegangan(statusTegangan) {
  	console.log(this.statusTegangan);
  	this.db.list('/relay').update('status', {
  		isChecked: statusTegangan
  	}).then(() => {
  		alert('Data berhasil diperbarui.');
  		console.log(this.relay);
  	})
  }

  aktivasiArus(statusArus) {
  	console.log(this.statusArus);
  	this.db.list('/relay2').update('status', {
  		isChecked: statusArus
  	}).then(() => {
  		alert('Data berhasil diperbarui.');
  		console.log(this.relay2);
  	})
  }



  
}
