import { Component } from '@angular/core';
import { FundDetailsService } from 'src/app/services/fund-details.service';
import { FundDetails } from 'src/app/models/fund-details.model';

@Component({
  selector: 'app-fund-details-validation',
  templateUrl: './fund-details-validation.component.html',
  styleUrls: ['./fund-details-validation.component.css']
})
export class FundDetailsValidationComponent {
  fundDetails: FundDetails[] = [];

  constructor(private fundDetailsService: FundDetailsService) {}

  validateApportionmentPercentage(percentage: number): boolean {
    if (percentage < 0 || percentage > 100) {
      alert('Apportionment percentage should be between 0 and 100');
      return false;
    }
    return true;
  }

  sumApportionmentPercentages(): number {
    return this.fundDetails.reduce((sum, detail) => sum + detail.apportionment, 0);
  }

  performActionsBasedOnTotal(totalPercentage: number, productCode: number): void {
    if (totalPercentage === 100) {
      if (productCode === 71) {
        // Enable specific fields based on product code and definition
        // Assuming enabling fields logic here
      }
    } else {
      // Navigate to the next record and set focus on a specific field
      // Assuming navigation logic here
    }
  }

  validateCorrectField(correctFieldValue: number, fundList1: FundDetails[], fundList2: FundDetails[]): void {
    const validOptions = [1, 2, 3, 4, 7, 8];
    if (!validOptions.includes(correctFieldValue)) {
      alert('Invalid value for Correct field');
      return;
    }

    if (correctFieldValue === 1 || correctFieldValue === 2) {
      if (fundList1.some(fund => fundList2.includes(fund))) {
        alert('Fund names in the two fund details sections match');
        return;
      }
    }

    if (correctFieldValue === 3) {
      if (!fundList1.some(fund => fundList2.includes(fund))) {
        alert('Fund names in the two fund details sections do not match');
        return;
      }
    }

    if ([4, 7, 8].includes(correctFieldValue)) {
      const addMoreFunds = confirm('Do you wish to add more funds?');
      if (addMoreFunds) {
        // Navigate to the appropriate section or item
        // Assuming navigation logic here
      }
    }

    // Update fund details based on the value of the Correct field
    this.fundDetailsService.updateFundDetails(correctFieldValue, fundList1, fundList2);
  }

  calculateSumOfApportionments(): number {
    return this.fundDetails.reduce((sum, detail) => sum + detail.apportionment, 0);
  }

  navigateBasedOnSum(sum: number, productCode: number): void {
    if (sum === 100 && productCode === 71) {
      // Enable certain fields and navigate to the appropriate block and item
      // Assuming enabling fields and navigation logic here
    } else {
      // Navigate to a specific item in the current block
      // Assuming navigation logic here
    }
  }

  validatePercentage(apportionmentPercentage: number): boolean {
    if (apportionmentPercentage < 0 || apportionmentPercentage > 100) {
      alert('Apportionment percentage should be between 0 and 100');
      return false;
    }
    return true;
  }
}