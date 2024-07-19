import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PolicyMember } from '../models/policy-member.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyMemberService {
  private apiUrl = 'http://localhost:8080/api/policy-member';

  constructor(private http: HttpClient) {}

  getPolicyMember(memberId: string): Observable<PolicyMember> {
    return this.http.get<PolicyMember>(`${this.apiUrl}/${memberId}`);
  }

  updatePolicyMember(policyMember: PolicyMember): Observable<PolicyMember> {
    return this.http.put<PolicyMember>(this.apiUrl, policyMember);
  }

  validateDOB(dateOfBirth: string): boolean {
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dobRegex.test(dateOfBirth);
  }

  assignCoverageDetails(coverCode: string, sumAssured: number, age: number): Observable<any> {
    const url = `${this.apiUrl}/assign-coverage`;
    return this.http.post(url, { coverCode, sumAssured, age });
  }

  updateCoverCode(selectedRelationshipType: string): Observable<any> {
    const url = `${this.apiUrl}/update-cover-code`;
    return this.http.post(url, { selectedRelationshipType });
  }

  manageSpouseDetails(spouseDetails: any): Observable<any> {
    const url = `${this.apiUrl}/manage-spouse-details`;
    return this.http.post(url, spouseDetails);
  }

  deleteMemberById(memberId: number): Observable<any> {
    const url = `${this.apiUrl}/${memberId}`;
    return this.http.delete(url);
  }

  updateAgeProofID(ageProofID: string): Observable<any> {
    const url = `${this.apiUrl}/update-age-proof-id`;
    return this.http.post(url, { ageProofID });
  }

  navigateToLastRecord(): void {
    // Logic to navigate to the last record in the policy member list
  }

  createNewRecord(): void {
    // Logic to create a new member record and set focus to the member name field
  }
}
