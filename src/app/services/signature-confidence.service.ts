import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignatureConfidence } from '../models/signature-confidence.model';
import { SignatureConfidenceUrl } from '../models/signature-confidence-url.model';

@Injectable({
  providedIn: 'root'
})
export class SignatureConfidenceService {
  private apiUrl = '/api/signature-confidence';
  private urlGenerationApi = '/api/generate-secure-url';

  constructor(private http: HttpClient) {}

  getSignatureConfidenceDetails(applicationNumber: string): Observable<SignatureConfidence[]> {
    return this.http.get<SignatureConfidence[]>(`${this.apiUrl}/${applicationNumber}`);
  }

  generateSecureURL(applicationNumber: string): Observable<SignatureConfidenceUrl> {
    return this.http.get<SignatureConfidenceUrl>(`${this.urlGenerationApi}/${applicationNumber}`);
  }
}
