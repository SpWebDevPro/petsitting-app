import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'pet-sitting-front-update-data-sitter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-data-sitter.component.html',
  styleUrl: './update-data-sitter.component.css',
})
export class UpdateDataSitterComponent {
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
