import { Injectable } from '@angular/core';
import { FamilyDetailsService } from './family-details.service';
import { CauseOfDeath } from '../../models/cause-of-death.model';

@Injectable({
  providedIn: 'root'
})
export class CauseOfDeathNavigationService {
  constructor(private familyDetailsService: FamilyDetailsService) {}

  navigateToNextItem(): void {
    const fmIpType = this.familyDetailsService.getFmIpType();
    if (fmIpType) {
      this.familyDetailsService.navigateToLastRecord();
      this.familyDetailsService.navigateToNextRecord();
      this.updateFamilyDetails();
      this.clearCurrentBlock();
    }
  }

  navigateToCauseOfDeath(currentItemId: string): void {
    const imageData = this.familyDetailsService.getImageData(currentItemId);
    this.populateCauseOfDeathField(imageData);
  }

  private updateFamilyDetails(): void {
    const currentBlockValues = this.familyDetailsService.getCurrentBlockValues();
    this.familyDetailsService.updateFamilyDetails(currentBlockValues);
  }

  private clearCurrentBlock(): void {
    this.familyDetailsService.clearCurrentBlock();
  }

  private populateCauseOfDeathField(imageData: any): void {
    const causeOfDeathField = this.familyDetailsService.getCauseOfDeathField();
    causeOfDeathField.value = imageData.causeOfDeath;
  }
}
