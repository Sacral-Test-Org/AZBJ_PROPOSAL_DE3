import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-next-tab-button',
  templateUrl: './next-tab-button.component.html',
  styleUrls: ['./next-tab-button.component.css']
})
export class NextTabButtonComponent {
  constructor(private navigationService: NavigationService) {}

  handleNextTabButtonClick() {
    // Check if Aadhaar field is empty
    if (!this.navigationService.aadhaarField) {
      // Check if Age Proof field is 'AC' or 'ACS' and Age Proof ID field is not empty
      if ((this.navigationService.ageProofField === 'AC' || this.navigationService.ageProofField === 'ACS') && this.navigationService.ageProofIdField) {
        // Auto-fill Aadhaar field with the value from Age Proof ID field
        this.navigationService.aadhaarField = this.navigationService.ageProofIdField;
      }
    }

    // Validate area and place
    this.navigationService.validateAreaAndPlace().subscribe((result: any) => {
      if (result.areaNotFound) {
        // Navigate to area field for correction
        this.navigationService.navigateToField('area');
      } else if (result.placeNotFound) {
        // Navigate to address line 3 field for correction
        this.navigationService.navigateToField('addressLine3');
      } else {
        // Enable or disable 'PH_INFO' tab and navigate to education field
        this.navigationService.togglePhInfoTab(result.enablePhInfoTab);
        this.navigationService.navigateToField('education');

        // Enable or disable nominee section based on specific conditions
        this.navigationService.toggleNomineeSection(result.enableNomineeSection);
      }
    });
  }
}
