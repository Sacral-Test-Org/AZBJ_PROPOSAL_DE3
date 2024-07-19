import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolutionProduct } from '../models/solution-product.model';
import { RiderDetailsService } from './rider-details.service';

@Injectable({
  providedIn: 'root'
})
export class SolutionProductService {
  private apiUrl = 'http://localhost:8080/api/solution-product';

  constructor(private http: HttpClient, private riderDetailsService: RiderDetailsService) {}

  manageSolutionProductDetails(solutionProductDetails: SolutionProduct): Observable<SolutionProduct> {
    return this.http.post<SolutionProduct>(`${this.apiUrl}/manage`, solutionProductDetails);
  }

  fetchControlFlagStatus(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/control-flag-status`);
  }

  updatePremium(premium: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update-premium`, { premium });
  }

  fetchPackages(productCode: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/packages`, { params: { productCode } });
  }

  getPackageList(productCode: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/packages`, { params: { productCode } });
  }

  clearBlocks(): void {
    // Logic to clear the blocks AZBJ_FUND_DETAILS and AZBJ_SSO_FUND_DETAILS
  }

  fetchPayoutFrequency(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/payout-frequency`);
  }

  validateFSCCode(fscCode: string): boolean {
    const validFscCodes = ['2000003024', '7000005464', '7000002372', '7000000702'];
    return validFscCodes.includes(fscCode);
  }

  fetchSumAssured(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/sum-assured`);
  }

  setPremiumTerm(premiumTerm: number): void {
    this.riderDetailsService.setPremiumTerm(premiumTerm);
  }

  getRenewalPaymentMethods(frequency: string, fscCode: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/renewal-payment-methods`, { params: { frequency, fscCode } });
  }

  setBenefitTerm(benefitTerm: number): void {
    // Logic to store the benefit term value
  }

  getBenefitTerm(): number {
    // Logic to retrieve the stored benefit term value
    return 0; // Placeholder return value
  }

  navigateToRiderDetails(): void {
    // Logic to navigate to the rider details block
  }

  calculateAndUpdateRiderCoverAmounts(): void {
    // Logic to calculate and update rider cover amounts
  }

  fetchPaymentMethods(frequency: string, fscCode: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/payment-methods`, { params: { frequency, fscCode } });
  }
}