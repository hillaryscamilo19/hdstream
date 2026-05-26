import { Route } from '@angular/router';

export const appRoutes: Route[] = [

    {
    path: '',
    loadComponent: () =>
      import('../app/layouts/main-layout/main-layout').then(
        (m) => m.MainLayout
      ),

      children:[
        {
          path: '',
          loadComponent: () =>
            import('./pages/home/home').then(
              (m) => m.HomeComponent
            ),
        },
      ],
  }, 
];
