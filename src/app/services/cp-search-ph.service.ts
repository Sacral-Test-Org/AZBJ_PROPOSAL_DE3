import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CP_SearchPH } from '../models/cp-search-ph.model';

@Injectable({
  providedIn: 'root'
})
export class CP_SearchPHService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  updateFatherName(partnerType: string, correctedName: string): void {
    if (partnerType === 'PH') {
      // Logic to update father's name in the search result
      // Assuming we have a method to get the search result and update it
      const searchResult = this.getSearchResult();
      searchResult.fatherName = correctedName;
      this.updateSearchResult(searchResult);
    }
  }

  resetToChkField(option: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/resetToChkField`, { option });
  }

  updateOccupation(partnerType: string, occupation: string): void {
    if (partnerType === 'PH') {
      // Logic to update occupation in the search result
      const searchResult = this.getSearchResult();
      searchResult.occupation = occupation;
      this.updateSearchResult(searchResult);
    }
  }

  validateAgeProof(): void {
    const globalViewImageCount = this.getGlobalViewImageCount();
    const partnerId = this.getPartnerId();
    if (globalViewImageCount === 0 && partnerId !== null) {
      this.setAgeProofCheck('NA');
      this.navigateToPolicyDetails();
    }
  }

  checkAllProofs(): string {
    const signatureCheck = this.getSignatureCheck();
    const ageProofCheck = this.getAgeProofCheck();
    const addressProofCheck = this.getAddressProofCheck();
    if (signatureCheck !== 'Y' || ageProofCheck !== 'Y' || addressProofCheck !== 'Y') {
      return 'Error: All required checks must be marked as Y';
    }
    return '';
  }

  searchPartners(searchCriteria: CP_SearchPH): Observable<any> {
    return this.http.get(`${this.baseUrl}/searchPartners`, { params: searchCriteria });
  }

  clearFields(): Observable<any> {
    return this.http.post(`${this.baseUrl}/clearFields`, {});
  }

  resetForm(): Observable<any> {
    return this.http.post(`${this.baseUrl}/resetForm`, {});
  }

  // Placeholder methods for the assumed existing methods
  private getSearchResult(): any {
    // Logic to get the search result
    return {};
  }

  private updateSearchResult(searchResult: any): void {
    // Logic to update the search result
  }

  private getGlobalViewImageCount(): number {
    // Logic to get the global view image count
    return 0;
  }

  private getPartnerId(): string | null {
    // Logic to get the partner ID
    return null;
  }

  private setAgeProofCheck(value: string): void {
    // Logic to set the age proof check
  }

  private navigateToPolicyDetails(): void {
    // Logic to navigate to the policy details section
  }

  private getSignatureCheck(): string {
    // Logic to get the signature check
    return '';
  }

  private getAgeProofCheck(): string {
    // Logic to get the age proof check
    return '';
  }

  private getAddressProofCheck(): string {
    // Logic to get the address proof check
    return '';
  }
}
