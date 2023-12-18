import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent, CardAnimalComponent, ListAnimalBookingComponent}  from '@pet-sitting-front/animal';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {FormAnimalComponent} from '@pet-sitting-front/animal';

@Component({
  selector: 'pet-sitting-front-booking',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatNativeDateModule,
    FormAnimalComponent, ReactiveFormsModule, ListAnimalBookingComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
 showFormAddNewAnimal : boolean = false;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  addFormNewAnimal(){
  this.showFormAddNewAnimal = true;
  }
 
}