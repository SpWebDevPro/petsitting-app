import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccomodationTypeEnum, ServiceModel } from '@pet-sitting-front/services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faBuildingUn, faHouseUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pet-sitting-front-card-service',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.scss',
})
export class CardServiceComponent implements OnInit{

  @Input({ required: true })
  serviceModel!: ServiceModel;
  
  readonly accomodationEnum = AccomodationTypeEnum;

 fabuilding =  faBuildingUn;
 faHouse = faHouseUser;
   constructor(){
   }
   ngOnInit() {


   }

  
}
