import { Component } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-pan-validation',
  templateUrl: './pan-validation.component.html',
  styleUrls: ['./pan-validation.component.css']
})
export class PanValidationComponent {
  constructor(private correctValueService: CorrectValueService, private logger: NGXLogger) {}

  validatePan(ageProofID: string): void {
    if (ageProofID) {
      this.logger.debug('Navigating to PAN validation control with ageProofID:', ageProofID);
      this.correctValueService.validatePan(ageProofID).subscribe(
        (result) => {
          this.logger.debug('PAN validation result:', result);
          // Navigate back to the age proof field after validation
          this.logger.debug('Returning to age proof field after PAN validation');
        },
        (error) => {
          this.logger.error('Error during PAN validation:', error);
        }
      );
    }
  }
}
