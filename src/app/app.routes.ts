import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth/login/login.component'),
    children: [
      {
        path: 'vehicles',
        loadComponent: () =>
          import('./managements/vehicles/vehicles.component'),
      },
      {
        path: 'drivers',
        loadComponent: () => import('./managements/drivers/drivers.component'),
      },
      {
        path: 'asignments',
        loadComponent: () =>
          import('./managements/asignments/asignments.component'),
      },

      {
        path: '',
        redirectTo: 'vehicles',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'vehicles',
        pathMatch: 'full',
      },
      {
        path:'login',
        loadComponent: ()=> import ('./auth/login/login.component')
      },
      {
        path:'login',
        loadComponent: ()=> import ('./auth/register/register.component')
      }

    ],
  },
];
