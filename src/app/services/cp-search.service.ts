import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CPSearchService {
  constructor(private http: HttpClient) {}

  updateOccupationInMasterCP(partnerType: string, occupationValue: string): Observable<any> {
    return this.http.post('/api/update-occupation', { partnerType, occupationValue });
  }

  fetchSearchResults(): Observable<any> {
    return this.http.get('/api/search-results');
  }

  updateNameFields(partnerType: string, firstName: string, middleName: string, lastName: string): void {
    if (partnerType === 'IP') {
      // Update the name fields with the correct values for 'IP'
    } else {
      // Do not update the name fields
    }
  }

  validateCheckboxes(imageCount: number, partnerId: string): void {
    if (imageCount === 0 && partnerId) {
      // Set the values of the Signature, Age Proof, and Address Proof checkboxes to 'NA'
    }
    // Prompt the user to check the policy details
    // Display an error message if any of the checkboxes are not selected
    // Allow the user to proceed if all checkboxes are selected
  }

  searchIndividuals(searchCriteria: any): Observable<any> {
    return this.http.get('/api/search-individuals', { params: searchCriteria });
  }

  savePersonalDetails(personalDetails: any): Observable<any> {
    return this.http.post('/api/save-personal-details', personalDetails);
  }

  setDocumentChecksToNA(partnerId: string): void {
    if (partnerId) {
      // Set the signature, age proof, and address proof checks to 'NA'
    }
  }

  displayErrorMessage(): void {
    // Display an error message if all required document checks are not marked as 'Y'
  }

  validateAdditionalProofCheck(partnerId: string, globalViewImageCount: number): void {
    if (globalViewImageCount === 0 && partnerId) {
      // Set the "Additional Proof Check" to 'NA'
    }
  }

  updateSpouseName(partnerType: string, spouseName: string): Observable<any> {
    return this.http.post('/api/update-spouse-name', { partnerType, spouseName });
  }

  updateRecordColor(partnerId: string, isSelected: boolean): void {
    if (partnerId) {
      // Update the record color based on the isSelected parameter
    }
  }

  saveAndApplyCPMerge(applicationNumber: string, partnerType: string, mergeOption: string): Observable<any> {
    return this.http.post('/api/cp-merge', { applicationNumber, partnerType, mergeOption });
  }

  getGlobalViewImageCount(): Observable<number> {
    return this.http.get<number>('/api/global-view-image-count');
  }

  getPartnerID(): Observable<string> {
    return this.http.get<string>('/api/partner-id');
  }

  resetForm(): void {
    // Clear the form fields: First Name, Last Name, Date of Birth, Gender, Policy Reference
  }

  deleteMergeRequests(applicationNumber: string, partnerType: string): Observable<any> {
    return this.http.delete('/api/delete-merge-requests', { params: { applicationNumber, partnerType } });
  }

  deleteMergingReasons(applicationNumber: string, partnerType: string): Observable<any> {
    return this.http.delete('/api/delete-merging-reasons', { params: { applicationNumber, partnerType } });
  }

  generateListNumber(): number {
    // Generate a list number using a predefined function
    return Math.floor(Math.random() * 1000);
  }

  getListNumberForDeduplication(): Observable<number> {
    return this.http.get<number>('/api/list-number-deduplication');
  }

  changeRecordColor(cp_4_partid: string, listNumber: number): void {
    // Change the color of the matching record based on the CP_4_PARTID and the list number
  }

  saveAndApply(cpData: any): Observable<any> {
    return this.http.post('/api/save-apply', cpData);
  }

  searchPartner(searchCriteria: any): Observable<any> {
    return this.http.get('/api/search-partner', { params: searchCriteria });
  }

  updatePartnerDetails(partnerDetails: any): Observable<any> {
    return this.http.post('/api/update-partner-details', partnerDetails);
  }
}
