import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-surrogate-income-proof-detail',
  templateUrl: './surrogate-income-proof-detail.component.html',
  styleUrls: ['./surrogate-income-proof-detail.component.css']
})
export class SurrogateIncomeProofDetailComponent implements OnInit {
  @Input() proofTypeId: string;

  constructor(private router: Router, private logger: LoggerService) {}

  ngOnInit(): void {
    if (this.proofTypeId) {
      this.displayDetail(this.proofTypeId);
    } else {
      this.logger.log(NgxLoggerLevel.ERROR, 'No proof type ID provided');
    }
  }

  displayDetail(proofTypeId: string): void {
    try {
      // Logic to display the detailed view for the selected proof type
      this.logger.log(NgxLoggerLevel.INFO, `Displaying details for proof type ID: ${proofTypeId}`);
      // Navigate to the specific item related to the selected proof type
      this.router.navigate(['/proof-detail', proofTypeId]);
    } catch (error) {
      this.logger.log(NgxLoggerLevel.ERROR, 'Error displaying proof type details', error);
    }
  }
}