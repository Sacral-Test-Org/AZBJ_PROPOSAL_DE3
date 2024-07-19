import { Component } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-save-duplicate-contact',
  templateUrl: './save-duplicate-contact.component.html',
  styleUrls: ['./save-duplicate-contact.component.css']
})
export class SaveDuplicateContactComponent {
  v_grp_product: string = 'N'; // This should be set based on your application logic

  constructor(private controlService: ControlService, private logger: LoggerService) {}

  saveDuplicateContactDetails() {
    this.controlService.saveDuplicateContactDetails().subscribe(
      response => {
        this.logger.log(NgxLoggerLevel.INFO, 'Duplicate contact number details saved successfully.');
        this.checkGroupProduct();
      },
      error => {
        this.logger.log(NgxLoggerLevel.ERROR, 'Error saving duplicate contact number details:', error);
      }
    );
  }

  checkGroupProduct() {
    if (this.v_grp_product === 'Y') {
      this.saveGroupDetails();
    } else {
      this.saveNonGroupDetails();
    }
  }

  saveGroupDetails() {
    this.controlService.saveGroupDetails().subscribe(
      response => {
        this.logger.log(NgxLoggerLevel.INFO, 'Group details saved successfully.');
      },
      error => {
        this.logger.log(NgxLoggerLevel.ERROR, 'Error saving group details:', error);
      }
    );
  }

  saveNonGroupDetails() {
    this.controlService.saveNonGroupDetails().subscribe(
      response => {
        this.logger.log(NgxLoggerLevel.INFO, 'Non-group details saved successfully.');
      },
      error => {
        this.logger.log(NgxLoggerLevel.ERROR, 'Error saving non-group details:', error);
      }
    );
  }
}
