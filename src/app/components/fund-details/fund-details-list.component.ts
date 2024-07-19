import { Component, OnInit } from '@angular/core';
import { FundDetailsService } from '../../services/fund-details.service';
import { Fund } from '../../models/fund.model';
import { ngxLogger } from 'ngx-logger';

@Component({
  selector: 'app-fund-details-list',
  templateUrl: './fund-details-list.component.html',
  styleUrls: ['./fund-details-list.component.css']
})
export class FundDetailsListComponent implements OnInit {
  funds: Fund[] = [];
  totalApportionment: number = 0;

  constructor(private fundDetailsService: FundDetailsService, private logger: ngxLogger) {}

  ngOnInit(): void {
    this.fetchAvailableFunds();
  }

  fetchAvailableFunds(): void {
    this.fundDetailsService.getAvailableFunds().subscribe(
      (data: Fund[]) => {
        this.funds = data;
        this.calculateTotalApportionment();
      },
      (error) => {
        this.logger.error('Error fetching available funds', error);
      }
    );
  }

  applyFilters(productCode: string, dateRange: { startDate: string; endDate: string }): void {
    this.fundDetailsService.getAvailableFunds(productCode, dateRange).subscribe(
      (data: Fund[]) => {
        this.funds = data;
        this.calculateTotalApportionment();
      },
      (error) => {
        this.logger.error('Error applying filters', error);
      }
    );
  }

  calculateTotalApportionment(): void {
    this.totalApportionment = this.funds.reduce((total, fund) => total + fund.apportionment, 0);
  }

  loadImage(): void {
    this.fundDetailsService.fetchImageData().subscribe(
      (imageData) => {
        // Logic to display image data in the designated image area
      },
      (error) => {
        this.logger.error('Error loading image data', error);
      }
    );
  }
}