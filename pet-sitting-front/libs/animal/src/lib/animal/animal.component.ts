import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pet-sitting-front-animal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css',
})
export class AnimalComponent {}
