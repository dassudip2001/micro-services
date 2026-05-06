import { Routes } from '@angular/router';
import { canActivateAuth } from './core/auth-gard-guard';

export const routes: Routes = [

  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then(m => m.Home)
  },
  {
      canActivate:[canActivateAuth],
    path:'dashboard',
    loadComponent:()=>import('./features/dashboard-ui/dashboard-ui').then(m=>m.DashboardUi)
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  }
];
