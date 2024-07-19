import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FundDetailsService } from 'src/app/services/fund-details.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-fund-name',
  templateUrl: './fund-name.component.html',
  styleUrls: ['./fund-name.component.css']
})
export class FundNameComponent implements OnInit {
  fundNameControl: FormControl = new FormControl();
  availableFunds: any[] = [];
  productCode: string = 'someProductCode'; // This should be dynamically set based on the context
  dateReceived: Date = new Date(); // This should be dynamically set based on the context

  constructor(private fundDetailsService: FundDetailsService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.fundNameControl.valueChanges.subscribe(value => {
      if (!value) {
        this.onFocusFundName();
      }
    });
  }

  onFocusFundName(): void {
    if (!this.fundNameControl.value) {
      this.fundDetailsService.fetchAvailableFunds(this.productCode, this.dateReceived).subscribe(
        (funds: any[]) => {
          this.availableFunds = funds;
          this.displayLOV();
        },
        error => {
          this.logger.error('Error fetching available funds', error);
        }
      );
    }
  }

  onSelectFund(fundName: string): void {
    this.fundNameControl.setValue(fundName);
  }

  handleFundNameNavigation(): void {
    // Logic to load the field from an image if proposal type is 'N' and number of pages is 50
    // This is a placeholder logic and should be replaced with actual implementation
    const proposalType = 'N'; // This should be dynamically set based on the context
    const numberOfPages = 50; // This should be dynamically set based on the context
    if (proposalType === 'N' && numberOfPages === 50) {
      // Load the field from an image
    }
  }

  displayLOV(): void {
    // Logic to display the list of values (LOV)
    // This is a placeholder logic and should be replaced with actual implementation
    if (this.availableFunds.length > 0) {
      // Display the LOV
    }
  }

  updateFundName(): void {
    const fundName = this.fundNameControl.value;
    this.fundDetailsService.updateFundName(fundName).subscribe(
      () => {
        this.logger.info('Fund name updated successfully');
      },
      error => {
        this.logger.error('Error updating fund name', error);
      }
    );
  }

  fetchFundNames(productCode: string, coverCode: string): void {
    this.fundDetailsService.fetchFundNames(productCode, coverCode).subscribe(
      (funds: any[]) => {
        this.availableFunds = funds;
      },
      error => {
        this.logger.error('Error fetching fund names', error);
      }
    );
  }

  validateSelectedFund(fundName: string): void {
    const isValid = this.availableFunds.some(fund => fund.fund_short_name === fundName);
    if (isValid) {
      this.updateFundName();
    } else {
      this.logger.warn('Selected fund is not valid');
    }
  }
}
