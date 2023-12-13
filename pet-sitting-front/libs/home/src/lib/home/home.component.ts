import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '@pet-sitting-front/nav-bar';
import { HeaderComponent } from '@pet-sitting-front/header';
import { CardServiceComponent } from '../card-service/card-service.component';
import { AppDataState, DataStateEnum, ServiceModel, SitterService } from '@pet-sitting-front/services';
import { Observable, catchError, map, of, startWith } from 'rxjs';
@Component({
  selector: 'pet-sitting-front-home',
  standalone: true,
  imports: [CommonModule, NavBarComponent, HeaderComponent, CardServiceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  
  constructor(private sitterService: SitterService) {
   this. getServices("","");
  }

  services$: Observable<AppDataState<ServiceModel[]>> | null = null;
  readonly DataStateEnum = DataStateEnum; // affecte a type to a varibale
  getServices(type:string, city : string){

    this.services$ = this.sitterService.getServices(type, city).pipe(

      map(data =>{
      
          return ({ data: data, dataState: DataStateEnum.LOADED})
         } ),
         startWith({ dataState:DataStateEnum.LOADING }),
         catchError(error => {
           return of({ dataState:DataStateEnum.ERROR, errorMessage: error.message });
         })
  )
  }

  searchEvent(event:  any){

   
this.getServices(event['typeService'], event['localisation']);
  }
}

