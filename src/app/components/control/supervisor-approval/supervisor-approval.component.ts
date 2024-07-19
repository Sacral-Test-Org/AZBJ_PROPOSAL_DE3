import { Component } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-supervisor-approval',
  templateUrl: './supervisor-approval.component.html',
  styleUrls: ['./supervisor-approval.component.css']
})
export class SupervisorApprovalComponent {
  approvalForm: FormGroup;
  isPolicySelected: boolean = false;
  isSaveEnabled: boolean = false;

  constructor(
    private controlService: ControlService,
    private logger: LoggerService,
    private fb: FormBuilder
  ) {
    this.approvalForm = this.fb.group({
      supervisorId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSupervisorApproval() {
    if (!this.isPolicySelected) {
      this.logger.log(NgxLoggerLevel.ERROR, 'No policy selected for approval.');
      alert('It is mandatory to select at least one policy.');
      return;
    }

    const supervisorCredentials = this.approvalForm.value;
    this.authenticate(supervisorCredentials);
  }

  authenticate(supervisorCredentials: { supervisorId: string; password: string }) {
    this.controlService.authenticateSupervisor(supervisorCredentials).subscribe(
      (response) => {
        if (response.authenticated) {
          this.isSaveEnabled = true;
          this.logger.log(NgxLoggerLevel.INFO, 'Supervisor authenticated successfully.');
        } else {
          this.logger.log(NgxLoggerLevel.ERROR, 'Supervisor authentication failed.');
          alert('Authentication failed. Please try again.');
        }
      },
      (error) => {
        this.logger.log(NgxLoggerLevel.ERROR, 'Error during authentication: ' + error.message);
        alert('Authentication failed. Please try again.');
      }
    );
  }
}
