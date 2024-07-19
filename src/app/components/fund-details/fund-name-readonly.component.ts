import { Component, OnInit } from '@angular/core';
import { FundDetailsService } from '../../services/fund-details.service';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-fund-name-readonly',
  templateUrl: './fund-name-readonly.component.html',
  styleUrls: ['./fund-name-readonly.component.css']
})
export class FundNameReadonlyComponent implements OnInit {
  fundName: string = '';
  currentBlock: string = 'AZBJ_SOL_SSO_FUND_DETAILS';
  currentItem: string = 'FUND_ID1';

  constructor(
    private fundDetailsService: FundDetailsService,
    private router: Router,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.setVisualAttributes();
  }

  handleFocusEvent(): void {
    this.fundDetailsService.fetchFundDetails(this.currentBlock, this.currentItem).subscribe(
      (data: any) => {
        this.fundName = data.fundName;
        this.displayImage(data.imagePath);
      },
      (error: any) => {
        this.logger.error('Error fetching fund details', error);
      }
    );
  }

  handleNextKeyPress(): void {
    this.router.navigate(['/fund-details/apportionment']);
  }

  setVisualAttributes(): void {
    // Apply specific visual attributes based on the current block and item
    // This is a placeholder for actual implementation
    this.logger.info('Setting visual attributes for block:', this.currentBlock, 'and item:', this.currentItem);
  }

  displayImage(imagePath: string): void {
    // Logic to display image in the designated area
    // This is a placeholder for actual implementation
    this.logger.info('Displaying image from path:', imagePath);
  }
}
