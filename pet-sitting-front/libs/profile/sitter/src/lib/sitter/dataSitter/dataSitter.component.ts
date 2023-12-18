import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faBuilding,
  faCar,
  faTree,
} from '@fortawesome/free-solid-svg-icons';
import { UserModel } from '@pet-sitting-front/services';

@Component({
  selector: 'pet-sitting-front-data-sitter',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './dataSitter.component.html',
  styleUrl: './dataSitter.component.scss',
})
export class DataSitterComponent {
  //propriétés d'affichage
  faHouse = faHouse;
  faBuilding = faBuilding;
  faCar = faCar;
  faTree = faTree;

  //reçoit les propriétés du component parent
  //'SitterComponent' ou 'publicSitterComponent'
  @Input()
  user!: UserModel;
  userId!: number;
}
