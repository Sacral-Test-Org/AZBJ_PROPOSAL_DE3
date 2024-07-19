import { Component } from '@angular/core';
import { FundDetailsService } from 'src/app/services/fund-details.service';

@Component({
  selector: 'app-reset-fund-details',
  templateUrl: './reset-fund-details.component.html',
  styleUrls: ['./reset-fund-details.component.css']
})
export class ResetFundDetailsComponent {
  constructor(private fundDetailsService: FundDetailsService) {}

  onResetButtonClick(): void {
    this.fundDetailsService.resetFundDetails();
  }
}
