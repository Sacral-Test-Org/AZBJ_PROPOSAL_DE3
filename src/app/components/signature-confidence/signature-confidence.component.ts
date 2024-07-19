import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignatureConfidenceService } from 'src/app/services/signature-confidence.service';

@Component({
  selector: 'app-signature-confidence',
  templateUrl: './signature-confidence.component.html',
  styleUrls: ['./signature-confidence.component.css']
})
export class SignatureConfidenceComponent implements OnInit {
  documentName: string = '';
  signatureConfidence: number = 0;

  constructor(
    private router: Router,
    private signatureConfidenceService: SignatureConfidenceService
  ) {}

  ngOnInit(): void {
    this.getSignatureConfidenceDetails();
  }

  getSignatureConfidenceDetails(): void {
    const applicationNumber = 'some-application-number'; // Replace with actual application number
    this.signatureConfidenceService.getSignatureConfidenceDetails(applicationNumber)
      .subscribe(details => {
        this.documentName = details.documentName;
        this.signatureConfidence = details.signatureConfidence;
      });
  }

  onExit(): void {
    this.router.navigate(['/correct-value']);
  }

  onViewMasterSignature(): void {
    this.signatureConfidenceService.generateSecureURL('some-application-number') // Replace with actual application number
      .subscribe(url => {
        if (url) {
          window.open(url, '_blank');
        }
      });
  }

  clearData(): void {
    this.documentName = '';
    this.signatureConfidence = 0;
  }
}