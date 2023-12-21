import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'pet-sitting-front-card-animal-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './card-animal-booking.component.html',
  styleUrl: './card-animal-booking.component.scss',
})
export class CardAnimalBookingComponent {
  @Input()
  petName!: string;
  faPlusCircle = faCheckCircle;
  faCircle = faCircle;

  @Input()
  selected!: boolean;

  @Output() checkEvent = new EventEmitter();

  checkCard() {
    this.checkEvent.emit();
  }
  hello() {
    this.selected = !this.selected;
  }
}
