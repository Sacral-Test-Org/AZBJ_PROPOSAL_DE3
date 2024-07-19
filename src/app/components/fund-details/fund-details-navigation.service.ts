import { Injectable } from '@angular/core';
import { FundDetailsComponent } from './fund-details.component';

@Injectable({
  providedIn: 'root'
})
export class FundDetailsNavigationService {
  constructor(private fundDetailsComponent: FundDetailsComponent) {}

  navigateToNextItem(currentRecord: any): void {
    const currentIndex = this.fundDetailsComponent.fundDetails.indexOf(currentRecord);
    const nextIndex = currentIndex + 1;
    const nextRecord = this.fundDetailsComponent.fundDetails[nextIndex];

    if (nextIndex >= this.fundDetailsComponent.fundDetails.length) {
      this.fundDetailsComponent.focusCommandButton();
    } else if (nextRecord && nextRecord.fundName) {
      this.fundDetailsComponent.focusFundNameField(nextRecord);
    } else {
      this.fundDetailsComponent.focusCommandButton();
    }
  }

  navigateToNextSection(): void {
    const totalApportionment = this.fundDetailsComponent.fundDetails.reduce((total, record) => total + record.apportionment, 0);
    if (totalApportionment === 100) {
      this.fundDetailsComponent.navigateToNextSection();
    } else {
      this.fundDetailsComponent.promptCorrectEntries();
    }
  }
}
