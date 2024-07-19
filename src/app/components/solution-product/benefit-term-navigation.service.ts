import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class BenefitTermNavigationService {
  constructor(private router: Router, private http: HttpClient, private logger: NGXLogger) {}

  navigateToRiderDetails(benefitTerm: number): void {
    try {
      // Navigate to the rider details section
      this.router.navigate(['/rider-details'], { queryParams: { benefitTerm } });
      this.logger.info('Navigated to rider details with benefit term:', benefitTerm);
    } catch (error) {
      this.logger.error('Error navigating to rider details:', error);
    }
  }
}