import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suspected-case',
  templateUrl: './suspected-case.component.html',
  styleUrls: ['./suspected-case.component.css']
})
export class SuspectedCaseComponent {
  constructor(private router: Router) {}

  navigateBasedOnAgeProofType(ageProofType: string): void {
    switch (ageProofType) {
      case 'PP':
        this.router.navigate(['/passport-details']);
        break;
      case 'DL':
        this.router.navigate(['/drivers-license-details']);
        break;
      case 'VI':
        this.router.navigate(['/voters-id-details']);
        break;
      default:
        this.router.navigate(['/suspected-case']);
        break;
    }
  }
}