import { Component, OnInit } from '@angular/core';
import { RiderDetailsService } from 'src/app/services/rider-details.service';
import { RiderDetails } from 'src/app/models/rider-details.model';

@Component({
  selector: 'app-rider-details',
  templateUrl: './rider-details.component.html',
  styleUrls: ['./rider-details.component.css']
})
export class RiderDetailsComponent implements OnInit {
  riderDetails: RiderDetails[] = [];
  interestRate: number | null = null;

  constructor(private riderDetailsService: RiderDetailsService) {}

  ngOnInit(): void {
    this.getRiderDetails();
  }

  getRiderDetails(): void {
    this.riderDetailsService.getRiderDetails().subscribe((data: RiderDetails[]) => {
      this.riderDetails = data;
    });
  }

  updateRiderDetails(rider: RiderDetails): void {
    this.riderDetailsService.updateRiderDetails(rider).subscribe();
  }

  deleteRider(riderId: number): void {
    this.riderDetailsService.deleteRider(riderId).subscribe(() => {
      this.riderDetails = this.riderDetails.filter(r => r.id !== riderId);
    });
  }

  handleInterestRateInput(event: KeyboardEvent): void {
    const input = event.key;
    if (!/\d/.test(input)) {
      event.preventDefault();
    }
  }

  updateInterestRate(value: number): void {
    this.interestRate = value;
  }

  navigateToNextField(): void {
    const nextField = document.getElementById('CV_CHK_DEL');
    if (nextField) {
      nextField.focus();
    }
  }

  displayRiderCoverDetails(): void {
    // Logic to display rider cover details in uppercase and set the field as read-only
  }

  navigateToNextItem(): void {
    // Logic to navigate to the next item (rider cover sum assured)
  }

  handleRiderCoverCodeNavigation(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.navigateToNextField();
    }
  }

  initializeRiderCoverCodeField(): void {
    // Logic to set the "RIDER_COVER_CODE" field to uppercase, disable insertions and updates, and add predefined list items
  }

  handleCheckboxChange(event: Event, riderId: number): void {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.checked ? 'Y' : 'N';
    // Logic to update the checkbox value in the rider details
  }

  navigateFocus(currentRiderIndex: number, totalRiders: number, riderCoverCode: string): void {
    if (riderCoverCode === null || currentRiderIndex === totalRiders) {
      // Logic to move focus to the delete item
    } else {
      // Logic to move focus to the next rider cover item
    }
  }

  handleRiderCover1SAField(): void {
    // Logic to load data from an image file, navigate to the previous and next items, and update visual attributes for the "RIDER_COVER1_SA" field
  }

  onPopulateButtonClick(): void {
    this.riderDetailsService.fetchRiderDetails().subscribe((data: RiderDetails[]) => {
      this.riderDetails = data;
    });
  }

  handleDeleteButtonClick(riderId: number): void {
    this.riderDetailsService.deleteRiderDetails(riderId).subscribe(() => {
      this.riderDetails = this.riderDetails.filter(r => r.id !== riderId);
    });
  }

  handleNavigation(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.navigateToNextField();
    }
  }

  navigateToTotalRiderInvestment(): void {
    // Logic to move the focus to the total rider investment field
  }

  validateCoverDescription(coverDescription: string): void {
    if (coverDescription.length > 500) {
      coverDescription = coverDescription.substring(0, 500);
    }
    // Logic to right-justify the cover description text
  }

  handleAllRidersCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;
    // Logic to select or deselect all riders with a cover code starting with 'R'
  }

  updateTotalRiderInvest(sumAssuredValues: number[]): void {
    // Logic to calculate the total rider invest based on the sum assured values and update the field
  }

  setTotalRiderInvestReadOnly(riderCoverCode: string): void {
    if (riderCoverCode.startsWith('L')) {
      // Logic to set the Total Rider Invest field to read-only
    }
  }

  displaySumAssured(sumAssured: number): void {
    // Logic to display the populated sum assured field with the fetched sum assured value
  }

  setPremiumTerm(premiumTerm: number): void {
    // Logic to set the premium term value to the component's property
  }

  ngOnInit(): void {
    this.getBenefitTerm();
  }

  getBenefitTerm(): void {
    this.riderDetailsService.getBenefitTerm().subscribe((term: number) => {
      // Logic to display the benefit term value in the component
    });
  }
}