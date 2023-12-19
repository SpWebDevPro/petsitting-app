import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalTypeEnum, GenderEnum , AnimalModel, AnimalService} from '@pet-sitting-front/services';
import { UserModel }  from '@pet-sitting-front/services';


import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'pet-sitting-front-form-animal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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
animal = {isSocial : false,isSterilized : false, isVaccinated : false, } as AnimalModel;
user : UserModel = {}
@Output() closeFormEvenet = new EventEmitter();
@Output() animalCreatedEvenet = new EventEmitter();
constructor(private animalService: AnimalService){
  this.listGenderEnume = Object.keys(GenderEnum);
  this.listAnimalTypes = Object.keys(AnimalTypeEnum);
}


cancelForm(){
  this.closeFormEvenet.emit();
}
saveAnimal(){

  const userID = localStorage.getItem('UserConnected');

 
  if(localStorage.getItem('UserConnected') !== null)
  {

    this.animal.userId= Number(userID);
   

    
    this.animalService.createAnimal(this.animal).subscribe({
      complete: () => {}, // completeHandler
      error: (err) => {
      console.log(err)
      },    // errorHandler 
      next: (data) => { 
        this.animalCreatedEvenet.emit(data);

  }});
    }
  }

}
