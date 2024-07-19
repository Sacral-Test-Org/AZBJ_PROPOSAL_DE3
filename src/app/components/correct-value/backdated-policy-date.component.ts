import { Component } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backdated-policy-date',
  templateUrl: './backdated-policy-date.component.html',
  styleUrls: ['./backdated-policy-date.component.css']
})
export class BackdatedPolicyDateComponent {
  backdatedPolicyDate: string;
  currentDate: Date = new Date();
  dateOfBirth: Date;
  insuredPersonChecked: boolean = false;
  insuredPersonAge: number;
  policyholderAge: number;

  constructor(private correctValueService: CorrectValueService, private router: Router) {}

  validateBackdatedPolicyDate() {
    if (!this.correctValueService.validateDate(this.backdatedPolicyDate, 'dd/mm/yyyy')) {
      alert('Invalid date format. Please enter the date in dd/mm/yyyy format.');
      return;
    }

    const backdatedPolicyDateObj = this.correctValueService.parseDate(this.backdatedPolicyDate, 'dd/mm/yyyy');

    if (backdatedPolicyDateObj > this.currentDate) {
      alert('Backdated policy date cannot be greater than the current date.');
      return;
    }

    if (backdatedPolicyDateObj.getTime() !== this.currentDate.getTime()) {
      this.insuredPersonAge = this.correctValueService.calculateAge(this.dateOfBirth, backdatedPolicyDateObj);
    }

    if (!this.insuredPersonChecked) {
      this.policyholderAge = this.insuredPersonAge;
    }

    this.router.navigate(['next-item']);
  }
}
