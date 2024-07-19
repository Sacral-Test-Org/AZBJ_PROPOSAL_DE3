import { Component, OnInit } from '@angular/core';
import { FundDetailsService } from 'src/app/services/fund-details.service';
import { FundDetails } from 'src/app/models/fund-details.model';

@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.css']
})
export class FundDetailsComponent implements OnInit {
  funds: FundDetails[] = [];
  totalApportionment: number = 0;

  constructor(private fundDetailsService: FundDetailsService) {}

  ngOnInit(): void {
    this.fetchFunds();
  }

  fetchFunds(): void {
    this.fundDetailsService.getFunds().subscribe((funds) => {
      this.funds = funds;
      this.calculateTotalApportionment();
    });
  }

  validateApportionmentPercentage(percentage: number): boolean {
    if (percentage < 0 || percentage > 100) {
      alert('Apportionment percentage should be between 0 and 100');
      return false;
    }
    return true;
  }

  sumApportionmentPercentages(): number {
    return this.funds.reduce((sum, fund) => sum + fund.apportionmentPercentage, 0);
  }

  performActionsBasedOnTotal(totalPercentage: number): void {
    if (totalPercentage === 100) {
      // Enable specific fields based on product code and product definition
      // Logic to enable fields goes here
    } else {
      // Navigate to the next record and set focus on a specific field
      // Logic to navigate and set focus goes here
    }
  }

  deleteFund(fundId: string): void {
    if (this.funds.length === 1) {
      alert('At least one fund is required');
      return;
    }

    this.fundDetailsService.deleteFundById(fundId).subscribe(() => {
      this.funds = this.funds.filter(fund => fund.id !== fundId);
      this.calculateTotalApportionment();
    });
  }

  onDeleteFund(fundId: string): void {
    this.deleteFund(fundId);
  }

  updateApportionment(fundId: string, apportionmentPercentage: number): void {
    if (this.validateApportionmentPercentage(apportionmentPercentage)) {
      this.fundDetailsService.updateFund(fundId, apportionmentPercentage).subscribe(() => {
        const fund = this.funds.find(fund => fund.id === fundId);
        if (fund) {
          fund.apportionmentPercentage = apportionmentPercentage;
          this.calculateTotalApportionment();
        }
      });
    }
  }

  calculateTotalApportionment(): void {
    this.totalApportionment = this.sumApportionmentPercentages();
    this.performActionsBasedOnTotal(this.totalApportionment);
  }

  handleDoubleClick(event: Event): void {
    // Fetch the list of available funds and display them in a LOV
    // Logic to fetch and display LOV goes here
  }

  handleFocus(event: Event): void {
    // Load and display the appropriate image based on the proposal type and number of pages
    // Logic to load and display image goes here
  }

  handleNavigation(event: Event): void {
    // Clear any visual attributes from the current item and move to the 'APPORTIONMENT' field
    // Logic to clear attributes and navigate goes here
  }

  resetFundDetails(): void {
    // Clear all fields in the fund details section without validation
    // Logic to clear fields goes here
    this.funds.forEach(fund => {
      fund.apportionmentPercentage = 0;
      // Clear other fields as necessary
    });
    this.calculateTotalApportionment();
  }

  navigateToNextItem(): void {
    // Logic to navigate to the next item based on conditions
    // Logic to navigate goes here
  }

  handleCheckboxChange(event: Event, fundId: string): void {
    const fund = this.funds.find(fund => fund.id === fundId);
    if (fund) {
      fund.markedForDeletion = (event.target as HTMLInputElement).checked ? 'Y' : 'N';
    }
  }

  navigateBasedOnFunds(currentRecord: number, totalFunds: number): void {
    if (currentRecord === totalFunds) {
      // Navigate to the fund command item
      // Logic to navigate goes here
    } else {
      // Navigate to the fund list item and move to the next record
      // Logic to navigate goes here
    }
  }
}