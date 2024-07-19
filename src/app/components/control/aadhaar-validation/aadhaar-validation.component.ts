import { Component } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { ControlModel } from 'src/app/models/control.model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-aadhaar-validation',
  templateUrl: './aadhaar-validation.component.html',
  styleUrls: ['./aadhaar-validation.component.css']
})
export class AadhaarValidationComponent {
  aadhaarDetails: ControlModel = new ControlModel();
  applicationNumber: string = '';
  aadhaarNumber: string = '';
  newAadhaarNumber: string = '';
  ageProofType: string = '';
  ageProofId: string = '';
  insuredCheck: boolean = false;

  constructor(private controlService: ControlService, private logger: NGXLogger) {}

  validateAadhaar() {
    try {
      // Enable Aadhaar input field if disabled
      this.aadhaarDetails.isAadhaarInputEnabled = true;

      // Log application number and Aadhaar details
      this.logger.debug('Application Number:', this.applicationNumber);
      this.logger.debug('Aadhaar Details:', this.aadhaarDetails);

      // Format date of birth
      const dob = new Date(this.aadhaarDetails.dateOfBirth);
      const formattedDob = `${dob.getDate()}/${dob.toLocaleString('default', { month: 'short' }).toUpperCase()}/${dob.getFullYear()}`;
      this.aadhaarDetails.dateOfBirth = formattedDob;

      // Collect details
      const details = {
        applicationNumber: this.applicationNumber,
        mobileNumber: this.aadhaarDetails.mobileNumber,
        name: this.aadhaarDetails.name,
        middleName: this.aadhaarDetails.middleName,
        surname: this.aadhaarDetails.surname,
        dateOfBirth: this.aadhaarDetails.dateOfBirth,
        gender: this.aadhaarDetails.gender,
        aadhaarNumber: this.aadhaarNumber || this.newAadhaarNumber
      };

      // Validate Aadhaar data
      this.controlService.validateAadhaar(details).subscribe((response: any) => {
        // Log validation flag and Aadhaar details
        this.logger.debug('Validation Flag:', response.validationFlag);
        this.logger.debug('Aadhaar Details:', response.aadhaarDetails);

        // Update Aadhaar flag and Aadhaar number fields
        this.aadhaarDetails.aadhaarFlag = response.validationFlag;
        this.aadhaarDetails.aadhaarNumber = response.aadhaarDetails;

        // Handle invalid Aadhaar number
        if (!response.validationFlag || response.aadhaarDetails.length !== 12) {
          this.navigateToBlock('RESULT');
          return;
        }

        // Update age proof ID if necessary
        if ((this.ageProofType === 'AC' || this.ageProofType === 'ACS') && this.ageProofId !== this.aadhaarNumber) {
          this.ageProofId = this.aadhaarNumber;
        }

        // Navigate to AML block if insured check is true
        if (this.insuredCheck) {
          this.navigateToBlock('AML');
          this.updateAMLBlock('OTHERS', this.aadhaarNumber);
        }

        // Disable Aadhaar input field after validation
        this.aadhaarDetails.isAadhaarInputEnabled = false;
      }, (error) => {
        // Log error message
        this.logger.error('Error during Aadhaar validation:', error);
      });
    } catch (error) {
      // Log error message
      this.logger.error('Error during Aadhaar validation:', error);
    }
  }

  private navigateToBlock(blockName: string) {
    // Logic to navigate to the specified block
    this.logger.debug('Navigating to block:', blockName);
  }

  private updateAMLBlock(fieldName: string, value: string) {
    // Logic to update the AML block with the specified field and value
    this.logger.debug(`Updating AML block field ${fieldName} with value ${value}`);
  }
}
