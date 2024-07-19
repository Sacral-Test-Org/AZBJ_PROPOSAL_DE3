import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MembershipDetails } from '../models/membership-details.model';

@Injectable({
  providedIn: 'root'
})
export class MembershipDetailsService {
  private apiUrl = 'http://your-backend-api-url';

  constructor(private http: HttpClient) {}

  getMembershipDetails(applicationNumber: string, proposalType: string): Observable<MembershipDetails> {
    const url = `${this.apiUrl}/membership-details?applicationNumber=${applicationNumber}&proposalType=${proposalType}`;
    return this.http.get<MembershipDetails>(url);
  }

  populateMembershipDetails(membershipDetails: MembershipDetails): Observable<any> {
    const url = `${this.apiUrl}/populate-membership-details`;
    return this.http.post<any>(url, membershipDetails);
  }

  getMembershipSumAssured(currentItem: string, currentBlockContext: string): Observable<any> {
    const url = `${this.apiUrl}/membership-sum-assured?currentItem=${currentItem}&currentBlockContext=${currentBlockContext}`;
    return this.http.get<any>(url);
  }
}
