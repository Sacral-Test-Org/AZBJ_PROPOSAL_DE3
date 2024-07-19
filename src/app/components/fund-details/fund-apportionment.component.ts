import { Component } from '@angular/core';
import { FundDetailsService } from 'src/app/services/fund-details.service';
import { FundDetails } from 'src/app/models/fund-details.model';
import { FundApportionmentValidationDirective } from 'src/app/components/fund-details/fund-apportionment-validation.directive';
import { FundApportionmentNavigationService } from 'src/app/components/fund-details/fund-apportionment-navigation.service';

@Component({
  selector: 'app-fund-apportionment',
  templateUrl: './fund-apportionment.component.html',
  styleUrls: ['./fund-apportionment.component.css']
})
export class FundApportionmentComponent {
  funds: FundDetails[] = [];
  totalApportionment: number = 0;
  warningMessage: string = '';

  constructor(private fundDetailsService: FundDetailsService, private navigationService: FundApportionmentNavigationService) {
    this.loadFunds();
  }

  loadFunds() {
    this.fundDetailsService.getFunds().subscribe((data: FundDetails[]) => {
      this.funds = data;
    });
  }

  validateApportionment(percentage: number): boolean {
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
      this.warningMessage = 'Apportionment percentage should be between 0 and 100';
      return false;
    }
    this.warningMessage = '';
    return true;
  }

  sumApportionmentPercentages(percentages: number[]): number {
    return percentages.reduce((total, num) => total + num, 0);
  }

  navigateBasedOnTotal(totalPercentage: number, productCode: number, productDefinition: string): void {
    if (totalPercentage === 100 && productCode === 71 && productDefinition === 'specificProductDefinition') {
      this.navigationService.enableFields();
      this.navigationService.navigateToSection('appropriateSection');
    } else if (totalPercentage !== 100) {
      this.navigationService.navigateToField('correctionField');
    }
  }

  onApportionmentChange() {
    const percentages = this.funds.map(fund => fund.apportionment);
    this.totalApportionment = this.sumApportionmentPercentages(percentages);
    if (this.validateApportionment(this.totalApportionment)) {
      this.navigateBasedOnTotal(this.totalApportionment, this.fundDetailsService.productCode, this.fundDetailsService.productDefinition);
    }
  }
}
