import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PolicyDetails } from '../models/policy-details.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyDetailsService {
  private apiUrl = '/api/policy-details';

  constructor(private http: HttpClient) {}

  getPolicyDetails(partnerId: string): Observable<PolicyDetails> {
    return this.http.get<PolicyDetails>(`${this.apiUrl}/${partnerId}`);
  }
}