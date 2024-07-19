import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-partner-type-dropdown',
  templateUrl: './partner-type-dropdown.component.html',
  styleUrls: ['./partner-type-dropdown.component.css']
})
export class PartnerTypeDropdownComponent {
  partnerTypes: string[] = ['IP', 'PH', '5', '8', '10', 'SL'];

  constructor(private navigationService: NavigationService) {}

  onPartnerTypeSelect(selectedPartnerType: string): void {
    this.navigationService.navigateToPanValidation(selectedPartnerType);
  }
}
