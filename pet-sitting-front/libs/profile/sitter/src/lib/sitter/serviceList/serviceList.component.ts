import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './../serviceCard/serviceCard.component';
import { ServiceFormComponent } from './../serviceForm/serviceForm.component';
import { ServiceModel } from '@pet-sitting-front/services';
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
  displayForm: boolean = false;
  faPlus = faPlus;
  //TODO : replace fake data by incoming data from Backend
  sitterServiceList: ServiceModel[] = [
    {
      id: 1,
      name: 'mon service 1',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quis veritatis porro corporis officia dolorem ea quidem rem at officiis, nostrum animi laborum numquam ab  ',
      type: 'walk',
      dailyPrice: 15,
      userID: 4,
    },
    {
      id: 2,
      name: 'mon service 2',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quis veritatis porro corporis officia dolorem ea quidem rem at officiis, nostrum animi laborum numquam ab  ',
      type: 'walk',
      dailyPrice: 20,
      userID: 4,
    },
    {
      id: 3,
      name: 'mon service 3',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quis veritatis porro corporis officia dolorem ea quidem rem at officiis, nostrum animi laborum numquam ab  ',
      type: 'walk',
      dailyPrice: 25,
      userID: 4,
    },
  ];

  onClickAddButton() {
    console.log("j'ai cliqué");
    this.displayForm = !this.displayForm;
  }
}
