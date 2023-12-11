import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './../serviceCard/serviceCard.component';
import { ServiceFormComponent } from './../serviceForm/serviceForm.component';
import { Service } from './../../../../../../models/src/lib/models/serviceType';

@Component({
  selector: 'pet-sitting-front-services-list',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, ServiceFormComponent],
  templateUrl: './serviceList.component.html',
  styleUrl: './serviceList.component.scss',
})
export class ServicesListComponent {
  displayForm: boolean = false;
  sitterServiceList: Service[] = [
    {
      id: '1',
      name: 'mon service 1',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quis veritatis porro corporis officia dolorem ea quidem rem at officiis, nostrum animi laborum numquam ab  ',
      type: 'walk',
      dailyPrice: 15,
      userId: '4',
    },
    {
      id: '2',
      name: 'mon service 2',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quis veritatis porro corporis officia dolorem ea quidem rem at officiis, nostrum animi laborum numquam ab  ',
      type: 'walk',
      dailyPrice: 20,
      userId: '4',
    },
    {
      id: '3',
      name: 'mon service 3',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quis veritatis porro corporis officia dolorem ea quidem rem at officiis, nostrum animi laborum numquam ab  ',
      type: 'walk',
      dailyPrice: 25,
      userId: '4',
    },
  ];

  onClickAddButton() {
    console.log("j'ai cliqué");
    this.displayForm = !this.displayForm;
  }
}
