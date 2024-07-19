import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { CorrectValueModel } from 'src/app/models/correct-value.model';

@Component({
  selector: 'app-next-tab-button',
  templateUrl: './next-tab-button.component.html',
  styleUrls: ['./next-tab-button.component.css']
})
export class NextTabButtonComponent {
  constructor(private navigationService: NavigationService) {}

  onNextTabButtonClick(): void {
    // Check if Aadhaar field needs to be auto-filled
    if (!CorrectValueModel.aadhaar && (CorrectValueModel.ageProofType === 'AC' || CorrectValueModel.ageProofType === 'ACS') && CorrectValueModel.ageProofId) {
      CorrectValueModel.aadhaar = CorrectValueModel.ageProofId;
    }

    // Query area
    this.navigationService.queryArea(CorrectValueModel.state, CorrectValueModel.district, CorrectValueModel.pincode, CorrectValueModel.area).subscribe(area => {
      if (!area && CorrectValueModel.area !== 'NOT FOUND' && CorrectValueModel.area !== 'NOTFOUND' && CorrectValueModel.propertyType !== 'N') {
        this.navigationService.navigateToField('area');
      } else {
        // Query place
        this.navigationService.queryPlace(CorrectValueModel.addressLine3, CorrectValueModel.district).subscribe(place => {
          if (!CorrectValueModel.addressLine3 && CorrectValueModel.addressLine3 !== 'NOT FOUND' && CorrectValueModel.addressLine3 !== 'NOTFOUND') {
            this.navigationService.navigateToField('addressLine3');
          } else {
            this.navigationService.enableTab('IP_INFO');
            this.navigationService.navigateToField('education');
          }
        });
      }
    });

    // Log debug information
    this.navigationService.logDebugInfo(CorrectValueModel.applicationNumber, CorrectValueModel.dateOfBirth, CorrectValueModel.age);

    // Update occupation list if age is 5 or more
    if (CorrectValueModel.age >= 5) {
      this.navigationService.updateOccupationList().subscribe();
    }
  }
}