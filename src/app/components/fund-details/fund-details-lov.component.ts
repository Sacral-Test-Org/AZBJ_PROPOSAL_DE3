import { Component, OnInit } from '@angular/core';
import { FundDetailsService } from 'src/app/services/fund-details.service';
import { ProposalFormService } from 'src/app/services/proposal-form.service';
import { ngxLogger } from 'ngx-logger';

@Component({
  selector: 'app-fund-details-lov',
  templateUrl: './fund-details-lov.component.html',
  styleUrls: ['./fund-details-lov.component.css']
})
export class FundDetailsLovComponent implements OnInit {
  fundList: any[] = [];
  productCode: string;
  coverCode: string;

  constructor(private fundDetailsService: FundDetailsService, private proposalFormService: ProposalFormService, private logger: ngxLogger) {}

  ngOnInit(): void {
    this.displayLOV();
  }

  displayLOV(): void {
    this.fetchLOV(this.productCode, this.coverCode);
  }

  fetchLOV(productCode: string, coverCode: string): void {
    this.fundDetailsService.fetchFundDetails(productCode, coverCode).subscribe(
      (data: any) => {
        this.fundList = data;
        this.logger.log('Fund details fetched successfully', data);
      },
      (error: any) => {
        this.logger.error('Error fetching fund details', error);
      }
    );
  }
}