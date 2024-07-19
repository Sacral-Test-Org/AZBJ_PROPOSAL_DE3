import { Component } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pan-approval',
  templateUrl: './pan-approval.component.html',
  styleUrls: ['./pan-approval.component.css']
})
export class PanApprovalComponent {
  ipPanIssuanceDate: string = '';
  phPanIssuanceDate: string = '';
  ageProof: string = '';
  ageProofId: string = '';
  panIssuanceDate: string = '';
  uwReason: string = '';
  supervisorComments: string = '';
  ipPanDateUnavailable: boolean = false;
  phPanDateUnavailable: boolean = false;
  errorMessage: string = '';

  constructor(private controlService: ControlService, private router: Router) {}

  handleSupervisorApproval() {
    if (!this.uwReason || !this.supervisorComments) {
      this.errorMessage = 'UW Reason and Supervisor Comments cannot be empty';
      return;
    }
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/g;
    if (specialCharPattern.test(this.uwReason) || specialCharPattern.test(this.supervisorComments)) {
      this.errorMessage = 'Special characters are not allowed in Reason or Comments!';
      return;
    }
    this.controlService.approvePanDetails({
      ipPanIssuanceDate: this.ipPanIssuanceDate,
      phPanIssuanceDate: this.phPanIssuanceDate,
      ageProof: this.ageProof,
      ageProofId: this.ageProofId,
      panIssuanceDate: this.panIssuanceDate,
      uwReason: this.uwReason,
      supervisorComments: this.supervisorComments
    }).subscribe(response => {
      // Handle response
    }, error => {
      this.errorMessage = 'Error in approval process';
    });
  }

  handleExit() {
    this.router.navigate(['/validation']);
  }

  onCheckboxChange(event: Event, type: string) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (type === 'ip') {
      this.ipPanDateUnavailable = isChecked;
      if (isChecked) {
        this.clearPanIssuanceDate('ip');
      }
    } else if (type === 'ph') {
      this.phPanDateUnavailable = isChecked;
      if (isChecked) {
        this.clearPanIssuanceDate('ph');
      }
    }
  }

  clearPanIssuanceDate(type: string) {
    if (type === 'ip') {
      this.ipPanIssuanceDate = '';
    } else if (type === 'ph') {
      this.phPanIssuanceDate = '';
    }
  }

  validatePanIssuanceDate(panIssuanceDate: string) {
    const currentDate = new Date();
    const enteredDate = new Date(panIssuanceDate);
    if (enteredDate > currentDate) {
      this.errorMessage = 'PAN Issuance Date should not be greater than the current date';
      return false;
    }
    this.errorMessage = '';
    return true;
  }

  onExit() {
    this.router.navigate(['/validation']);
  }
}