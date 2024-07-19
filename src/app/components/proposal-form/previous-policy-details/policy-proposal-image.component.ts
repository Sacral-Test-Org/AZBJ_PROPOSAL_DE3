import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProposalFormService } from 'src/app/services/proposal-form.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-policy-proposal-image',
  templateUrl: './policy-proposal-image.component.html',
  styleUrls: ['./policy-proposal-image.component.css']
})
export class PolicyProposalImageComponent implements OnChanges {
  @Input() stripNumber: number;
  imageData: any;

  constructor(private proposalFormService: ProposalFormService, private logger: NGXLogger) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stripNumber']) {
      this.displayImage(this.stripNumber);
    }
  }

  displayImage(stripNumber: number): void {
    this.proposalFormService.fetchImageData(stripNumber).subscribe(
      (data) => {
        this.imageData = data;
        this.logger.info('Image data loaded successfully for strip number:', stripNumber);
      },
      (error) => {
        this.logger.error('Error loading image data for strip number:', stripNumber, error);
      }
    );
  }
}
