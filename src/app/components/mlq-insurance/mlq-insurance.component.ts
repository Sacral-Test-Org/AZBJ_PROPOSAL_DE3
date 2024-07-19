import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-mlq-insurance',
  templateUrl: './mlq-insurance.component.html',
  styleUrls: ['./mlq-insurance.component.css']
})
export class MLQInsuranceComponent {
  premium: string = '';
  sumAssured: string = '';
  companyName: string = '';
  relationshipTypes: string[] = ['5', '8', 'LA', 'No'];
  selectedRelationshipType: string = '';

  constructor(private navigationService: NavigationService) {}

  checkFieldCompletion(): void {
    if (this.premium && this.sumAssured && this.companyName) {
      this.navigationService.navigateToNextRecord();
    } else {
      this.navigationService.navigateToCorrectItem();
    }
  }
}
