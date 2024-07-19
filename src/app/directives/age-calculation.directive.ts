import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAgeCalculation]'
})
export class AgeCalculationDirective {
  @Input('appAgeCalculation') dateOfBirth: string;

  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('blur') onBlur() {
    this.calculateAge(this.dateOfBirth);
  }

  private calculateAge(dateOfBirth: string): void {
    if (!dateOfBirth) {
      return;
    }

    try {
      const dob = new Date(dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      const dayDiff = today.getDate() - dob.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      // Assuming 'P' and 1 as parameters for specific business rules
      // Implement any specific business rules here if needed

      this.control.control.setValue(age);
    } catch (error) {
      console.error('Error calculating age:', error);
    }
  }
}
