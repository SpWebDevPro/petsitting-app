import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { CardAnimalBookingComponent } from '../card-animal-booking/card-animal-booking.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'pet-sitting-front-list-animal-booking',
  standalone: true,
  imports: [CommonModule, CardAnimalBookingComponent, FontAwesomeModule],
  templateUrl: './list-animal-booking.component.html',
  styleUrl: './list-animal-booking.component.scss',
})
export class ListAnimalBookingComponent {

  @Output() adAnimalFormEvent = new EventEmitter();

  addNewForm(value: any) {
    console.log("hhhhhhhhhhh")
   this.adAnimalFormEvent.emit(value);
 }
  faPlusCircle = faCirclePlus;

  cards = [1,2];
}
