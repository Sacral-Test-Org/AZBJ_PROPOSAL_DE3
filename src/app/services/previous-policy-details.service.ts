import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviousPolicyDetailsService {
  constructor(private http: HttpClient) {}

  deletePreviousPolicyRecord(policyId: string): Observable<any> {
    return this.http.delete(`/api/previous-policy-details/${policyId}`);
  }

  getImageField(currentItem: string): Observable<any> {
    return this.http.get(`/api/previous-policy-details/image?item=${currentItem}`);
  }

  fetchIPTypes(): Observable<string[]> {
    return this.http.get<string[]>('/api/previous-policy-details/ip-types');
  }

  getPreviousPolicyDetails(): Observable<any> {
    return this.http.get('/api/previous-policy-details');
  }

  updatePreviousPolicyDetails(previousPolicyDetails: any): Observable<any> {
    return this.http.post('/api/previous-policy-details', previousPolicyDetails);
  }

  getImage(block: string, item: string, proposalType: string): Observable<any> {
    return this.http.get(`/api/previous-policy-details/image?block=${block}&item=${item}&proposalType=${proposalType}`);
  }

  fetchPreviousInsuranceCompanyInfo(currentBlock: string, currentItem: string): Observable<any> {
    return this.http.get(`/api/previous-policy-details/insurance-company-info?block=${currentBlock}&item=${currentItem}`);
  }

  updatePreviousInsuranceCompanyInfo(currentBlock: string, currentItem: string, newValue: string): Observable<any> {
    return this.http.post('/api/previous-policy-details/insurance-company-info', { block: currentBlock, item: currentItem, value: newValue });
  }

  promptUser(): Observable<boolean> {
    return new Observable(observer => {
      const userResponse = confirm('Do you wish to add more Policies?');
      observer.next(userResponse);
      observer.complete();
    });
  }

  updateStatus(status: string): Observable<any> {
    return this.http.post('/api/previous-policy-details/status', { status });
  }
}
