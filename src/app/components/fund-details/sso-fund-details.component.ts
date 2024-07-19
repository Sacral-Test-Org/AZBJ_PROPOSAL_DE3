import { Component, OnInit } from '@angular/core';
import { FundDetailsService } from 'src/app/services/fund-details.service';
import { FundDetails } from 'src/app/models/fund-details.model';

@Component({
  selector: 'app-sso-fund-details',
  templateUrl: './sso-fund-details.component.html',
  styleUrls: ['./sso-fund-details.component.css']
})
export class SSOFundDetailsComponent implements OnInit {
  fundDetails: FundDetails[] = [];
  selectedFundIds: number[] = [];

  constructor(private fundDetailsService: FundDetailsService) {}

  ngOnInit(): void {
    // Initial fetch of SSO fund details
    this.fetchSSOFundDetails('defaultProductCode', { startDate: '2005-04-01', endDate: '3000-01-01' });
  }

  fetchSSOFundDetails(productCode: string, dateRange: { startDate: string, endDate: string }): void {
    this.fundDetailsService.getSSOFundDetails(productCode, dateRange).subscribe((data: FundDetails[]) => {
      this.fundDetails = data;
    });
  }

  deleteSelectedFunds(): void {
    this.fundDetailsService.deleteSSOFunds(this.selectedFundIds).subscribe(() => {
      this.fetchSSOFundDetails('defaultProductCode', { startDate: '2005-04-01', endDate: '3000-01-01' });
    });
  }

  resetForm(): void {
    this.selectedFundIds = [];
    this.fetchSSOFundDetails('defaultProductCode', { startDate: '2005-04-01', endDate: '3000-01-01' });
  }

  validateApportionment(apportionmentValue: number): void {
    if (apportionmentValue === null || apportionmentValue === undefined) {
      alert('Please enter a percentage.');
      return;
    }
    if (apportionmentValue < 0 || apportionmentValue > 100) {
      alert('Apportionment percentage should be between 0 and 100.');
      return;
    }
    this.fundDetailsService.updateFundDetails(apportionmentValue).subscribe(() => {
      this.fetchSSOFundDetails('defaultProductCode', { startDate: '2005-04-01', endDate: '3000-01-01' });
    });
  }

  onDeleteSSOFundClick(): void {
    this.fetchSSOFundDetails('defaultProductCode', { startDate: '2005-04-01', endDate: '3000-01-01' });
  }

  deleteSSOFundRecord(recordId: number): void {
    this.fundDetailsService.deleteSSOFundRecord(recordId).subscribe(() => {
      this.fetchSSOFundDetails('defaultProductCode', { startDate: '2005-04-01', endDate: '3000-01-01' });
    });
  }

  processSSOFundRecords(records: FundDetails[]): void {
    records.forEach(record => {
      if (record.CHK_FUND === 'Y') {
        this.deleteSSOFundRecord(record.FUND_ID);
      }
    });
    this.fetchSSOFundDetails('defaultProductCode', { startDate: '2005-04-01', endDate: '3000-01-01' });
  }

  handleCheckboxChange(event: any, fundId: number): void {
    if (event.target.checked) {
      this.selectedFundIds.push(fundId);
    } else {
      const index = this.selectedFundIds.indexOf(fundId);
      if (index > -1) {
        this.selectedFundIds.splice(index, 1);
      }
    }
  }

  navigateToNextItem(): void {
    const currentIndex = this.fundDetails.findIndex(fund => fund.FUND_ID === this.selectedFundIds[this.selectedFundIds.length - 1]);
    if (currentIndex === this.fundDetails.length - 1) {
      document.getElementById('cmd_fund')?.focus();
    } else {
      document.getElementById('FUNDLIST')?.focus();
    }
  }
}
