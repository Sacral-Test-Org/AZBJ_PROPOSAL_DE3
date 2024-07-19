import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrectValueComponent } from './correct-value.component';

describe('CorrectValueComponent', () => {
  let component: CorrectValueComponent;
  let fixture: ComponentFixture<CorrectValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});