import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CP_Search_Result } from '../models/cp-search-result.model';
import { PolicyDetails } from '../models/policy-details.model';

@Injectable({
  providedIn: 'root'
})
export class CP_Search_Result_Service {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  updatePartnerInfo(partnerId: string, updatedInfo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-partner-info/${partnerId}`, updatedInfo);
  }

  getPolicyDetails(partnerId: string): Observable<PolicyDetails> {
    return this.http.get<PolicyDetails>(`${this.apiUrl}/policy-details/${partnerId}`);
  }

  searchCustomerProfiles(searchCriteria: any): Observable<CP_Search_Result[]> {
    return this.http.get<CP_Search_Result[]>(`${this.apiUrl}/search-customer-profiles`, { params: searchCriteria });
  }

  updateCustomerProfile(updateFields: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-customer-profile`, updateFields);
  }

  updateToChkField(): void {
    // This method will be called by the component to update the `to_chk` field for all records in the search results.
  }

  setMergeFlag(recordId: string, flag: string): void {
    // This method will be called by the component to set the merge flag for the given record ID.
  }

  displaySuccessMessage(message: string): void {
    // This method will be called by the component to display the provided success message to the user.
  }

  getSearchResults(): Observable<CP_Search_Result[]> {
    return this.http.get<CP_Search_Result[]>(`${this.apiUrl}/search-results`);
  }

  getPredefinedValues(): Observable<any> {
    return this.http.get(`${this.apiUrl}/predefined-values`);
  }

  updateBackend(updatedFields: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-backend`, updatedFields);
  }

  fetchPolicyDetails(partnerId: string): Observable<PolicyDetails> {
    return this.http.get<PolicyDetails>(`${this.apiUrl}/policy-details/${partnerId}`);
  }
}
