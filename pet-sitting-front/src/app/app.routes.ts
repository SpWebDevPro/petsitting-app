import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/home').then((m) => m.HomeComponent),
  },
  {
    path: 'sitter/:userId/:serviceId',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/sitter').then((m) => m.PublicSitterComponent),
  },

  {
    path: 'sitter-profile',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/sitter').then((m) => m.SitterComponent),
  },
  {
    path: 'animal-list',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/animal').then((m) => m.AnimalComponent),
  },
  {

  path: 'animal-form',
    pathMatch: 'full',
    loadComponent: () =>
    import('@pet-sitting-front/animal').then((m) => m.FormAnimalComponent),
  },
{
    path: 'booking/:serviceId',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/booking').then((m) => m.BookingComponent),
  },
];

