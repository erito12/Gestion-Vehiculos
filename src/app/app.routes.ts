import { Routes } from '@angular/router';
import LoginComponent from './auth/login/login.component';
import RegisterComponent from './auth/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent },

 /*  {
    path: '',
    loadComponent: () => import('./auth/login/login.component'),
    children: [    
      
      {
        path:'register',
        loadComponent: ()=> import ('./auth/register/register.component')
      }

    ],
  }, */
];
