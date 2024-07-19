import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProposalFormService } from '../../services/proposal-form.service';
import { VerificationModel } from '../../models/verification.model';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  verificationDetails: VerificationModel;
  verificationForm: FormGroup;

  constructor(private proposalFormService: ProposalFormService) {}

  ngOnInit(): void {
    this.loadVerificationDetails();
  }

  loadVerificationDetails(): void {
    this.proposalFormService.getVerificationDetails().subscribe(
      (details: VerificationModel) => {
        this.verificationDetails = details;
      },
      (error) => {
        console.error('Error loading verification details', error);
      }
    );
  }

  verifyDocument(): void {
    if (this.verificationForm.valid) {
      this.proposalFormService.verifyDocument(this.verificationForm.value).subscribe(
        (response) => {
          console.log('Document verified successfully', response);
        },
        (error) => {
          console.error('Error verifying document', error);
        }
      );
    }
  }

  cancel(): void {
    this.verificationForm.reset();
  }

  populateRecord(verificationNumber: string): void {
    if (verificationNumber) {
      this.proposalFormService.getRelatedDetails(verificationNumber).subscribe(
        (details) => {
          // Populate the UI with related details
          console.log('Related details', details);
        },
        (error) => {
          console.error('Error fetching related details', error);
        }
      );
    }
  }

  deleteRecord(verificationNumber: string): void {
    if (verificationNumber) {
      this.proposalFormService.checkRelatedRecords(verificationNumber).subscribe(
        (hasRelatedRecords) => {
          if (hasRelatedRecords) {
            console.warn('Cannot delete record as related records exist');
          } else {
            // Proceed with deletion
            console.log('Record can be deleted');
          }
        },
        (error) => {
          console.error('Error checking related records', error);
        }
      );
    }
  }
}
