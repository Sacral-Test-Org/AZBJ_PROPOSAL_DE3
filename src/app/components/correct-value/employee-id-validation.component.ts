import { Component } from '@angular/core';
import { FieldValidationService } from 'src/app/services/field-validation.service';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-employee-id-validation',
  templateUrl: './employee-id-validation.component.html',
  styleUrls: ['./employee-id-validation.component.css']
})
export class EmployeeIdValidationComponent {
  employeeId: string = '';
  fscCode: string = '';

  constructor(private fieldValidationService: FieldValidationService, private logger: LoggerService) {}

  handleDoubleClick(): void {
    this.logger.log(NgxLoggerLevel.DEBUG, 'Double-click event triggered on Employee ID field');
    if (this.fscCode === '7100000003') {
      alert('Please enter the Employee ID manually.');
    } else {
      this.fieldValidationService.fetchEmployeeIdList().subscribe(
        (data: any) => {
          // Logic to display list of values
          console.log('List of Employee IDs:', data);
        },
        (error: any) => {
          this.logger.log(NgxLoggerLevel.ERROR, 'Error fetching Employee ID list', error);
        }
      );
    }
  }
}
