import { Component } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-voter-id-verification',
  templateUrl: './voter-id-verification.component.html',
  styleUrls: ['./voter-id-verification.component.css']
})
export class VoterIdVerificationComponent {
  constructor(
    private controlService: ControlService,
    private router: Router,
    private logger: NGXLogger
  ) {}

  verifyVoterId() {
    this.controlService.verifyVoterId().subscribe(
      (response) => {
        if (response.verified) {
          this.logger.info('Voter ID verified successfully.');
          const details = this.formatDetails(response.details);
          this.router.navigate(['/verification-form'], { queryParams: details });
        } else {
          this.logger.warn('Voter’s ID Card Details are not selected for IP/PH.');
          alert('Voter’s ID Card Details are not selected for IP/PH.');
        }
      },
      (error) => {
        this.logger.error('Error during Voter ID verification:', error);
      }
    );
  }

  private formatDetails(details: any) {
    return {
      fullNameIP: details.insuredPerson.fullName,
      fullNamePH: details.policyHolder.fullName,
      dobIP: details.insuredPerson.dob,
      dobPH: details.policyHolder.dob,
      addressIP: details.insuredPerson.address,
      addressPH: details.policyHolder.address,
      stateIP: details.insuredPerson.state,
      samePerson: details.insuredPerson.fullName === details.policyHolder.fullName
    };
  }
}
