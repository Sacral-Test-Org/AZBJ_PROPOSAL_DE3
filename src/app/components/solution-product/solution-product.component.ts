import { Component, OnInit } from '@angular/core';
import { SolutionProductService } from 'src/app/services/solution-product.service';
import { SolutionProduct } from 'src/app/models/solution-product.model';

@Component({
  selector: 'app-solution-product',
  templateUrl: './solution-product.component.html',
  styleUrls: ['./solution-product.component.css']
})
export class SolutionProductComponent implements OnInit {
  premiumFrequencyOptions: string[] = ['5', '8', '10', 'NO'];
  spwFlag: string = 'N';
  spwPercentageEnabled: boolean = false;
  paymentMethods: string[] = [];
  selectedPaymentMethod: string = '';
  adiFlag: string = 'N';

  constructor(private solutionProductService: SolutionProductService) {}

  ngOnInit(): void {
    this.initializePremiumFrequencyOptions();
    this.initializeSPWFields();
  }

  manageSolutionProductDetails(): void {
    // Logic to manage solution product details
  }

  handleControlFlagChange(controlFlag: string): void {
    if (controlFlag === 'Y') {
      this.spwPercentageEnabled = true;
    } else {
      this.spwPercentageEnabled = false;
    }
  }

  validateGMIValue(productCode: number, gmiValue: number | null): void {
    if (productCode === 299) {
      if (gmiValue === null) {
        alert('Please enter a valid GMI value.');
      } else {
        const sumAssured = gmiValue * 144;
        // Enable sum assured field and set value
      }
    }
  }

  initializePremiumFrequencyOptions(): void {
    this.premiumFrequencyOptions = this.premiumFrequencyOptions.map(option => option.toUpperCase());
  }

  handlePercentageIncreaseSelection(selectedValue: string): void {
    const validOptions = ['5%', '8%', 'SL'];
    if (validOptions.includes(selectedValue)) {
      // Save the selected value for future use
    }
  }

  handlePremiumInput(event: KeyboardEvent): void {
    const input = (event.target as HTMLInputElement).value;
    if (!isNaN(Number(input))) {
      // Update premium value
      if (event.key === 'Enter') {
        // Navigate to frequency field
      }
    }
  }

  toggleSPWFlag(): void {
    if (this.spwFlag === 'Y') {
      this.spwPercentageEnabled = true;
    } else {
      this.spwPercentageEnabled = false;
    }
  }

  onPackageCodeFocus(): void {
    this.solutionProductService.fetchPackages().subscribe(packages => {
      // Display list of packages
      // Clear fund details
      // Navigate to premium field
    });
  }

  enableDropdown(): void {
    // Enable the dropdown list
  }

  updateDropdownValues(value: string): void {
    // Update the dropdown list with the new value
  }

  fetchPackageList(): void {
    this.solutionProductService.getPackageList().subscribe(packages => {
      // Display list of packages
    });
  }

  onPackageSelect(selectedPackage: any): void {
    this.solutionProductService.clearBlocks();
    // Set PORTFOLIO_STRATEGY to an empty string
    // Move cursor to PREMIUM field
  }

  updatePaymentMethods(payoutFrequency: string, fscCode: string): void {
    if (payoutFrequency === '4' || payoutFrequency === '12' || (payoutFrequency === '2' && !['2000003024', '7000005464', '7000002372', '7000000702'].includes(fscCode))) {
      this.paymentMethods = ['NACH', 'Auto Debit Instruction (ADI)', 'EMANDATE', 'Credit Card - Standing instruction (CCSI)', 'SSS'];
    } else {
      this.paymentMethods = ['Cash/Cheque/DD', 'SSS', 'Direct Debit', 'ECS', 'Credit Card - Standing instruction (CCSI)', 'Group Cash', 'Group Cheque', 'Group Direct Credit', 'Bill Junction - ECS', 'Auto Debit Instruction (ADI)', 'BG', 'NACH', 'EMANDATE'];
    }
  }

  enableDisablePaymentMethodSelection(payoutFrequency: string, selectedPaymentMethod: string, adiFlag: string): void {
    if (payoutFrequency === '01') {
      // Disable payment method selection
    } else if (selectedPaymentMethod !== 'CCSI' && selectedPaymentMethod !== 'EMAND' && adiFlag !== 'Y') {
      // Enable payment method selection
    }
  }

  navigateToRiderDetails(): void {
    this.solutionProductService.fetchSumAssured().subscribe(sumAssured => {
      // Navigate to rider details section
      this.populateSumAssured(sumAssured);
    });
  }

  populateSumAssured(sumAssured: number): void {
    // Populate the rider cover sum assured field
  }

  onPremiumTermInput(premiumTerm: number): void {
    // Navigate to rider details section and pass the premium term value
  }

  updateRenewalPaymentMethods(frequency: string, fscCode: string): void {
    if (frequency === '4' || frequency === '12' || (frequency === '2' && !['2000003024', '7000005464', '7000002372', '7000000702'].includes(fscCode))) {
      this.paymentMethods = ['NACH', 'Auto Debit Instruction (ADI)', 'EMANDATE', 'Credit Card - Standing instruction (CCSI)'];
    } else {
      this.paymentMethods = ['Cash/Cheque/DD', 'SSS', 'Direct Debit', 'ECS', 'Credit Card - Standing instruction (CCSI)', 'Group Cash', 'Group Cheque', 'Group Direct Credit', 'Bill Junction - ECS', 'Auto Debit Instruction (ADI)', 'BG', 'NACH', 'EMANDATE'];
    }
    if (frequency === '01') {
      // Disable renewal payment field
    } else if (selectedPaymentMethod !== 'CCSI' && selectedPaymentMethod !== 'EMAND' && adiFlag !== 'Y') {
      // Enable renewal payment field
    }
  }

  handleBenefitTermInput(benefitTerm: number): void {
    // Navigate to rider details section and pass the benefit term value
  }

  onOkButtonClick(): void {
    this.solutionProductService.navigateToRiderDetails();
    this.solutionProductService.calculateAndUpdateRiderCoverAmounts();
    // Set focus back to the initial item in the solution product block
  }

  handleMoneyBackOption(): void {
    // Handle the list of values, input conversion to uppercase, and tooltip display
  }

  private initializeSPWFields(): void {
    this.spwFlag = 'N';
    this.spwPercentageEnabled = false;
  }
}