import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FundDetailsService } from '../../services/fund-details.service';
import { FundDetails } from '../../models/fund-details.model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-fund-details-insert',
  templateUrl: './fund-details-insert.component.html',
  styleUrls: ['./fund-details-insert.component.css']
})
export class FundDetailsInsertComponent {
  fundDetailsForm: FormGroup;
  validFunds: FundDetails[] = [];

  constructor(
    private fb: FormBuilder,
    private fundDetailsService: FundDetailsService,
    private logger: NGXLogger
  ) {
    this.fundDetailsForm = this.fb.group({
      fundId: ['', [Validators.required, Validators.pattern('^[A-Z]+$')]],
      fundName: ['', [Validators.required, Validators.pattern('^[A-Z ]+$')]],
      apportionment: ['', [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]]
    });
    this.loadValidFunds();
  }

  loadValidFunds() {
    this.fundDetailsService.getValidFunds().subscribe(
      (data: FundDetails[]) => {
        this.validFunds = data;
      },
      (error) => {
        this.logger.error('Error loading valid funds', error);
      }
    );
  }

  insertFundDetails() {
    if (this.fundDetailsForm.valid) {
      const fundDetails: FundDetails = this.fundDetailsForm.value;
      this.fundDetailsService.insertFundDetails(fundDetails).subscribe(
        (response) => {
          this.logger.info('Fund details inserted successfully', response);
        },
        (error) => {
          this.logger.error('Error inserting fund details', error);
        }
      );
    } else {
      this.logger.warn('Invalid fund details form');
    }
  }
}
