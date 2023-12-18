import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './../serviceCard/serviceCard.component';
import { ServiceFormComponent } from './../serviceForm/serviceForm.component';
import { ServiceModel, SitterService } from '@pet-sitting-front/services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

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

  sitterServiceList: ServiceModel[] = [];
  getServicesSubscription: Subscription = new Subscription();

  constructor(private service: SitterService) {}

  ngOnInit() {
    this.getServicesSubscription = this.service
      .getServicesBySitterId(this.userId)
      .subscribe({
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

  ngOnDestroy() {
    this.getServicesSubscription.unsubscribe();
  }
}
