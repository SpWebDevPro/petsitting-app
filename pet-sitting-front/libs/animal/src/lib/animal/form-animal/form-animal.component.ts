import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'pet-sitting-front-form-animal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-animal.component.html',
  styleUrl: './form-animal.component.scss',
})
export class FormAnimalComponent {
  animalForm = new FormGroup({
    animalName : new FormControl(''),
    animalRace : new FormControl(''),
    animalType : new FormControl(''),
    animalGender : new FormControl(''),
    poidsAnimal : new FormControl(''),
    isVaccinated : new FormControl(''),
    isSterilized : new FormControl(''),
    isSocial : new FormControl('')    
  })


}
