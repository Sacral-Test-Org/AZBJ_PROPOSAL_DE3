import { Component, OnInit } from '@angular/core';
import { RiderDetailsService } from 'src/app/services/rider-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rider-cover1-sa',
  templateUrl: './rider-cover1-sa.component.html',
  styleUrls: ['./rider-cover1-sa.component.css']
})
export class RiderCover1SAComponent implements OnInit {
  sumAssured: number;
  currentBlock: string;
  currentItem: string;

  constructor(private riderDetailsService: RiderDetailsService, private router: Router) {}

  ngOnInit(): void {
    this.loadRiderCover1SAData();
  }

  loadRiderCover1SAData(): void {
    this.riderDetailsService.getRiderCover1SAData(this.currentBlock, this.currentItem).subscribe(
      (data: number) => {
        this.sumAssured = data;
        this.displaySumAssured(this.sumAssured);
      },
      (error) => {
        console.error('Error loading Rider Cover 1 SA data', error);
      }
    );
  }

  displaySumAssured(sumAssured: number): void {
    // Logic to display the sum assured value in the UI
    console.log('Displaying Sum Assured:', sumAssured);
  }

  navigateToPreviousItem(): void {
    this.router.navigate(['/rider-details/correct']);
  }

  navigateToNextItem(productType: string): void {
    const specifiedTypes = ['ISECURE_LOAN', 'ISECURE_MORE'];
    if (specifiedTypes.includes(productType)) {
      this.router.navigate(['/rider-details/benefit-term']);
    } else {
      this.router.navigate(['/rider-details/cv-chk-del']);
    }
  }

  validateNumberInput(value: any): boolean {
    return !isNaN(value);
  }

  updateVisualAttributes(context: string): void {
    // Logic to update visual attributes based on the context
    console.log('Updating visual attributes for context:', context);
  }
}
