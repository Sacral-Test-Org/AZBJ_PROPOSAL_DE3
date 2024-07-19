import { Component } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Control } from 'src/app/models/control.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pan-validation',
  templateUrl: './pan-validation.component.html',
  styleUrls: ['./pan-validation.component.css']
})
export class PanValidationComponent {
  panForm: FormGroup;
  validationMessage: string = '';
  control: Control;

  constructor(
    private controlService: ControlService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.panForm = this.fb.group({
      panCardNumber: ['', [Validators.required, Validators.pattern('^[A-Z]{3}[C,P,H,F,A,T,B,L,J,G][A-Z][0-9]{4}[A-Z]$')]]
    });
  }

  validatePanCard() {
    const panCardNumber = this.panForm.get('panCardNumber')?.value;
    if (panCardNumber) {
      this.controlService.validatePanCard(panCardNumber).subscribe(
        (response: any) => {
          if (response.isValid) {
            this.validationMessage = 'PAN is valid. Please check previous policy details.';
            this.control.ph_pan_verification = 'N';
            this.control.ph_pan_mid_name = response.middleName;
            this.control.ph_pan_fir_name = response.firstName;
            this.control.ph_pan_last_name = response.surname;
            this.control.ph_pan_dob = response.dateOfBirth;
            // Enable previous policy details field
          } else {
            this.validationMessage = 'PAN is invalid or not found.';
            this.control.ph_pan_verification = 'Y';
            // Disable previous policy details field
          }
        },
        (error: any) => {
          this.validationMessage = 'Error occurred while validating PAN.';
          this.control.ph_pan_verification = 'Y';
          // Disable previous policy details field
        }
      );
    }
  }

  validatePan() {
    const panNumber = this.panForm.get('panCardNumber')?.value;
    if (panNumber && panNumber.length === 10) {
      const panPattern = /^[A-Z]{3}[C,P,H,F,A,T,B,L,J,G][A-Z][0-9]{4}[A-Z]$/;
      if (panPattern.test(panNumber)) {
        this.validatePanCard();
      } else {
        this.validationMessage = 'Invalid PAN format.';
        this.panForm.get('panCardNumber')?.reset();
      }
    } else {
      this.validationMessage = 'PAN must be 10 characters long.';
      this.panForm.get('panCardNumber')?.reset();
    }
  }

  validatePAN() {
    const panNumber = this.panForm.get('panCardNumber')?.value;
    if (panNumber) {
      this.controlService.validatePAN(panNumber).subscribe(
        (response: any) => {
          if (response.isValid) {
            this.validationMessage = 'PAN is valid.';
            this.control.ph_pan_verification = 'N';
            this.control.ph_pan_mid_name = response.middleName;
            this.control.ph_pan_fir_name = response.firstName;
            this.control.ph_pan_last_name = response.surname;
            this.control.ph_pan_dob = response.dateOfBirth;
          } else {
            this.validationMessage = 'PAN is invalid.';
            this.control.ph_pan_verification = 'Y';
          }
        },
        (error: any) => {
          this.validationMessage = 'Error occurred while validating PAN.';
          this.control.ph_pan_verification = 'Y';
        }
      );
    }
  }
}