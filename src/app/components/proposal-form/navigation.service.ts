import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router, private http: HttpClient, private logger: NGXLogger) {}

  navigateToSection(section: string): void {
    switch (section) {
      case 'AZBJ_RIDER_DETAILS':
        this.router.navigate(['/rider-details']);
        break;
      case 'COVERS_GROUP':
        this.router.navigate(['/covers-group']);
        break;
      case 'UNIT_LINK':
        this.router.navigate(['/unit-link']);
        break;
      case 'BANK_DETAILS':
        this.router.navigate(['/bank-details']);
        break;
      default:
        this.logger.debug('Unknown section:', section);
    }
  }

  navigateToField(field: string): void {
    switch (field) {
      case 'COVER_TYPE':
        this.router.navigate(['/covers-group', { field: 'COVER_TYPE' }]);
        break;
      case 'PORTFOLIO_STRATEGY':
        this.router.navigate(['/unit-link', { field: 'PORTFOLIO_STRATEGY' }]);
        break;
      case 'CORRECT_FUNDNAME':
        this.router.navigate(['/fund-details1', { field: 'CORRECT_FUNDNAME' }]);
        break;
      case 'RESET':
        this.router.navigate(['/sso-fund-details', { field: 'RESET' }]);
        break;
      case 'PROPOSAL_SIGN_DATE':
        this.router.navigate(['/bank-details', { field: 'PROPOSAL_SIGN_DATE' }]);
        break;
      case 'BANK_ACCOUNT_NO':
        this.router.navigate(['/bank-details', { field: 'BANK_ACCOUNT_NO' }]);
        break;
      case 'PRODUCT_ID_PROD2':
        this.router.navigate(['/product-details', { field: 'PRODUCT_ID_PROD2' }]);
        break;
      case 'PROPOSAL_DEPOSIT':
        this.router.navigate(['/proposal-deposit', { field: 'PROPOSAL_DEPOSIT' }]);
        break;
      default:
        this.logger.debug('Unknown field:', field);
    }
  }
}
