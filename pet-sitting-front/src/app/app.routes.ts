import { Route } from '@angular/router';
import { SitterProfileComponent } from '@pet-sitting-front/sitter-profile';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'sitter-profile',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/sitter-profile').then(
        (m) => m.SitterProfileComponent
      ),
  },
];
