import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SitterProfileComponent } from './sitter-profile.component';

describe('SitterProfileComponent', () => {
  let component: SitterProfileComponent;
  let fixture: ComponentFixture<SitterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitterProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SitterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
