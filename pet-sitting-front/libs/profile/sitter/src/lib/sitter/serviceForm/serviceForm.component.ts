import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ServiceModel,
  ServiceTypeEnum,
  SitterService,
} from '@pet-sitting-front/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pet-sitting-front-service-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './serviceForm.component.html',
  styleUrl: './serviceForm.component.scss',
})
export class ServiceFormComponent {
  //reçoit l'info du parent service list
  @Input({ required: true })
  userId!: number;

  //remonte l'info au parent service list
  @Output()
  newServiceCreated = new EventEmitter<ServiceModel>();

  ServiceTypeEnum = ServiceTypeEnum;
  //je voulais convertir l'enum en un tableau de valeurs pour boucler
  //mais erreur de compilation
  /* serviceType: Array<string> = Object.values(ServiceTypeEnum); */
  /* serviceType = ['WALK', 'VISIT', 'HOSTING']; */
  /*  serviceType = [
    ServiceTypeEnum.WALK,
    ServiceTypeEnum.VISIT,
    ServiceTypeEnum.HOSTING,
  ]; */

  //Je ne veux pas afficher directement ici l'observable
  //reçu quand un nouveau service est crée, mais
  //je veux plutôt le faire passer à la serviceList
  // donc je vais gérer moi même subscribe et unscubscribe
  newlyCreatedService?: ServiceModel;
  serviceCreatedSubscription: Subscription = new Subscription();

  constructor(private service: SitterService) {}

  serviceForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    dailyPrice: new FormControl('', [Validators.required]),
  });

  onServiceFormSubmit() {
    const form = this.serviceForm.value;
    if (
      form.name &&
      form.description &&
      form.dailyPrice &&
      form.type &&
      this.userId
    ) {
      this.service
        .createSitterService({
          name: form.name,
          description: form.description,
          dailyPrice: +form.dailyPrice,
          type: form.type as ServiceTypeEnum,
          userId: this.userId,
        })
        .subscribe({
          next: (data: ServiceModel) => {
            console.log(data);
            this.newlyCreatedService = data;
            this.newServiceCreated.emit(data);
          },
          error: (e) => console.error(e),
        });
    }
  }

  ngOnDestroy() {
    this.serviceCreatedSubscription.unsubscribe();
  }

  get description() {
    return this.serviceForm.controls.description;
  }

  get type() {
    return this.serviceForm.controls.type;
  }

  get name() {
    return this.serviceForm.controls.name;
  }

  get dailyPrice() {
    return this.serviceForm.controls.description;
  }
}
