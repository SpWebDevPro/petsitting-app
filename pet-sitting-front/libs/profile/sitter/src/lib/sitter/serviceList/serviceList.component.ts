import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './../serviceCard/serviceCard.component';
import { ServiceFormComponent } from './../serviceForm/serviceForm.component';
import { ServiceModel, SitterService } from '@pet-sitting-front/services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pet-sitting-front-services-list',
  standalone: true,
  imports: [
    CommonModule,
    ServiceCardComponent,
    ServiceFormComponent,
    FontAwesomeModule,
  ],
  templateUrl: './serviceList.component.html',
  styleUrl: './serviceList.component.scss',
})
export class ServicesListComponent {
  //propriétés d'affichage
  displayForm: boolean = false;
  faPlus = faPlus;

  //reçoit les propriétés du component parent 'sitterComponent'
  @Input()
  titleSection: string = '';
  @Input()
  displaySitterProfileButtons!: boolean;
  @Input()
  userId!: number;
  @Input()
  selectedServiceId!: number;

  //passe les propriétés au parent publicSitter
  @Output()
  bookingButtonHasBeenClicked = new EventEmitter();

  sitterServiceList: ServiceModel[] = [];

  constructor(private service: SitterService) {}

  ngOnInit() {
    this.service.getServicesBySitterId(this.userId).subscribe({
      next: (data: ServiceModel[]) => {
        this.sitterServiceList = data;
      },
      error: (e) => console.error(e),
    });
  }

  onClickAddButton() {
    this.displayForm = !this.displayForm;
  }

  //méthode appelée quand un nouveau service a été emis par le component serviceForm
  //elle permet d'actualiser la liste des services sans faire de nouvelle requete
  addNewServiceToList(objet: ServiceModel) {
    this.displayForm = false;
    this.sitterServiceList.push(objet);
  }

  //methode appelée lorsque la carte service a été cliquée pour reserver
  //ET ELLE PASSE AU PARENT PUBLICsITTER L'INFO
  getServiceBookingEnquiry(idService: number) {
    this.bookingButtonHasBeenClicked.emit(idService);
  }
}
