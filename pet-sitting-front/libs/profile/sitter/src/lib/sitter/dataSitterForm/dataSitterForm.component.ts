import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AccomodationTypeEnum,
  UserModel,
  UserService,
} from '@pet-sitting-front/services';

@Component({
  selector: 'pet-sitting-front-data-sitter-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dataSitterForm.component.html',
  styleUrl: './dataSitterForm.component.scss',
})
export class DataSitterFormComponent {
  @Input()
  user!: UserModel;

  accomodationTypeEnum = AccomodationTypeEnum;
  updatedUser?: UserModel;

  //remonte l'info au parent sitter component pour qu'il ferme le formulaire
  @Output()
  userSuccessfullyUpdated = new EventEmitter<UserModel>();

  constructor(private service: UserService) {}

  dataSitterForm = new FormGroup({
    presentation: new FormControl('', [Validators.required]),
    accomodationType: new FormControl('', [Validators.required]),
    livingSpace: new FormControl('', [Validators.required]),
    hasGarden: new FormControl(''),
    hasVehicule: new FormControl(''),
  });

  get presentation() {
    return this.dataSitterForm.controls.presentation;
  }

  get accomodationType() {
    return this.dataSitterForm.controls.accomodationType;
  }

  get livingSpace() {
    return this.dataSitterForm.controls.livingSpace;
  }

  get hasGarden() {
    return this.dataSitterForm.controls.hasGarden;
  }

  get hasVehicule() {
    return this.dataSitterForm.controls.hasVehicule;
  }

  onDataSitterFormSubmit() {
    console.log(
      "avant d'afficher le form j'affiche le user que j'ai récupéré : ",
      this.user
    );
    console.log('form dataSitter :', this.dataSitterForm.value);
    const form = this.dataSitterForm.value;
    if (
      form.accomodationType &&
      form.presentation &&
      form.livingSpace &&
      this.user.id
    ) {
      //call http throught service
      this.service
        .updateUserById(this.user.id, {
          id: this.user.id,
          accomodationType: form.accomodationType as AccomodationTypeEnum,
          address: this.user.address,
          city: this.user.city,
          dateOfBirth: this.user.dateOfBirth,
          email: this.user.email,
          firstName: this.user.firstName,
          hasGarden: Boolean(form.hasGarden),
          hasVehicule: Boolean(form.hasVehicule),
          lastName: this.user.lastName,
          livingSpace: +form.livingSpace,
          password: this.user.password,
          pays: this.user.pays,
          postalCode: this.user.postalCode,
          about: form.presentation,
          role: this.user.role,
          status: this.user.status,
          telephone: this.user.telephone,
        })
        .subscribe({
          next: (data: UserModel) => {
            console.log('data updated ', data);
            this.updatedUser = data;
            this.userSuccessfullyUpdated.emit(this.updatedUser);
          },
          error: (e) => console.error(e),
        });
    }
  }
}
