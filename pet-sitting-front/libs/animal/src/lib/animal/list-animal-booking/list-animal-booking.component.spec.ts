import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAnimalBookingComponent } from './list-animal-booking.component';

describe('ListAnimalBookingComponent', () => {
  let component: ListAnimalBookingComponent;
  let fixture: ComponentFixture<ListAnimalBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAnimalBookingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListAnimalBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
