import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalTypeEnum, ServiceEnum } from '@pet-sitting-front/services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'pet-sitting-front-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {


   readonly serviceTypesEnum = ServiceEnum;
   readonly animalTypeEnum = AnimalTypeEnum;

   @Output() searchEvent = new EventEmitter();

   listServiceTypes !: string[];
   listAnimalTypes !: string [];
   longitude !: number ;
   latitude !: number;
   typeAnimal : any = null;
   typeService : any = null;
   localisation: string = "";
 
constructor(){
  this.listServiceTypes = Object.keys(ServiceEnum);
  this.listAnimalTypes = Object.keys(AnimalTypeEnum);
}

searchServices(value: any ) {
  this.searchEvent.emit(value);
}
}
