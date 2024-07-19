import { Component, OnInit, Input } from '@angular/core';
import { ProposalFormService } from 'src/app/services/proposal-form.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-insurance-amount',
  templateUrl: './insurance-amount.component.html',
  styleUrls: ['./insurance-amount.component.css']
})
export class InsuranceAmountComponent implements OnInit {
  @Input() currentItem: string;
  @Input() blockContext: string;
  insuranceAmount: number;
  visualAttributes: any;

  constructor(private proposalFormService: ProposalFormService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.loadInsuranceAmount(this.currentItem);
    this.updateVisualAttributes(this.blockContext);
  }

  loadInsuranceAmount(currentItem: string): void {
    try {
      const stripNumber = this.proposalFormService.getStripNumber(currentItem);
      const fileName = this.proposalFormService.getFileName(currentItem);
      this.insuranceAmount = this.proposalFormService.loadFieldValueFromImage(stripNumber, fileName);
    } catch (error) {
      this.logger.error('Error loading insurance amount:', error);
    }
  }

  updateVisualAttributes(blockContext: string): void {
    try {
      this.visualAttributes = this.proposalFormService.getVisualAttributes(blockContext);
    } catch (error) {
      this.logger.error('Error updating visual attributes:', error);
    }
  }
}
