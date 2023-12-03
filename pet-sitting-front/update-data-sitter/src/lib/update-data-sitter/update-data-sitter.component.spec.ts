import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateDataSitterComponent } from './update-data-sitter.component';

describe('UpdateDataSitterComponent', () => {
  let component: UpdateDataSitterComponent;
  let fixture: ComponentFixture<UpdateDataSitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDataSitterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDataSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
