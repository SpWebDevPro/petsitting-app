import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAnimalComponent } from './form-animal.component';

describe('FormAnimalComponent', () => {
  let component: FormAnimalComponent;
  let fixture: ComponentFixture<FormAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAnimalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
