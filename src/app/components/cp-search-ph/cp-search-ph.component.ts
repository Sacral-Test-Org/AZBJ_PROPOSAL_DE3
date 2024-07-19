import { Component } from '@angular/core';
import { CP_SearchPHService } from 'src/app/services/cp-search-ph.service';

@Component({
  selector: 'app-cp-search-ph',
  templateUrl: './cp-search-ph.component.html',
  styleUrls: ['./cp-search-ph.component.css']
})
export class CP_SearchPHComponent {
  genderOptions: string[] = ['PH', '5', '8', '10', 'No'];
  spouseName: string = '';
  originalSpouseName: string = '';
  partnerType: string = '';
  fatherName: string = '';
  originalFatherName: string = '';
  occupation: string = '';
  originalOccupation: string = '';
  firstName: string = '';
  middleName: string = '';
  lastName: string = '';
  originalFirstName: string = '';
  originalMiddleName: string = '';
  originalLastName: string = '';
  globalViewImageCount: number = 0;
  partnerID: string | null = null;
  signatureCheck: string = '';
  ageProofCheck: string = '';
  addressProofCheck: string = '';

  constructor(private cpSearchPHService: CP_SearchPHService) {}

  handleGenderDropdown(event: any): void {
    const value = event.target.value.toUpperCase();
    event.target.value = value;
  }

  onCheckboxChange(event: any): void {
    const isChecked = event.target.checked;
    if (isChecked) {
      if (this.partnerType === 'PH') {
        this.spouseName = 'ph_SPOUSE';
      }
    } else {
      this.spouseName = this.originalSpouseName;
    }
  }

  handleCheckboxChange(event: any): void {
    const isChecked = event.target.checked;
    if (isChecked) {
      if (this.partnerType === 'PH') {
        this.fatherName = 'correctedName';
      }
    } else {
      this.fatherName = this.originalFatherName;
    }
  }

  onMergeOptionSelect(option: string): void {
    if (option === 'N_C') {
      this.cpSearchPHService.resetToChkField(option);
    }
  }

  handleOccupationCheckboxChange(event: any): void {
    const isChecked = event.target.checked;
    if (isChecked) {
      if (this.partnerType === 'PH') {
        this.occupation = 'PH_OCCUPATION';
      }
    } else {
      this.occupation = this.originalOccupation;
    }
  }

  onNameCheckboxChange(event: any): void {
    const isChecked = event.target.checked;
    if (isChecked) {
      if (this.partnerType === 'PH') {
        this.firstName = 'PH_FIRST_NAME';
        this.middleName = 'PH_MIDDLE_NAME';
        this.lastName = 'PH_LAST_NAME';
      } else {
        this.firstName = 'IP_FIRST_NAME';
        this.middleName = 'IP_MIDDLE_NAME';
        this.lastName = 'IP_LAST_NAME';
      }
    } else {
      this.firstName = this.originalFirstName;
      this.middleName = this.originalMiddleName;
      this.lastName = this.originalLastName;
    }
  }

  validateAgeProof(): void {
    if (this.globalViewImageCount === 0 && this.partnerID !== null) {
      this.ageProofCheck = 'NA';
      // Navigate to policy details section
    }
    if (this.signatureCheck !== 'Y' || this.ageProofCheck !== 'Y' || this.addressProofCheck !== 'Y') {
      // Display error message
    }
  }

  applyAndSave(): void {
    // Navigate to CP Search Result PH section
    // Loop through each record
    // If checkbox is checked, set merge flag to 'Y'
    // Display success message
  }

  validateInputs(): boolean {
    if (!this.firstName || !this.lastName || !this.partnerID) {
      // Display error messages
      return false;
    }
    return true;
  }

  searchPartners(): void {
    if (this.validateInputs()) {
      this.cpSearchPHService.searchPartners();
    }
  }

  onExitButtonClick(): void {
    this.cpSearchPHService.clearFields();
    this.cpSearchPHService.resetForm();
  }
}
