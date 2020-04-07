import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  { 
  path: 'register', 
  loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule) 
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'arus',
    loadChildren: () => import('./arus/arus.module').then( m => m.ArusPageModule)
  },
  {
    path: 'tegangan',
    loadChildren: () => import('./tegangan/tegangan.module').then( m => m.TeganganPageModule)
  },
  {
    path: 'cosphi',
    loadChildren: () => import('./cosphi/cosphi.module').then( m => m.CosphiPageModule)
  },
  {
    path: 'daya',
    loadChildren: () => import('./daya/daya.module').then( m => m.DayaPageModule)
  },
  {
    path: 'kontrolsensor',
    loadChildren: () => import('./kontrolsensor/kontrolsensor.module').then( m => m.KontrolsensorPageModule)
  },
  {
    path: 'rekapitulasi',
    loadChildren: () => import('./rekapitulasi/rekapitulasi.module').then( m => m.RekapitulasiPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  }
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
