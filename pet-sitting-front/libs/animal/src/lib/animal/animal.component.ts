import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardAnimalComponent } from './card-animal/card-animal.component';

@Component({
  selector: 'pet-sitting-front-animal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CardAnimalComponent],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css',
})
export class AnimalComponent {
  @Output() adAnimalFormEvent = new EventEmitter();

  addNewForm(value: any) {
    console.log("hhhhhhhhhhh")
   this.adAnimalFormEvent.emit(value);
 }
  faPlusCircle = faCirclePlus;

  cards = [1,2];
}
