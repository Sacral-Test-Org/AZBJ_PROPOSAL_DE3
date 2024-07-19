import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CpSearchService } from 'src/app/services/cp-search.service';
import { CpSearchModel } from 'src/app/models/cp-search.model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-additional-proof-check-validation',
  templateUrl: './additional-proof-check-validation.component.html',
  styleUrls: ['./additional-proof-check-validation.component.css']
})
export class AdditionalProofCheckValidationComponent implements OnInit {
  constructor(
    private cpSearchService: CpSearchService,
    private router: Router,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.validateAdditionalProof();
  }

  validateAdditionalProof(): void {
    this.cpSearchService.getGlobalViewImageCount().subscribe(globalViewImageCount => {
      this.cpSearchService.getPartnerID().subscribe(partnerID => {
        if (globalViewImageCount === 0 && partnerID) {
          this.cpSearchService.setAdditionalProofCheck('NA');
          this.router.navigate(['/policy-details']);
          alert('Please check the policy details at least once.');
        } else {
          const signatureCheck = this.cpSearchService.getSignatureCheck();
          const ageProofCheck = this.cpSearchService.getAgeProofCheck();
          const additionalProofCheck = this.cpSearchService.getAdditionalProofCheck();

          if (signatureCheck === 'Y' && ageProofCheck === 'Y' && additionalProofCheck === 'Y') {
            this.logger.info('All checks are set to Y. No further action required.');
          } else {
            alert('Please select all required questions.');
          }
        }
      });
    });
  }
}
