import { Component } from '@angular/core';
import { FundDetailsService } from '../../services/fund-details.service';
import { FundDetails } from '../../models/fund-details.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fund-details-update',
  templateUrl: './fund-details-update.component.html',
  styleUrls: ['./fund-details-update.component.css']
})
export class FundDetailsUpdateComponent {
  fundDetailsForm: FormGroup;
  validFunds: { fundId: string, fundName: string }[] = [];

  constructor(
    private fundDetailsService: FundDetailsService,
    private fb: FormBuilder
  ) {
    this.fundDetailsForm = this.fb.group({
      fundId: ['', [Validators.required, Validators.pattern('^[A-Z]+$')]],
      fundName: ['', [Validators.required, Validators.pattern('^[A-Z ]+$')]],
      apportionment: ['', [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]+$')]]
    });

    this.loadValidFunds();
  }

  loadValidFunds() {
    this.fundDetailsService.getValidFunds().subscribe(
      (data: { fundId: string, fundName: string }[]) => {
        this.validFunds = data;
      },
      error => {
        console.error('Error loading valid funds', error);
      }
    );
  }

  updateFundDetails() {
    if (this.fundDetailsForm.valid) {
      const fundDetails: FundDetails = this.fundDetailsForm.value;
      this.fundDetailsService.updateFundDetails(fundDetails).subscribe(
        response => {
          alert('Fund details updated successfully');
        },
        error => {
          console.error('Error updating fund details', error);
          alert('Failed to update fund details');
        }
      );
    } else {
      alert('Please correct the errors in the form');
    }
  }
}
