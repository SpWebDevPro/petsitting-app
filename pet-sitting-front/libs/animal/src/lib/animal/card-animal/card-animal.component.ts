import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'pet-sitting-front-card-animal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule
],
  templateUrl: './card-animal.component.html',
  styleUrl: './card-animal.component.scss',
})
export class CardAnimalComponent {

   

  }
