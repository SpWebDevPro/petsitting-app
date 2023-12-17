import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAnimalComponent}  from '@pet-sitting-front/animal';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {FormAnimalComponent} from '@pet-sitting-front/animal';
import {ServiceModel, ServiceTypeEnum, SitterService} from '@pet-sitting-front/services';

@Component({
  selector: 'pet-sitting-front-booking',
  standalone: true,
  imports: [CommonModule, CardAnimalComponent,    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatNativeDateModule,
    FormAnimalComponent, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  @Input()
  //user!: UserModel;
  userId: number = 4;

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
    //soumettre le formulaire via le service
    //recup nopuveau service crée
    //fermer le formulaire
    //passer l'info à la liste des services
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
}import { Subscription } from 'rxjs';

