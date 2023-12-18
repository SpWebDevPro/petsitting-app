import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalTypeEnum, GenderEnum , AnimalModel, AnimalService} from '@pet-sitting-front/services';
import { UserModel }  from '@pet-sitting-front/services';


import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
animal = {} as AnimalModel;

constructor(private animalService: AnimalService){
  this.listGenderEnume = Object.keys(GenderEnum);
  this.listAnimalTypes = Object.keys(AnimalTypeEnum);
}

user : UserModel = {}

saveAnimal(){
  console.log("im here");
  const userID = localStorage.getItem('UserConnected');

 
  if(localStorage.getItem('UserConnected') !== null)
  {

    this.animal.user_id= Number(userID);
    this.user.id =  this.animal.user_id;
    console.log(this.animal.dateOfBirth);
    console.log(this.animal.user_id);
    
    this.animalService.createAnimal(this.animal).subscribe({
      complete: () => {}, // completeHandler
      error: (err) => {
      console.log(err)
      },    // errorHandler 
      next: (data) => { 
  
        console.log(data);
  }});
    }
  }

}
