import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationPopupComponent } from './validation-popup.component';

describe('ValidationPopupComponent', () => {
  let component: ValidationPopupComponent;
  let fixture: ComponentFixture<ValidationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationPopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
