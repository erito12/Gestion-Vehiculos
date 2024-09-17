import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component'),
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
    ],
  },
];
