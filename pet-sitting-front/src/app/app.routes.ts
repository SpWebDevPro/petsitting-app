import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/home').then((m) => m.HomeComponent),
  },

  {
    path: 'sitter-profile',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/sitter').then((m) => m.SitterComponent),
  },
  {
    // Temporary road
    path: 'animal-list',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/animal').then((m) => m.AnimalComponent),
  },

{
    path: 'booking/:serviceId',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/booking').then((m) => m.BookingComponent),
  },
  {
    path: 'sitter/:userId/:serviceId',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/sitter').then((m) => m.PublicSitterComponent),
  },

  // Temporary road
  {
    path: 'card-animal',
    pathMatch: 'full',
    loadComponent: () =>

      import('@pet-sitting-front/animal').then((m) =>m.AnimalComponent),
  },
  {  path:'bookings',
  pathMatch:'full',
  loadComponent: () =>
    import('@pet-sitting-front/booking').then((m) =>m.BookingComponent),
},


  //temporary road notification
  {
    path: 'notification',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/sitter').then(
        (m) => m.BookingNotificationComponent
      ),
  },

  {
    path: 'parent-profile',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/parent').then((m) => m.ParentComponent),
  },
];
