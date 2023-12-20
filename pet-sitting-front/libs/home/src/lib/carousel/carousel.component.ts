import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { CarouselStructureComponent } from "@nx/angular";

@Component({
  selector: 'pet-sitting-front-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {}
