import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PolicyMemberComponent } from './policy-member.component';
import { FormsModule } from '@angular/forms';

describe('PolicyMemberComponent', () => {
  let component: PolicyMemberComponent;
  let fixture: ComponentFixture<PolicyMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyMemberComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate age correctly for valid DOB', () => {
    const testCases = [
      { dob: '2000-01-01', expectedAge: new Date().getFullYear() - 2000 },
      { dob: '1990-05-15', expectedAge: new Date().getFullYear() - 1990 - 1 }, // Assuming today is before May 15th
    ];

    testCases.forEach(test => {
      component.dateOfBirth = test.dob;
      component.calculateAge();
      expect(component.age).toBe(test.expectedAge);
    });
  });

  it('should not calculate age for empty DOB', () => {
    component.dateOfBirth = '';
    component.calculateAge();
    expect(component.age).toBeUndefined();
  });

  it('should handle invalid DOB gracefully', () => {
    const invalidDOBs = ['invalid-date', '2023-02-30', 'abcd-ef-gh'];

    invalidDOBs.forEach(dob => {
      component.dateOfBirth = dob;
      expect(() => component.calculateAge()).not.toThrow();
      expect(component.age).toBeUndefined();
    });
  });
});
