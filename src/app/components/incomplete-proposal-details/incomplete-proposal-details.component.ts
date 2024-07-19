import { Component, OnInit } from '@angular/core';
import { IncompleteProposalDetailsService } from 'src/app/services/incomplete-proposal-details.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';

@Component({
  selector: 'app-incomplete-proposal-details',
  templateUrl: './incomplete-proposal-details.component.html',
  styleUrls: ['./incomplete-proposal-details.component.css']
})
export class IncompleteProposalDetailsComponent implements OnInit {
  detailsReceivedOptions = ['5', '8', 'No'];
  selectedDetailsReceived = 'N';
  v_recheck = 'N';
  v_stp_flg = 'N';

  constructor(
    private incompleteProposalDetailsService: IncompleteProposalDetailsService,
    private navigationService: NavigationService,
    private questionnaireComponent: QuestionnaireComponent
  ) {}

  ngOnInit(): void {
    // Initialize the dropdown list with options '5', '8', and 'No', and set the default value to 'N'.
    this.selectedDetailsReceived = 'N';
  }

  onDeleteButtonClick(): void {
    // Navigate to the incomplete proposal details section.
    this.navigationService.navigateToIncompleteProposalDetails();

    // Iterate through all records.
    this.incompleteProposalDetailsService.getIncompleteProposalDetails().forEach(record => {
      // For each record, check if the delete checkbox is selected.
      if (record.deleteCheckboxSelected) {
        // If selected, call the service method to delete the record.
        this.incompleteProposalDetailsService.deleteIncompleteProposalDetails(record.id);
      }
    });

    // Update the UI to reflect the deletion.
    this.incompleteProposalDetailsService.refreshIncompleteProposalDetails();
  }

  recheckDetails(): void {
    try {
      // Hide the current view.
      this.navigationService.hideCurrentView();

      // Navigate to the "Incomplete Proposal Details" section.
      this.navigationService.navigateToIncompleteProposalDetails();

      // Clear any existing data.
      this.incompleteProposalDetailsService.clearData();

      // Navigate to the "Quality Check Questions" section.
      this.navigationService.navigateToQualityCheckQuestions();

      // Focus on the "Answer" field.
      this.questionnaireComponent.focusOnAnswerField();

      // Set the variables `v_recheck` and `v_stp_flg` to 'Y'.
      this.v_recheck = 'Y';
      this.v_stp_flg = 'Y';
    } catch (error) {
      // Handle any exceptions gracefully.
      console.error('Error during recheck:', error);
    }
  }

  onAddRowClick(): void {
    if (confirm('Do you really want to add a new record for Incomplete Proposal Form Details?')) {
      try {
        // Navigate to the Incomplete Proposal Form Details section.
        this.navigationService.navigateToIncompleteProposalDetails();

        // Move to the last record and create a new record.
        this.incompleteProposalDetailsService.createNewRecord();
      } catch (error) {
        // Handle any errors that occur during the process and display an error message.
        alert('Exception in adding new rows: ' + error.message);
      }
    }
  }

  onSaveButtonClick(): void {
    if (confirm('Do you really want to Save Incomplete Proposal Form Details?')) {
      try {
        // Call the service method to save the details.
        this.incompleteProposalDetailsService.saveIncompleteDetails();

        // Hide the current view.
        this.navigationService.hideCurrentView();

        // Navigate to the quality check questions section.
        this.navigationService.navigateToQualityCheckQuestions();

        // Set specific flags (`v_recheck` and `v_stp_flg`) to 'Y'.
        this.v_recheck = 'Y';
        this.v_stp_flg = 'Y';
      } catch (error) {
        // Handle any errors that occur during the process and display an error message.
        alert('Exception in saving details: ' + error.message);
      }
    }
  }

  handleBackButton(): void {
    // Check if the fields `prop_form_field_scr`, `prop_comments`, and `dtls_rcvd` are filled.
    if (!this.incompleteProposalDetailsService.isFieldFilled('prop_form_field_scr') ||
        !this.incompleteProposalDetailsService.isFieldFilled('prop_comments') ||
        !this.incompleteProposalDetailsService.isFieldFilled('dtls_rcvd')) {
      // Display a message prompting the user to complete the incomplete proposal form details.
      alert('Please complete all required fields in the incomplete proposal form details.');
      return;
    }

    // Check the flag `incmp_prp_dtls_sv_flg`.
    if (this.incompleteProposalDetailsService.getFlag('incmp_prp_dtls_sv_flg') !== 'Y') {
      if (confirm('Do you want to save the details?')) {
        // Navigate to the save button for the incomplete proposal details.
        this.onSaveButtonClick();
      } else {
        // Hide the incomplete proposal details section, clear the block, and navigate to the quality check questions section.
        this.navigationService.hideIncompleteProposalDetailsSection();
        this.incompleteProposalDetailsService.clearBlock();
        this.navigationService.navigateToQualityCheckQuestions();
      }
    }
  }
}
