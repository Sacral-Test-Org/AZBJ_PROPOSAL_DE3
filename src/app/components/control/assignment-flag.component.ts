import { Component } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Control } from 'src/app/models/control.model';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-assignment-flag',
  templateUrl: './assignment-flag.component.html',
  styleUrls: ['./assignment-flag.component.css']
})
export class AssignmentFlagComponent {
  control: Control;

  constructor(private controlService: ControlService, private logger: LoggerService) {
    this.control = new Control();
  }

  manageAssignmentFlag(): void {
    if (this.control.assignmentFlag) {
      if (confirm('Are you sure you want to remove the assignment flag?')) {
        this.controlService.updateAssignmentFlag(false).subscribe(
          () => {
            this.control.assignmentFlag = false;
            this.logger.log(NgxLoggerLevel.INFO, 'Assignment flag removed successfully.');
          },
          (error) => {
            this.logger.log(NgxLoggerLevel.ERROR, 'Error removing assignment flag:', error);
          }
        );
      }
    }
  }

  checkEIA(): void {
    if (this.control.eIAOpted && this.control.assignmentFlag) {
      this.controlService.updateAssignmentFlag(false).subscribe(
        () => {
          this.control.assignmentFlag = false;
          alert('eIA is not allowed for assignment cases. The assignment flag has been unchecked.');
          this.logger.log(NgxLoggerLevel.INFO, 'Assignment flag unchecked due to eIA.');
        },
        (error) => {
          this.logger.log(NgxLoggerLevel.ERROR, 'Error unchecking assignment flag due to eIA:', error);
        }
      );
    }
  }
}
