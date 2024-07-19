import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerificationDetails } from '../models/verification.model';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  private baseUrl = '/api/verification';

  constructor(private http: HttpClient) {}

  getRelatedDetails(verificationNumber: string): Observable<VerificationDetails> {
    return this.http.get<VerificationDetails>(`${this.baseUrl}/details/${verificationNumber}`);
  }

  checkRelatedRecords(verificationNumber: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/check/${verificationNumber}`);
  }
}