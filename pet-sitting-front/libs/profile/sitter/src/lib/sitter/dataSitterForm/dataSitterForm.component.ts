import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'pet-sitting-front-data-sitter-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dataSitterForm.component.html',
  styleUrl: './dataSitterForm.component.scss',
})
export class DataSitterFormComponent {
  @Input()
  //user!: UserModel;
  userId!: number;

  dataSitterForm = new FormGroup({
    presentation: new FormControl('', [Validators.required]),
    accomodationType: new FormControl('', [Validators.required]),
    livingSpace: new FormControl('', [Validators.required]),
    hasGarden: new FormControl(''),
    hasVehicule: new FormControl(''),
  });

  get presentation() {
    return this.dataSitterForm.controls.presentation;
  }

  get accomodationType() {
    return this.dataSitterForm.controls.accomodationType;
  }

  get livingSpace() {
    return this.dataSitterForm.controls.livingSpace;
  }

  get hasGarden() {
    return this.dataSitterForm.controls.hasGarden;
  }

  get hasVehicule() {
    return this.dataSitterForm.controls.hasVehicule;
  }

  onDataSitterFormSubmit() {
    console.log('form dataSitter :', this.dataSitterForm.value);
  }
}
