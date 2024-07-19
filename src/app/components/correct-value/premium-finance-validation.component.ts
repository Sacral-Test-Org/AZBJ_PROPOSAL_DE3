import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-premium-finance-validation',
  templateUrl: './premium-finance-validation.component.html',
  styleUrls: ['./premium-finance-validation.component.css']
})
export class PremiumFinanceValidationComponent {
  premiumFinanceForm: FormGroup;
  options: string[] = ['IP', 'PH', 'JL'];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.premiumFinanceForm = this.fb.group({
      premiumFinance: ['', Validators.required],
      insuredPerson: ['', Validators.required],
      policyHolder: ['', Validators.required]
    });
  }

  validateSelection() {
    const { premiumFinance, insuredPerson, policyHolder } = this.premiumFinanceForm.value;
    if (premiumFinance === 'JL' && insuredPerson === policyHolder) {
      this.snackBar.open('For Joint Life IP and PH cannot be same', 'Close', {
        duration: 3000,
      });
    }
  }
}
