import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSitterFormComponent } from './dataSitterForm.component';

describe('DataSitterFormComponent', () => {
  let component: DataSitterFormComponent;
  let fixture: ComponentFixture<DataSitterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSitterFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataSitterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
