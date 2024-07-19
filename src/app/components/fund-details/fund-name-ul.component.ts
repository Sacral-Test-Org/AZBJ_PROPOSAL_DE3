import { Component, OnInit } from '@angular/core';
import { FundDetailsService } from 'src/app/services/fund-details.service';
import { FundDetails } from 'src/app/models/fund-details.model';
import { ngxLogger } from 'ngx-logger';

@Component({
  selector: 'app-fund-name-ul',
  templateUrl: './fund-name-ul.component.html',
  styleUrls: ['./fund-name-ul.component.css']
})
export class FundNameUlComponent implements OnInit {
  fundNameUl: string = '';
  proposalType: string = '';
  numberOfPages: number = 0;

  constructor(private fundDetailsService: FundDetailsService, private logger: ngxLogger) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  handleDoubleClick(event: any): void {
    this.fundDetailsService.fetchAvailableFunds().subscribe((funds: FundDetails[]) => {
      // Logic to display the list of available funds for selection
      const selectedFund = funds[0]; // Assume the first fund is selected for simplicity
      this.fundNameUl = selectedFund.fund_full_name;
      this.logger.info('Fund selected:', this.fundNameUl);
    }, error => {
      this.logger.error('Error fetching funds:', error);
    });
  }

  handleFocus(event: any): void {
    this.fundDetailsService.loadImage(this.proposalType, this.numberOfPages).subscribe(image => {
      // Logic to display the image
      if (this.proposalType === 'N' && this.numberOfPages === 50) {
        // Logic to zoom into a specific image
        this.logger.info('Zooming into the image for proposal type N with 50 pages');
      }
      this.logger.info('Image loaded:', image);
    }, error => {
      this.logger.error('Error loading image:', error);
    });
  }

  handleNavigation(event: any): void {
    // Logic to clear visual attributes from the current item
    this.logger.info('Clearing visual attributes from the current item');
    // Logic to move to the 'APPORTIONMENT' field
    this.logger.info('Navigating to the APPORTIONMENT field');
  }
}
