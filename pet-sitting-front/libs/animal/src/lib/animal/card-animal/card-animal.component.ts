import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pet-sitting-front-card-animal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-animal.component.html',
  styleUrl: './card-animal.component.scss',
})
export class CardAnimalComponent {
animal: any;
}
