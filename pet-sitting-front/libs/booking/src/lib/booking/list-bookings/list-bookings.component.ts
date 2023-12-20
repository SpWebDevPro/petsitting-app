import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pet-sitting-front-list-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-bookings.component.html',
  styleUrl: './list-bookings.component.scss',
})
export class ListBookingsComponent {}
