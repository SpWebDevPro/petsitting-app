import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { AnimalModel, BookingService, BookingModel, UtilService, SitterService, ServiceModel, PopupService } from '@pet-sitting-front/services';
import { ListAnimalBookingComponent } from '@pet-sitting-front/animal';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'pet-sitting-front-booking',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatNativeDateModule,
    ReactiveFormsModule, ListAnimalBookingComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent implements OnInit, AfterViewInit {


  serviceId  !: number;
  serviceModel!: ServiceModel;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  animalSelected !: AnimalModel;
  bookingModel: BookingModel = {};

  constructor(private bookingService: BookingService, private utilService: UtilService, private router: ActivatedRoute, private sitterService: SitterService, private ref: ChangeDetectorRef,
   private popupService:PopupService, private route : Router){
  }
  ngAfterViewInit(): void {
    this.ref.detectChanges();
  }

  ngOnInit(): void {

    this.router.params.subscribe((params) => {
      this.serviceId = params['serviceId'];
    });

    if (this.serviceId != null) {
      this.sitterService.getServiceById(this.serviceId).subscribe({
        next: (data) => {
          this.serviceModel = data;

        },
      })
    }
  }





  selectedAnimalEvent($event: AnimalModel) {
    this.animalSelected = $event;
  }



  booking() {
  

    this.bookingService.createBooking(this.bookingModel).subscribe({

      next:(value) =>{
          this.popupService.openPopup();

          setTimeout(() => {
            this.popupService.closePopup();
            this.route.navigate(['/']);
         }, 1000);
      },
    })

  }

  formValidation() {

    if (this.animalSelected != null && this.range.value.start != null && this.range.value.end != null) {
      this.bookingModel.startDate = this.range.value.start;
      this.bookingModel.endDate = this.range.value.end;
      this.bookingModel.totalPrice = this.getTotalPrice();
      this.bookingModel.animalId = this.animalSelected.id;
      this.bookingModel.serviceId = this.serviceModel.id;
      return false;
    }


    return true;



  }

  getTotalPrice() : number {

    if (this.range.value.start != null && this.range?.value?.end != null) {
      const numberOfdays = this.utilService.getDaysBetweenTwoDates(this.range.value.start, this.range.value.end);

     return  this.serviceModel.dailyPrice * numberOfdays;
    }
    return 0;
  }
 
}

