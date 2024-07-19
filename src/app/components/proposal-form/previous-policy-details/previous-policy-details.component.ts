import { Component, OnInit } from '@angular/core';
import { ProposalFormService } from 'src/app/services/proposal-form.service';
import { PreviousPolicyDetails } from 'src/app/models/proposal-form.model';

@Component({
  selector: 'app-previous-policy-details',
  templateUrl: './previous-policy-details.component.html',
  styleUrls: ['./previous-policy-details.component.css']
})
export class PreviousPolicyDetailsComponent implements OnInit {
  previousPolicyDetails: PreviousPolicyDetails[] = [];

  constructor(private proposalFormService: ProposalFormService) {}

  ngOnInit(): void {
    this.loadPreviousPolicyDetails();
  }

  loadPreviousPolicyDetails(): void {
    this.proposalFormService.getPreviousPolicies().subscribe((data: PreviousPolicyDetails[]) => {
      this.previousPolicyDetails = data;
    });
  }

  handlePreviousPolicyDetails(previousPolicyDetails: PreviousPolicyDetails): void {
    if (this.validateFields(previousPolicyDetails)) {
      this.proposalFormService.updatePreviousPolicyDetails(previousPolicyDetails).subscribe(() => {
        this.loadPreviousPolicyDetails();
      });
    }
  }

  handleFieldNavigation(currentFieldId: string): void {
    const fieldSequence = ['policyNumber', 'insuranceCompany', 'amountOfInsurance', 'status', 'ipType'];
    const currentIndex = fieldSequence.indexOf(currentFieldId);
    if (currentIndex !== -1 && currentIndex < fieldSequence.length - 1) {
      const nextFieldId = fieldSequence[currentIndex + 1];
      document.getElementById(nextFieldId)?.focus();
    }
  }

  setFieldReadOnly(fieldId: string): void {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    if (field) {
      field.readOnly = true;
    }
  }

  handleNextItem(): void {
    const currentPolicy = this.previousPolicyDetails[this.previousPolicyDetails.length - 1];
    if (currentPolicy.policyNumber) {
      this.previousPolicyDetails.push({ ...currentPolicy, policyNumber: '', insuranceCompany: '', amountOfInsurance: '', status: '', ipType: '' });
      this.handleFieldNavigation('policyNumber');
    }
  }

  handlePreviousItem(): void {
    // Logic to load the field from the image based on the current item
  }

  navigateToInsuranceCompanyField(): void {
    const currentBlock = 'AZBJ_PREVIOUS_POLICY1';
    const currentItem = 'insuranceCompany';
    const proposalType = 'someProposalType';
    this.proposalFormService.fetchImage(currentBlock, currentItem, proposalType).subscribe((imageData) => {
      // Logic to display the image in the insurance-company-image component
    });
  }

  handleNavigation(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.handleNextItem();
    }
  }

  updateVisualAttributes(blockContext: string): void {
    this.proposalFormService.getVisualAttributes(blockContext).subscribe((attributes) => {
      // Logic to update visual attributes
    });
  }

  loadImageData(): void {
    const currentBlock = 'AZBJ_PREVIOUS_POLICY1';
    const currentItem = 'policyNumber';
    const proposalType = 'someProposalType';
    this.proposalFormService.fetchImageData(currentBlock, currentItem, proposalType).subscribe((imageData) => {
      // Logic to display the image data
    });
  }

  navigateToNextItem(): void {
    this.proposalFormService.clearVisualAttributes().subscribe(() => {
      this.handleFieldNavigation('insuranceCompany');
    });
  }

  addPolicy(policyDetails: PreviousPolicyDetails): void {
    this.proposalFormService.addPolicy(policyDetails).subscribe(() => {
      this.loadPreviousPolicyDetails();
    });
  }

  updatePolicy(policyDetails: PreviousPolicyDetails): void {
    this.proposalFormService.updatePolicy(policyDetails).subscribe(() => {
      this.loadPreviousPolicyDetails();
    });
  }

  deletePolicy(policyId: string): void {
    this.proposalFormService.deletePolicy(policyId).subscribe(() => {
      this.loadPreviousPolicyDetails();
    });
  }

  validateFields(previousPolicyDetails: PreviousPolicyDetails): boolean {
    if (!previousPolicyDetails.amountOfInsurance || isNaN(Number(previousPolicyDetails.amountOfInsurance)) || previousPolicyDetails.amountOfInsurance.length > 15) {
      return false;
    }
    return true;
  }

  handleMouseClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target && target.id) {
      this.handleFieldNavigation(target.id);
    }
  }

  onDeleteButtonClick(): void {
    const selectedPolicyId = 'somePolicyId'; // This should be dynamically set based on user selection
    this.proposalFormService.deletePreviousPolicyRecord(selectedPolicyId).subscribe(() => {
      this.loadPreviousPolicyDetails();
    });
  }

  handleAmountInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 15) {
      input.value = input.value.slice(0, 15);
    }
    if (isNaN(Number(input.value))) {
      input.value = input.value.replace(/[^0-9]/g, '');
    }
  }

  loadFieldFromImage(): void {
    const currentItem = 'amountOfInsurance';
    this.proposalFormService.getImageField(currentItem).subscribe((imageData) => {
      // Logic to load the field value from the image
    });
  }

  navigateToNextField(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.handleFieldNavigation('ipType');
    }
  }

  loadFieldFromImageForIPType(currentItem: string): void {
    this.proposalFormService.fetchImage(currentItem).subscribe((imageData) => {
      // Logic to load the field from the image
    });
  }

  navigateToPreviousPolicyStatus(): void {
    this.handleFieldNavigation('previousPolicyStatus');
  }

  handleInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 50) {
      input.value = input.value.slice(0, 50);
    }
    // Logic to update the model
  }

  navigateToNextItemForStatus(): void {
    this.proposalFormService.promptUser('Do you wish to add more Policies?').subscribe((response) => {
      if (response === 'Yes') {
        this.handleNextItem();
      } else {
        // Logic to handle proposal type and number of pages
        this.handleFieldNavigation('nomineeNextTab');
      }
    });
  }

  updatePolicyStatus(status: string): void {
    this.proposalFormService.updateStatus(status).subscribe(() => {
      this.loadPreviousPolicyDetails();
    });
  }
}
