import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicSitterComponent } from './publicSitter.component';

describe('PublicSitterComponent', () => {
  let component: PublicSitterComponent;
  let fixture: ComponentFixture<PublicSitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicSitterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
