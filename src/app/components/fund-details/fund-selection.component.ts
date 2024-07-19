import { Component, OnInit } from '@angular/core';
import { FundDetailsService } from '../../services/fund-details.service';
import { FundDetails } from '../../models/fund-details.model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-fund-selection',
  templateUrl: './fund-selection.component.html',
  styleUrls: ['./fund-selection.component.css']
})
export class FundSelectionComponent implements OnInit {
  funds: FundDetails[] = [];
  selectedFund: FundDetails | null = null;

  constructor(private fundDetailsService: FundDetailsService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.getFundList();
  }

  getFundList(): void {
    this.fundDetailsService.fetchAvailableFunds().subscribe(
      (data: FundDetails[]) => {
        this.funds = data;
        this.logger.info('Funds fetched successfully', data);
      },
      (error) => {
        this.logger.error('Error fetching funds', error);
      }
    );
  }

  selectFund(fundId: string): void {
    this.selectedFund = this.funds.find(fund => fund.fundId === fundId) || null;
    this.logger.info('Fund selected', this.selectedFund);
  }

  onFundSelect(): void {
    this.getFundList();
  }
}
