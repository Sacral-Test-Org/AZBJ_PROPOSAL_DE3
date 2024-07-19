import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CpSearchPhService } from '../../services/cp-search-ph.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-exit-button',
  templateUrl: './exit-button.component.html',
  styleUrls: ['./exit-button.component.css']
})
export class ExitButtonComponent {
  constructor(
    private cpSearchPhService: CpSearchPhService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onClick(): void {
    // Clear all search fields
    this.cpSearchPhService.clearFields();

    // Reset the form
    this.cpSearchPhService.resetForm();

    // Navigate to the Previous Policy section
    this.router.navigate(['/previous-policy']);

    // Collect policy numbers based on their type (IP or PH)
    const ipPolicies = this.cpSearchPhService.collectPolicyNumbers('IP');
    const phPolicies = this.cpSearchPhService.collectPolicyNumbers('PH');

    // Delete existing merge requests
    this.cpSearchPhService.deleteMergeRequests();

    // Check if the user has selected an option for exiting without merging
    if (!this.cpSearchPhService.isExitWithoutMergingSelected()) {
      this.snackBar.open('Please select an option for exiting without merging.', 'Close', {
        duration: 3000,
      });
      return;
    }

    // Reset specific fields and flags based on partner type
    this.cpSearchPhService.resetPartnerFields();

    // Delete merging reasons if no records in search results
    if (this.cpSearchPhService.noRecordsInSearchResults()) {
      this.cpSearchPhService.deleteMergingReasons();
    }

    // Update scrutiny partner form and show popup for PH if partner type is IP and insured checkbox is selected
    if (this.cpSearchPhService.isPartnerTypeIP() && this.cpSearchPhService.isInsuredCheckboxSelected()) {
      this.cpSearchPhService.updateScrutinyPartnerForm();
      this.cpSearchPhService.showPopupForPH();
    }

    // Display Reason window and populate with reasons if N_C option is selected
    if (this.cpSearchPhService.isNCOptionSelected()) {
      this.cpSearchPhService.displayReasonWindow();
      this.cpSearchPhService.populateReasons();
    }
  }
}
