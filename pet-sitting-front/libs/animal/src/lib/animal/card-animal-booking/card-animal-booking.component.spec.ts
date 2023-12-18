import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardAnimalBookingComponent } from './card-animal-booking.component';

describe('CardAnimalBookingComponent', () => {
  let component: CardAnimalBookingComponent;
  let fixture: ComponentFixture<CardAnimalBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAnimalBookingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardAnimalBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
