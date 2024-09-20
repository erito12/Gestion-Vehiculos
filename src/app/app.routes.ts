import { Routes } from '@angular/router';
import LoginComponent from './auth/login/login.component';
import RegisterComponent from './auth/register/register.component';
import { Component } from '@angular/core';
import LayoutComponent from './layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'layout', component: LayoutComponent},
  {
    path: '',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: 'assignment',
        loadComponent: () => import('./pages/management-assignments/management-assignments.component')
      },
      {
        path: 'vehicles',
        loadComponent: () => import('./pages/management-vehicles/management-vehicles.component')
      },
      {
        path: 'drivers',
        loadComponent: () => import('./pages/management-drivers/management-drivers.component')
      },
    ],
  },
 /*  { path: '**', redirectTo: '/login' }  */// Ruta wildcard opcional
];
