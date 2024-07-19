import { Component, OnInit } from '@angular/core';
import { SipControlService } from 'src/app/services/sip-control.service';
import { SipControl } from 'src/app/models/sip-control.model';

@Component({
  selector: 'app-sip-control',
  templateUrl: './sip-control.component.html',
  styleUrls: ['./sip-control.component.css']
})
export class SipControlComponent implements OnInit {
  sipControlRecords: SipControl[] = [];
  proofTypes: string[] = ['IP', '5', '8', '10', 'SL'];
  selectedProofType: string = '';

  constructor(private sipControlService: SipControlService) {}

  ngOnInit(): void {
    this.getSipControlRecords();
  }

  getSipControlRecords(): void {
    this.sipControlService.getSipControlRecords().subscribe(
      (records: SipControl[]) => {
        this.sipControlRecords = records;
      },
      (error) => {
        console.error('Error fetching SIP control records', error);
      }
    );
  }

  saveSipControlRecord(sipControlRecord: SipControl): void {
    this.sipControlService.saveSipControlRecord(sipControlRecord).subscribe(
      (response) => {
        console.log('SIP control record saved successfully', response);
      },
      (error) => {
        console.error('Error saving SIP control record', error);
      }
    );
  }

  calculateEntryAgeAndDeriveSurrogateValue(insuredPersonDOB: Date, policyholderDOB: Date, policyDate: Date): void {
    const insuredPersonAge = this.calculateAge(insuredPersonDOB, policyDate);
    const policyholderAge = this.calculateAge(policyholderDOB, policyDate);
    const entryAge = insuredPersonAge < 18 ? policyholderAge : insuredPersonAge;

    this.sipControlService.deriveSurrogateValue(entryAge, this.selectedProofType, 'fieldValue').subscribe(
      (surrogateValue) => {
        console.log('Derived Surrogate Value:', surrogateValue);
      },
      (error) => {
        console.error('Error deriving surrogate value', error);
      }
    );
  }

  calculateAge(dob: Date, policyDate: Date): number {
    const ageDifMs = policyDate.getTime() - dob.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  onProofTypeChange(event: any): void {
    this.selectedProofType = event.target.value;
  }
}
