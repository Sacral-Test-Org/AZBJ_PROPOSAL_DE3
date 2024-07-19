import { Component, OnInit } from '@angular/core';
import { ProposalFormService } from 'src/app/services/proposal-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.css']
})
export class ProposalFormComponent implements OnInit {
  para_x: number = 0;
  para_y: number = 0;
  proposalForm: FormGroup;

  constructor(private proposalFormService: ProposalFormService) {}

  ngOnInit(): void {
    this.loadProposalDetails();
  }

  loadProposalDetails(): void {
    this.proposalFormService.getProposalDetails().subscribe(details => {
      this.proposalForm.setValue(details);
    });
  }

  onLeftButtonClick(): void {
    this.para_x -= 20;
    this.scrollImage();
  }

  scrollImage(): void {
    // Logic to scroll the image based on para_x and para_y
  }

  zoomImage(zoomPercentage: number, correctValueFactor: number): void {
    const image = document.getElementById('image51');
    if (image) {
      // Apply zoom logic here
    }
    this.navigateToCurrentItem();
  }

  navigateToCurrentItem(): void {
    // Logic to navigate to the current item
  }

  setAdjacentStripeNumber(proposalType: string, previousStripeNumber: number): void {
    // Logic to set the adjacent stripe number based on proposalType and previousStripeNumber
  }

  onBottomButtonClick(): void {
    const proposalType = ''; // Retrieve from form
    const previousStripeNumber = 0; // Retrieve from form
    this.setAdjacentStripeNumber(proposalType, previousStripeNumber);
  }

  scrollUp(): void {
    this.para_y -= 20;
    this.scrollImage();
  }

  scrollImageDown(): void {
    this.para_y += 20;
    this.scrollImage();
  }

  onTopButtonClick(): void {
    const proposalType = ''; // Retrieve from form
    const previousStripeNumber = 0; // Retrieve from form
    this.proposalFormService.Get_N_Set_Adjacent_strip_no(proposalType, previousStripeNumber, 'T');
  }

  handleRightButtonClick(): void {
    this.para_x += 20;
    this.scrollImage();
  }

  onRightButtonClick(): void {
    const proposalType = ''; // Retrieve from form
    const previousStripeNumber = 0; // Retrieve from form
    this.proposalFormService.getAdjacentStripNumber(proposalType, previousStripeNumber, 'R').subscribe();
  }

  handleSkipApplication(): void {
    const reason = ''; // Retrieve from form
    if (!reason) {
      this.displayErrorMessage('Please Select Reason For Skipping Application');
      return;
    }
    this.proposalFormService.skipApplication(reason).subscribe();
  }

  displayErrorMessage(message: string): void {
    // Logic to display error message
  }

  resetZoom(): void {
    // Logic to reset zoom level
    this.navigateToApplicationNumber();
  }

  navigateToApplicationNumber(): void {
    // Logic to navigate to application number field
  }

  onViewImageClick(formName: string): void {
    this.proposalFormService.getImagePath(formName).subscribe(path => {
      // Logic to open image based on path
    });
  }

  saveProposal(proposalForm: FormGroup): void {
    this.proposalFormService.saveProposal(proposalForm.value).subscribe();
  }

  validateProposal(proposalForm: FormGroup): void {
    this.proposalFormService.validateProposal(proposalForm.value).subscribe();
  }

  cancel(): void {
    this.proposalForm.reset();
  }

  handlePreviousPolicyDetails(previousPolicyDetails: any): void {
    this.proposalFormService.updatePreviousPolicyDetails(previousPolicyDetails).subscribe();
  }

  handleViewAllImagesButtonClick(): void {
    const applicationNumber = ''; // Retrieve from form
    this.proposalFormService.fetchAndCopyImages(applicationNumber).subscribe();
  }

  fetchSummaryDetails(): void {
    this.proposalFormService.getSummaryDetails().subscribe(details => {
      // Logic to handle summary details
    });
  }

  handleLeadByDoubleClick(): void {
    this.proposalFormService.fetchGroupCode().subscribe(code => {
      if (['T', 'I', 'O', 'DM', 'LG', 'BP'].includes(code) || code.includes('X')) {
        // Display list of values
      }
    });
  }

  validateLeadByField(): void {
    const fscCode = ''; // Retrieve from form
    if (!fscCode) {
      this.displayErrorMessage('Please Enter Agent Code');
      return;
    }
    this.proposalFormService.fetchAgentDetails(fscCode).subscribe(details => {
      // Logic to handle agent details
    });
  }

  addRiderDetail(riderDetail: any): void {
    this.proposalFormService.addRiderDetail(riderDetail).subscribe();
  }

  deleteRiderDetail(riderDetailId: number): void {
    this.proposalFormService.deleteRiderDetail(riderDetailId).subscribe();
  }

  populateRiderDetails(): void {
    this.proposalFormService.populateRiderDetails().subscribe();
  }

  onPopulateButtonClick(): void {
    const populateDe1Records = ''; // Retrieve from form
    if (populateDe1Records === 'Y') {
      this.proposalFormService.populateRecords('D1').subscribe();
    } else {
      this.proposalFormService.populateRecords('D2').subscribe();
    }
  }

  handleCheckboxChange(event: any): void {
    if (event.target.checked) {
      this.proposalFormService.populateDE2Records('D1').subscribe();
    } else {
      this.proposalFormService.populateDE2Records('D2').subscribe();
    }
  }

  onSave(): void {
    const productGroup = ''; // Retrieve from form
    if (productGroup === 'N') {
      this.proposalFormService.validateForm().subscribe(
        () => this.proposalFormService.saveForm().subscribe(),
        () => this.displayErrorMessage('Changes made after validation. Re-validation required.')
      );
    } else if (productGroup === 'Y') {
      // Logic to disable non-group items and validate save for group products
    } else {
      // Logic to navigate to quality control questions block and check conditions
    }
  }

  validateProposalForm(): void {
    this.proposalFormService.validateProposalForm().subscribe();
  }

  loadFundNameFromImage(): void {
    this.proposalFormService.getFundName().subscribe(fundName => {
      // Logic to load fund name from image
    });
  }

  onFundNameDoubleClick(): void {
    this.proposalFormService.getFundList().subscribe(list => {
      // Display list of values
    });
  }

  onFundNameKeyPress(event: any): void {
    this.proposalFormService.getFundList().subscribe(list => {
      // Display list of values
    });
  }

  navigateToNextItem(): void {
    this.clearVisualAttributes();
    this.focusNextItem();
  }

  clearVisualAttributes(): void {
    // Logic to clear visual attributes
  }

  focusNextItem(): void {
    // Logic to focus on the next item
  }

  handleProposalType(applicationNo: string): void {
    this.proposalFormService.fetchProposalType(applicationNo).subscribe(proposalType => {
      // Logic to update UI based on proposal type
    });
  }

  handleProposalDeposit(event: any): void {
    const value = event.target.value;
    if (['5', '8', 'SL'].includes(value)) {
      // Logic to handle predefined values
    } else {
      // Allow custom value
    }
  }
}