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
  //@Input() animal: any; // Adjust the type based on your AnimalModel

  constructor(private animalService: AnimalService) {}

 // animal: AnimalModel = {
   // id:32,
    //type:AnimalTypeEnum.CAT,
    //gender:GenderEnum.FEMALE,
    //date_of_birth:new Date('2015-10-10'),
    //is_vaccinated:true,
    //is_sterilized:true,
    //weight:5,
    //pet_name:'Cruella',
    //breed:'Siamois',
    //is_social:false,
    //pet_photo:'https://matouchat.fr/wp-content/uploads/2021/03/siamois-846x566.jpg',
    //user_id:6,
  //};


  user_id:number = 3;
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
