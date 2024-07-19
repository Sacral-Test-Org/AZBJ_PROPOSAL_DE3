import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanApprovalService {
  private apiUrl = '/api/pan-details';

  constructor(private http: HttpClient) {}

  callApprovalAPI(approvalData: any): Observable<any> {
    return this.http.post('/api/approval', approvalData);
  }

  getPanDetails(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  updatePanDetails(panDetails: any): Observable<any> {
    return this.http.put(this.apiUrl, panDetails);
  }
}
