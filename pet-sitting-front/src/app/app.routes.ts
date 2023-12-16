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
  },{

  path: 'animal-list',
    pathMatch: 'full',
    loadComponent: () =>
      import('@pet-sitting-front/animal').then((m) => m.AnimalComponent),
  }
];

/*
 {
    path:``,
    pathMatch:`full`,
    loadComponent: ()=>import (`@org/home`).then((m)=>m.HomeComponent),
  },{
  path:'list/:pokemonName',
  loadComponent:()=>
  import('@org/details').then((m) => m.DetailsComponent)
},
{
  path:'list',
  pathMatch: 'full',
  loadComponent:()=>
  import('@org/list').then((m) => m.ListComponent)
},
{
  path: 'pokemons',
  pathMatch: 'full',
  loadComponent: () => import('@org/list').then((m) => m.ListComponent),
},
{
  path: '**',
loadComponent: () => import('@org/routeNotFound').then(m => m.RouteNotFoundComponent)
}*/
