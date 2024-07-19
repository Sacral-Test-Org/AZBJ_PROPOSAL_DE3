import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CP_SearchPHService } from 'src/app/services/cp-search-ph.service';

@Component({
  selector: 'app-age-proof-validation',
  templateUrl: './age-proof-validation.component.html',
  styleUrls: ['./age-proof-validation.component.css']
})
export class AgeProofValidationComponent {
  @Input() globalViewImageCount: number;
  @Input() partnerId: string;
  @Input() signatureCheck: string;
  @Input() ageProofCheck: string;
  @Input() addressProofCheck: string;
  @Output() navigateToPolicyDetails = new EventEmitter<void>();
  @Output() showError = new EventEmitter<string>();

  constructor(private cpSearchPHService: CP_SearchPHService) {}

  validateAgeProof() {
    if (this.globalViewImageCount === 0 && this.partnerId) {
      this.ageProofCheck = 'NA';
      this.navigateToPolicyDetails.emit();
      this.showError.emit('Please check the policy details at least once.');
    } else {
      this.checkAllProofs();
    }
  }

  checkAllProofs() {
    if (this.signatureCheck === 'Y' && this.ageProofCheck === 'Y' && this.addressProofCheck === 'Y') {
      // All checks are marked as 'Y', no further action required
    } else {
      this.showError.emit('Please select all required questions.');
    }
  }
}
