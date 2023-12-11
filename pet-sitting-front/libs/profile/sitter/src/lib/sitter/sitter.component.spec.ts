import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SitterComponent } from './sitter.component';

describe('SitterComponent', () => {
  let component: SitterComponent;
  let fixture: ComponentFixture<SitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
