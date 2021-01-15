import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, MenuController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  private myToast: any;

  constructor(

    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    public menuCtrl: MenuController,
    public loadingService: LoadingService,
    private toast: ToastController,

  ) {} 
  
  ionViewWillEnter() {
  this.menuCtrl.enable(false);
  }

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
 
 
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email harus diisi.' },
      { type: 'pattern', message: 'Email tidak Valid' }
    ],
    'password': [
      { type: 'required', message: 'Password harus diisi.' },
      { type: 'minlength', message: 'Password minimal 5 karakter' }
    ]
  };
 
 
  loginUser(value){
    this.loadingService.present({
        message:'Tunggu Sebentar',
        duration: 2000
    });
    this.myToast = this.toast.create({
         message: 'Login Berhasil',
         duration: 5000
    }).then((toastData) => {
         console.log(toastData);
         toastData.present();
     });
    this.authService.loginUser(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";

      this.navCtrl.navigateForward('dashboard');
    }, err => {
      this.myToast = this.toast.create({
         message: 'Login Gagal',
         duration: 5000
    }).then((toastData) => {
         console.log(toastData);
         toastData.present();
     });
      this.errorMessage = err.message;
    })
  }
 
  goToRegisterPage(){
    this.navCtrl.navigateForward('register');
  }
  
}
