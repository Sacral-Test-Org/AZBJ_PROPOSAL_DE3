import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncompleteProposalDetailsService {
  private apiUrl = 'http://your-backend-api-url';

  constructor(private http: HttpClient) {}

  deleteIncompleteProposalDetails(recordId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/incomplete-proposal-details/${recordId}`);
  }

  navigateToIncompleteProposalDetails(): void {
    // Logic to navigate to the Incomplete Proposal Form Details section
  }

  createNewRecord(): void {
    // Logic to create a new record in the Incomplete Proposal Form Details section
  }

  saveIncompleteDetails(details: any): Observable<any> {
    const payload = { ...details, v_recheck: 'Y', v_stp_flg: 'Y' };
    return this.http.post(`${this.apiUrl}/incomplete-proposal-details/save`, payload);
  }

  validateFields(prop_form_field_scr: string, prop_comments: string, dtls_rcvd: string): boolean {
    return !!prop_form_field_scr && !!prop_comments && !!dtls_rcvd;
  }

  checkSaveFlag(incmp_prp_dtls_sv_flg: string): boolean {
    return incmp_prp_dtls_sv_flg === 'Y';
  }
}
