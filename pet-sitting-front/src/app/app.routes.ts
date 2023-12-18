import { Component } from '@angular/core';
import { Route } from '@angular/router';
/* import { SitterProfileComponent } from '@pet-sitting-front/sitter-profile'; */
/* import { AppComponent } from './app.component'; */

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
    // Temporary road
    path:'card-animal',
    pathMatch:'full',
    loadComponent: () =>
      import('@pet-sitting-front/animal').then((m) =>m.AnimalComponent),
  }
];
