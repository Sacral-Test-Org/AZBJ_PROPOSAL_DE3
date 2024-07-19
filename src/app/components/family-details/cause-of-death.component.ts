import { Component, OnInit } from '@angular/core';
import { FamilyDetailsService } from 'src/app/services/family-details.service';
import { FamilyDetails } from 'src/app/models/family-details.model';

@Component({
  selector: 'app-cause-of-death',
  templateUrl: './cause-of-death.component.html',
  styleUrls: ['./cause-of-death.component.css']
})
export class CauseOfDeathComponent implements OnInit {
  currentItem: any;
  familyDetails: FamilyDetails;

  constructor(private familyDetailsService: FamilyDetailsService) {}

  ngOnInit(): void {
    this.loadCauseOfDeathData(this.currentItem);
  }

  loadCauseOfDeathData(currentItemId: any): void {
    this.familyDetailsService.getImageData(currentItemId).subscribe(data => {
      // Logic to display image data
    });
  }

  updateFamilyDetails(familyDetails: FamilyDetails): void {
    this.familyDetailsService.updateFamilyDetails(familyDetails).subscribe(() => {
      // Logic to clear current family details fields
    });
  }

  loadImageData(currentItem: any): void {
    this.familyDetailsService.fetchImageData(currentItem).subscribe(data => {
      // Logic to display image data
    });
  }

  promptAddMoreMembers(): void {
    const userResponse = confirm('Do you wish to add more members?');
    if (userResponse) {
      // Logic to navigate to the next tab
    } else {
      // Logic to move to the next record
    }
  }

  applyVisualAttributes(currentItem: any): void {
    // Logic to apply specific visual attributes to the current item
  }

  handleCauseOfDeathNavigation(currentItem: any): void {
    this.loadImage(currentItem);
    this.promptAddMoreMembers();
  }

  loadImage(): void {
    this.familyDetailsService.fetchImage().subscribe(data => {
      // Logic to display the image in the designated area
    });
  }
}