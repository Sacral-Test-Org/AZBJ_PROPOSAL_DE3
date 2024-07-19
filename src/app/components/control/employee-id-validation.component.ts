import { Component } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-employee-id-validation',
  templateUrl: './employee-id-validation.component.html',
  styleUrls: ['./employee-id-validation.component.css']
})
export class EmployeeIdValidationComponent {
  employeeId: string = '';
  fscCode: string = '';
  errorMessage: string = '';

  constructor(private controlService: ControlService, private logger: NGXLogger) {}

  validateEmployeeId() {
    this.errorMessage = '';

    if (this.employeeId.length < 4 || this.employeeId.length > 6) {
      if (this.employeeId.length < 4 && ['59C', '59D', '59S', '5X9', '52S', '59L'].some(prefix => this.fscCode.startsWith(prefix))) {
        this.errorMessage = 'Employee Id should not be less than 4 digits.';
      } else if (this.employeeId.length > 6 && ['59C', '59S', '5X9', '59L'].some(prefix => this.fscCode.startsWith(prefix))) {
        this.errorMessage = 'Employee Id should not be greater than 6 digits.';
      } else {
        this.errorMessage = 'Employee Id must be between 4 and 6 digits long.';
      }
    } else if (/[^0-9]/.test(this.employeeId)) {
      if (/[^a-zA-Z0-9]/.test(this.employeeId)) {
        this.errorMessage = 'Special characters are not allowed.';
      } else if (/[a-zA-Z]/.test(this.employeeId)) {
        this.errorMessage = 'Alphabetic characters are not allowed.';
      }
    }

    if (!this.errorMessage) {
      this.controlService.validateEmployeeId(this.employeeId, this.fscCode).subscribe(
        response => {
          // Handle the response if needed
        },
        error => {
          this.logger.error('Error validating Employee ID', error);
        }
      );
    }
  }
}
