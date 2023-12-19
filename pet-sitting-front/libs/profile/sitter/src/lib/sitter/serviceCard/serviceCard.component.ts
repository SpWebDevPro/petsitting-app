import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModel } from '@pet-sitting-front/services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pet-sitting-front-service-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './serviceCard.component.html',
  styleUrl: './serviceCard.component.scss',
})
export class ServiceCardComponent {
  //propriétés d'affichage
  faPen = faPen;
  faTrash = faTrash;

  //reçoit les propriétés du component parent serviceList
  @Input()
  sitterService!: ServiceModel;
  @Input()
  displaySitterProfileButtons: boolean = true;

  @Input()
  selectedServiceIdFromHomePage!: number;

  //passe les propriétés au parent serviceList
  @Output()
  bookingButtonHasBeenClicked = new EventEmitter();

  clikedServiceId!: number;

  constructor() {}

  ngOnInit() {
    console.log(
      'ngoninit, je récupère this.selectedServiceIdFromHomePage ',
      +this.selectedServiceIdFromHomePage
    );
  }

  onModifyClick() {
    console.log("j'ai cliqué sur modifier");
    //TODO
  }

  onDeleteClick() {
    console.log("j'ai cliqué sur supprimer");
    //TODO
  }

  onBookClick(selectedSitterService: ServiceModel) {
    this.selectedServiceIdFromHomePage = 0;
    console.log(
      'this.selectedServiceIdFromHomePage :',
      this.selectedServiceIdFromHomePage
    );
    this.ngDoCheck();
    //je dois remonter un event au parent
    if (selectedSitterService.id) {
      this.bookingButtonHasBeenClicked.emit(selectedSitterService.id);
      console.log('je clique');
      console.log('selectedSitterService.id ', selectedSitterService.id);
      this.clikedServiceId = selectedSitterService.id;
      console.log('this.clikedServiceId', this.clikedServiceId);
    }
  }

  ngDoCheck() {}
}
