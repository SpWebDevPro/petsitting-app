import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AnimalModel, AnimalTypeEnum, GenderEnum } from '@pet-sitting-front/services';
import { CardAnimalComponent } from "./card-animal/card-animal.component";

@Component({
    selector: 'pet-sitting-front-animal',
    standalone: true,
    templateUrl: './animal.component.html',
    styleUrl: './animal.component.scss',
    imports: [CommonModule, CardAnimalComponent]
})
export class AnimalComponent implements OnInit {
  //@Input() animal: any; // Adjust the type based on your AnimalModel

  constructor(private http: HttpClient) {}

  animal: AnimalModel = {
    id:32,
    type:AnimalTypeEnum.CAT,
    gender:GenderEnum.FEMALE,
    date_of_birth:new Date('2015-10-10'),
    is_vaccinated:true,
    is_sterilized:true,
    weight:5,
    pet_name:'Cruella',
    breed:'Siamois',
    is_social:false,
    pet_photo:'https://matouchat.fr/wp-content/uploads/2021/03/siamois-846x566.jpg',
    user_id:6,
  };

  ngOnInit(): void {
    // You can make HTTP requests here to fetch animal data from the backend
  }

}
