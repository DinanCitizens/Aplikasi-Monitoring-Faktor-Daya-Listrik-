import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavController, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  validations_form: FormGroup;
  private myToast: any;

  validation_messages = {
   'email': [
     { type: 'required', message: 'Email harus diisi' },
     { type: 'pattern', message: 'Masukkan email yang valid' }
   ],
   'password': [
     { type: 'required', message: 'Password harus diisi' },
     { type: 'minlength', message: 'Password minimal 5 karakter' }
   ]
 };

  constructor(

    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router,
    public loadingService: LoadingService,

  ) { }

  ngOnInit() {

  this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
 
  tryRegister(value){
    this.authService.registerUser(value)
     .then(res => {
       console.log(res);
       this.myToast = this.toast.create({
         message: 'Berhasil mendaftar',
         duration: 5000
       }).then((toastData) => {
         console.log(toastData);
         toastData.present();
        });
       this.loadingService.present({
       duration: 2000
        });
       this.router.navigate(['']);
     }, err => {
       console.log(err);
       this.myToast = this.toast.create({
         message: 'Gagal mendaftar!!',
         duration: 5000
       }).then((toastData) => {
         console.log(toastData);
         toastData.present();
       });
     })
  }

  login(){
    this.navCtrl.navigateBack('');
  }
}
