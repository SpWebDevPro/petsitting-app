import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { CardAnimalBookingComponent } from '../card-animal-booking/card-animal-booking.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimalModel, AnimalService } from '@pet-sitting-front/services';
import { FormAnimalComponent } from '../form-animal/form-animal.component';

@Component({
  selector: 'pet-sitting-front-list-animal-booking',
  standalone: true,
  imports: [CommonModule, CardAnimalBookingComponent, FontAwesomeModule, FormAnimalComponent],
  templateUrl: './list-animal-booking.component.html',
  styleUrl: './list-animal-booking.component.scss',
})
export class ListAnimalBookingComponent implements OnInit {
  ngOnInit(): void {
    this.getUserAimals();
  }

  constructor(private animalService: AnimalService){ }

  // @Output() addAnimalFormEvent = new EventEmitter();
  @Output() selectedAnimalEvent = new EventEmitter();
  faPlusCircle = faCirclePlus;
  showFormAddNewAnimal : boolean = false;
  cards = [1,2];
   lisAnimals !: AnimalModel [];

  addNewForm() {
    this.showFormAddNewAnimal = true;
 }

  getUserAimals(){
    const userID = localStorage.getItem('UserConnected');

      
    if(localStorage.getItem('UserConnected') !== null)
    {
  
   const currentUserID= Number(userID);
     this.animalService.getAnimalListByUserId(currentUserID).subscribe({
     next: (data)=> {
           this.lisAnimals = data;
    
         
      }
     });

  }
}

check(id: number){
  this.lisAnimals.forEach((item, index) =>{
    if(index !== id || index ==id && item.selected == true ){ 
       item.selected = false;
    }else{
       item.selected = true;
    } 
  });

this.selectedAnimalEvent.emit(this.lisAnimals[id].selected == true ?this.lisAnimals[id]: null);
}

addFormNewAnimal(){
this.showFormAddNewAnimal = true;
}
closeForm(){
  this.showFormAddNewAnimal = false;
}
// (addAnimalFormEvent)="addFormNewAnimal()"

addCreatedAnimalToList($event : AnimalModel){
  //$event.selected = true;
  this.lisAnimals.push($event);

  this.check(this.lisAnimals.length-1)
  this.closeForm();
}
}
