import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalModel } from '@pet-sitting-front/services';

@Component({
  selector: 'pet-sitting-front-card-animal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-animal.component.html',
  styleUrl: './card-animal.component.scss',
})
export class CardAnimalComponent {
  @Input()
  animal!: AnimalModel;
}
