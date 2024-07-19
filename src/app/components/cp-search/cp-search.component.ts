import { Component } from '@angular/core';
import { CP_SearchResultService } from 'src/app/services/cp-search-result.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-cp-search',
  templateUrl: './cp-search.component.html',
  styleUrls: ['./cp-search.component.css']
})
export class CP_SearchComponent {
  searchCriteria: any = {};
  updateFields: any = {};
  imageCount: number = 0;
  partnerId: string | null = null;
  partnerType: string = 'IP';
  firstName: string = '';
  middleName: string = '';
  lastName: string = '';
  spouseName: string = '';
  fatherName: string = '';

  constructor(
    private cpSearchResultService: CP_SearchResultService,
    private navigationService: NavigationService
  ) {}

  handleSearch() {
    this.cpSearchResultService.searchCustomerProfiles(this.searchCriteria).subscribe(
      (response) => {
        // Handle the response to display the search results
      },
      (error) => {
        // Handle error
      }
    );
  }

  handleUpdate() {
    this.cpSearchResultService.updateCustomerProfile(this.updateFields).subscribe(
      (response) => {
        // Handle the response to update the customer profile
      },
      (error) => {
        // Handle error
      }
    );
  }

  clearSearchResults() {
    this.navigationService.navigateToSearchResults();
    // Assuming CP_SearchResultComponent has a method clearData
    // this.cpSearchResultComponent.clearData();
  }

  handleGenderDropdown() {
    // Initialize the dropdown options and handle any changes to the selected value
  }

  updateOccupation() {
    if (this.updateFields.updateOccupationInMasterCP) {
      if (this.partnerType === 'IP') {
        // Update the occupation in the search results to the IP occupation value
      } else {
        // Keep the occupation unchanged
      }
    } else {
      // Revert the occupation in the search results to its backup value
    }
  }

  handleCheckboxChange(event: any) {
    const isChecked = event.target.checked;
    if (isChecked && this.partnerType === 'IP') {
      // Update the father's name in the search results with the corrected value for 'IP'
    } else {
      // Revert the father's name to its original value
    }
  }

  handleRadioSelection(event: any) {
    if (event.target.value === 'N_C') {
      this.navigationService.navigateToSearchResults();
      this.cpSearchResultService.updateToChkField(0);
    }
  }

  onCheckboxChange(event: any) {
    const isChecked = event.target.checked;
    if (isChecked && this.partnerType === 'IP') {
      this.firstName = 'Correct First Name';
      this.middleName = 'Correct Middle Name';
      this.lastName = 'Correct Last Name';
    } else {
      this.firstName = 'Backup First Name';
      this.middleName = 'Backup Middle Name';
      this.lastName = 'Backup Last Name';
    }
  }

  verifyDocuments() {
    if (this.imageCount === 0 && this.partnerId) {
      // Set the values of the Signature, Age Proof, and Address Proof checkboxes to 'NA'
      // Prompt the user to check the policy details
      // If any of the checkboxes are not selected, display an error message
      // If all checkboxes are selected, allow the user to proceed
    }
  }

  validateAdditionalProofCheck() {
    if (this.imageCount === 0 && this.partnerId) {
      // Set the "Additional Proof Check" to 'NA'
      // Navigate to the policy details section
      // Display appropriate error messages based on the conditions
    }
  }

  handleCheckboxSelection(event: any) {
    const isChecked = event.target.checked;
    if (!isChecked) {
      // Display a warning message
      // Update the record color
    } else {
      // Update the record color
    }
  }

  onSaveAndApplyClick() {
    // Initialize necessary variables
    // Navigate to the "Previous Policy" section
    // Clear specific fields in the "CP Search" section
    // Delete existing merge requests from the database
    // Handle different merge options
    // Update the "Control" section
    // Validate the RCU and navigate to the appropriate item
  }

  onExitButtonClick() {
    // Clear the form fields
    // Navigate to the 'Previous Policy' section
    // Delete existing merge requests and merging reasons from the database
    // Display error messages or popups based on conditions
  }

  handleCheckboxChangeCP3(event: any) {
    const isChecked = event.target.checked;
    if (isChecked && this.updateFields.CP_3_PARTID) {
      // Generate a list number and update the color of the matching record
    } else if (!isChecked && this.updateFields.CP_3_PARTID) {
      // Update the color of the matching record to indicate it is not selected
    }
  }

  handleCheckboxChangeCP5(event: any) {
    const isChecked = event.target.checked;
    if (isChecked && this.updateFields.CP_5_PARTID) {
      // Generate a number and update the record color
    } else if (!isChecked && this.updateFields.CP_5_PARTID) {
      // Update the record color to indicate it is unchecked
    }
  }

  handleCheckboxChangeCP4(event: any) {
    const isChecked = event.target.checked;
    if (isChecked && this.updateFields.CP_4_PARTID) {
      // Get a list number for deduplication and change the color of the matching record
    } else if (!isChecked && this.updateFields.CP_4_PARTID) {
      // Change the color of the matching record and set the list number to 0
    }
  }

  handleCheckboxChangeCP2(event: any) {
    const isChecked = event.target.checked;
    if (isChecked && this.updateFields.CP_2_PARTID) {
      // Change the color of the matching record to indicate it is selected
    } else if (!isChecked && this.updateFields.CP_2_PARTID) {
      // Change the color of the matching record to indicate it is not selected
    }
  }

  saveAndApply() {
    // Initialize necessary variables
    // Navigate to the "Previous Policy" section
    // Clear specific fields in the "CP Search" section
    // Delete existing merge requests from the database
    // Handle different merge options
    // Update the "Control" section
    // Validate the RCU and navigate to the appropriate item
  }

  validateForm() {
    // Check if date of birth, gender, first name, and last name are provided
    // If not, set appropriate error messages
    return true; // or false based on validation
  }

  searchPartner() {
    if (this.validateForm()) {
      this.cpSearchResultService.searchPartner(this.searchCriteria).subscribe(
        (response) => {
          // Handle the response and update the search results
        },
        (error) => {
          // Handle error
        }
      );
    }
  }
}