import { Component } from '@angular/core';
import { CorrectValueService } from '../../services/correct-value.service';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-scrutiny-failure',
  templateUrl: './scrutiny-failure.component.html',
  styleUrls: ['./scrutiny-failure.component.css']
})
export class ScrutinyFailureComponent {
  applicationNumber: string = '';
  userId: string = '';
  errorMessage: string = '';

  constructor(private correctValueService: CorrectValueService, private logger: LoggerService) {}

  initiateScrutinyFailure() {
    this.logger.log(NgxLoggerLevel.INFO, 'Initiating scrutiny failure process');

    if (!this.applicationNumber) {
      this.errorMessage = 'Application number cannot be null.';
      this.logger.log(NgxLoggerLevel.ERROR, this.errorMessage);
      return;
    }

    if (!this.userId.startsWith('UU')) {
      this.errorMessage = 'Not an Authorized ID.';
      this.logger.log(NgxLoggerLevel.ERROR, this.errorMessage);
      return;
    }

    const params = {
      RES_TYPE: 'QC',
      RES_appln: this.applicationNumber
    };

    this.correctValueService.initiateScrutinyFailure(params).subscribe(
      response => {
        this.logger.log(NgxLoggerLevel.INFO, 'Scrutiny failure process initiated successfully', response);
      },
      error => {
        this.errorMessage = 'Failed to initiate scrutiny failure process.';
        this.logger.log(NgxLoggerLevel.ERROR, this.errorMessage, error);
      }
    );
  }
}
