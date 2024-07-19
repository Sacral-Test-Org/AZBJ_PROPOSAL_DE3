import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.css']
})
export class InsuranceDetailsComponent {
  insuranceForm: FormGroup;
  relationships: string[] = ['Spouse', 'Child', 'Parent', 'Sibling'];

  constructor(private fb: FormBuilder) {
    this.insuranceForm = this.fb.group({
      relationship: ['', Validators.required],
      companyName: ['', [Validators.required, Validators.maxLength(100)]],
      sumAssured: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      premium: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  handleFocus(event: Event): void {
    const target = event.target as HTMLElement;
    if (target && target.tagName !== 'BUTTON') {
      target.focus();
    }
  }

  validateInputs(companyName: string, sumAssured: string, premium: string): boolean {
    const companyNameValid = companyName.length <= 100;
    const sumAssuredValid = /^[0-9]*$/.test(sumAssured);
    const premiumValid = /^[0-9]*$/.test(premium);
    return companyNameValid && sumAssuredValid && premiumValid;
  }

  onSubmit(): void {
    if (this.insuranceForm.valid) {
      const { companyName, sumAssured, premium } = this.insuranceForm.value;
      if (this.validateInputs(companyName, sumAssured, premium)) {
        // Handle form submission logic here
        console.log('Form Submitted', this.insuranceForm.value);
      } else {
        console.error('Validation failed');
      }
    }
  }
}
