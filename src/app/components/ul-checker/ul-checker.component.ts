import { Component } from '@angular/core';
import { ULCheckerService } from 'src/app/services/ul-checker.service';
import { ULCheckerModel } from 'src/app/models/ul-checker.model';

@Component({
  selector: 'app-ul-checker',
  templateUrl: './ul-checker.component.html',
  styleUrls: ['./ul-checker.component.css']
})
export class ULCheckerComponent {
  insuredAddress: ULCheckerModel;
  policyHolderAddress: ULCheckerModel;
  sameAsLAChecked: boolean = false;
  funds: any[] = [];
  totalFundValue: number = 0;

  constructor(private ulCheckerService: ULCheckerService) {}

  onSameAsLACheckboxChange(event: any) {
    this.sameAsLAChecked = event.target.checked;
    if (this.sameAsLAChecked) {
      this.policyHolderAddress = { ...this.insuredAddress };
      this.policyHolderAddress.mobileCountryName = this.insuredAddress.mobileCountryName;
      this.policyHolderAddress.mobilePhone = this.insuredAddress.mobilePhone;
      this.policyHolderAddress.email = this.insuredAddress.email;
      this.policyHolderAddress.mobileResidenceProof = this.insuredAddress.mobileResidenceProof;
      this.policyHolderAddress.mobileDoorNumber = this.insuredAddress.mobileDoorNumber;
      this.policyHolderAddress.mobileBuildingName = this.insuredAddress.mobileBuildingName;
      this.policyHolderAddress.mobilePlotNumber = this.insuredAddress.mobilePlotNumber;
      this.policyHolderAddress.mobileArea = this.insuredAddress.mobileArea;
      this.policyHolderAddress.mobileAreaFreeText = this.insuredAddress.mobileAreaFreeText;
      this.policyHolderAddress.mobileAddressLine3 = this.insuredAddress.mobileAddressLine3;
      this.policyHolderAddress.mobilePlaceFreeText = this.insuredAddress.mobilePlaceFreeText;
      this.policyHolderAddress.mobileAddressLine4 = this.insuredAddress.mobileAddressLine4;
      this.policyHolderAddress.mobileAddressLine5 = this.insuredAddress.mobileAddressLine5;
      this.policyHolderAddress.mobilePinCode = this.insuredAddress.mobilePinCode;
      this.policyHolderAddress.mobileCountryName = this.insuredAddress.mobileCountryName;
      this.policyHolderAddress.mobilePhone = this.insuredAddress.mobilePhone;
      this.policyHolderAddress.email = this.insuredAddress.email;
      this.policyHolderAddress.mobileResidenceProof = this.insuredAddress.mobileResidenceProof;
    } else {
      this.policyHolderAddress = new ULCheckerModel();
    }
  }

  updateApportionment(fundId: string, apportionmentPercentage: number) {
    this.ulCheckerService.updateApportionment(fundId, apportionmentPercentage).subscribe(response => {
      // Handle response if needed
    });
  }

  deleteFund(fundId: string) {
    this.ulCheckerService.deleteFund(fundId).subscribe(response => {
      // Handle response if needed
    });
  }

  calculateTotalFundValue() {
    this.totalFundValue = this.funds.reduce((total, fund) => total + fund.apportionmentPercentage, 0);
  }
}