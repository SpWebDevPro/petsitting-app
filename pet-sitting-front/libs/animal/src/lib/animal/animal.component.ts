
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalModel, AnimalService, AnimalTypeEnum, GenderEnum } from '@pet-sitting-front/services';
import { CardAnimalComponent } from "./card-animal/card-animal.component";
import { EMPTY, Observable, catchError } from 'rxjs';

@Component({
    selector: 'pet-sitting-front-animal',
    standalone: true,
    templateUrl: './animal.component.html',
    styleUrl: './animal.component.scss',
    imports: [CommonModule, CardAnimalComponent]
})
export class AnimalComponent implements OnInit {


  constructor(private animalService: AnimalService) {

    const userID = localStorage.getItem('UserConnected') ;
    if(userID !== null)
    {

  
      this.user_id= Number(userID);
    }
  }
  user_id!:number;
  animalList$!:Observable<AnimalModel[]>;

  ngOnInit(): void {
    this.animalList$ = this.animalService.getAnimalListByUserId(this.user_id).pipe(
      catchError((error)=> {
        console.error(error);
        return EMPTY;
      })
    )

  }

}
