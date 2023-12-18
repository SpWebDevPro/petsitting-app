import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalTypeEnum, GenderEnum } from '@pet-sitting-front/services';


import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'pet-sitting-front-form-animal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-animal.component.html',
  styleUrl: './form-animal.component.scss',
})
export class FormAnimalComponent {
  readonly genderAnimalEnum = GenderEnum;
  readonly animalTypeEnum = AnimalTypeEnum;
  listGenderEnume!: string[];
  listAnimalTypes!: string[];
typeAnimal!: string;
genderAnimal!: string;


constructor(){
  this.listGenderEnume = Object.keys(GenderEnum);
  this.listAnimalTypes = Object.keys(AnimalTypeEnum);
}


saveAnimal(){
  
}
}
