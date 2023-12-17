import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'pet-sitting-front-service-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './serviceForm.component.html',
  styleUrl: './serviceForm.component.scss',
})
export class ServiceFormComponent {
  @Input()
  //user!: UserModel;
  userId!: number;

  serviceForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    dailyPrice: new FormControl('', [Validators.required]),
  });

  get description() {
    return this.serviceForm.controls.description;
  }

  get type() {
    return this.serviceForm.controls.type;
  }

  get name() {
    return this.serviceForm.controls.name;
  }

  get dailyPrice() {
    return this.serviceForm.controls.description;
  }

  onServiceFormSubmit() {
    console.log('form service :', this.serviceForm.value);
  }
}
