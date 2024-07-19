import { Component } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-aadhaar-validation',
  templateUrl: './aadhaar-validation.component.html',
  styleUrls: ['./aadhaar-validation.component.css']
})
export class AadhaarValidationComponent {
  constructor(private correctValueService: CorrectValueService, private logger: NGXLogger) {}

  validateAadhaar(aadhaarID: string): void {
    if (aadhaarID.length === 12) {
      this.logger.debug('Starting Aadhaar validation process for ID:', aadhaarID);
      this.correctValueService.validateAadhaar(aadhaarID).subscribe(
        (result) => {
          this.logger.debug('Aadhaar validation successful:', result);
          // Update the age proof ID with validated Aadhaar details
          // Navigate to the next section if needed
        },
        (error) => {
          this.logger.error('Aadhaar validation failed:', error);
        }
      );
    } else {
      this.logger.error('Invalid Aadhaar ID length:', aadhaarID);
    }
  }
}
