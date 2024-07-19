import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-policy-details-others',
  templateUrl: './policy-details-others.component.html',
  styleUrls: ['./policy-details-others.component.css']
})
export class PolicyDetailsOthersComponent {
  constructor(private navigationService: NavigationService) {}

  handleExitButtonClick(): void {
    this.handleExitButton();
  }

  private handleExitButton(): void {
    const globalViewImageCount = 0; // This should be dynamically fetched
    const currentWindow = 'IP'; // This should be dynamically fetched
    const policyReference = 'somePolicyReference'; // This should be dynamically fetched
    const insuredCheck = '1'; // This should be dynamically fetched
    const globalViewImageCountPH = 0; // This should be dynamically fetched

    if (globalViewImageCount === 0 && currentWindow === 'IP' && policyReference) {
      alert('Please select VIEW IMAGES at least once.');
      this.navigationService.navigateToViewImages();
      return;
    }

    if (insuredCheck === '1' && globalViewImageCountPH === 0 && currentWindow === 'PH' && policyReference) {
      alert('Please select VIEW IMAGES at least once.');
      this.navigationService.navigateToViewImages();
      return;
    }

    this.navigationService.hideCurrentView();

    if (currentWindow === 'PH') {
      this.navigationService.navigateToPolicyDetails('CP_SEARCH_RESULT_PH');
    } else {
      this.navigationService.navigateToPolicyDetails('CP_SEARCH_RESULT');
    }

    // Reset the current window indicator to 'N'
    // This should be dynamically set
  }
}
