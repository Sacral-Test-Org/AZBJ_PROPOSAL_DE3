import { Component, OnInit } from '@angular/core';
import { ControlService } from '../../services/control.service';
import { PassportDetails } from '../../models/control.model';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-passport-details',
  templateUrl: './passport-details.component.html',
  styleUrls: ['./passport-details.component.css']
})
export class PassportDetailsComponent implements OnInit {
  passportDetailsIP: PassportDetails;
  passportDetailsPH: PassportDetails;
  warningMessage: string;

  constructor(private controlService: ControlService, private router: Router, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.getPassportDetails();
  }

  getPassportDetails(): void {
    this.controlService.getPassportDetails().subscribe(
      (data: { ip: PassportDetails; ph: PassportDetails }) => {
        this.passportDetailsIP = data.ip;
        this.passportDetailsPH = data.ph;
        this.checkPassportDetails();
      },
      (error) => {
        this.logger.error('Error retrieving passport details', error);
        this.warningMessage = 'Error retrieving passport details';
      }
    );
  }

  checkPassportDetails(): void {
    if (!this.passportDetailsIP && !this.passportDetailsPH) {
      this.warningMessage = 'Passport details are not selected for either Insured Person or Policyholder.';
      return;
    }

    if (this.passportDetailsIP.ageProofType === 'PP' || this.passportDetailsPH.ageProofType === 'PP') {
      this.navigateToAMLSection();
    } else {
      this.warningMessage = 'Passport details are not selected for either Insured Person or Policyholder.';
    }
  }

  navigateToAMLSection(): void {
    this.router.navigate(['/aml']);
  }
}
