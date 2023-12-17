import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faBuilding,
  faCar,
  faTree,
} from '@fortawesome/free-solid-svg-icons';
import { UserModel, AccomodationTypeEnum } from '@pet-sitting-front/services';

@Component({
  selector: 'pet-sitting-front-data-sitter',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './dataSitter.component.html',
  styleUrl: './dataSitter.component.scss',
})
export class DataSitterComponent {
  faHouse = faHouse;
  faBuilding = faBuilding;
  faCar = faCar;
  faTree = faTree;

  @Input()
  //user!: UserModel;
  userId!: number;
  //TODO : get user data from backend throught services

  sitter: UserModel = {
    id: 1,
    lastName: 'Tartempion',
    firstName: 'Sophie',
    about:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
    dailyPrice: 24,
    image: '',
    accomodationType: AccomodationTypeEnum.HOUSE,
    address: '7 rue Dumaine',
    postalCode: '77127',
    city: 'Lieusaint',
    livingSpace: '85m2',
    hasGaden: true,
    hasVehicule: false,
  };
}
