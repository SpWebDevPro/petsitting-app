import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModel } from '@pet-sitting-front/services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pet-sitting-front-booking-notification',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './bookingNotification.component.html',
  styleUrl: './bookingNotification.component.scss',
})
export class BookingNotificationComponent {


  @Input()
  bookingMode!: BookingModel;

  @Output() checkEvent = new EventEmitter();
  facheck = faCheck
  faclose = faClose


  check(value : boolean){
   this.checkEvent.emit(value)
  }
}
