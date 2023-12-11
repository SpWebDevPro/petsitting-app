import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSitterComponent } from './dataSitter.component';

describe('DataSitterComponent', () => {
  let component: DataSitterComponent;
  let fixture: ComponentFixture<DataSitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSitterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
