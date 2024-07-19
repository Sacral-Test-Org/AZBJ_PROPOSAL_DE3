import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SipControl } from '../models/sip-control.model';

@Injectable({
  providedIn: 'root'
})
export class SipControlService {
  private apiUrl = 'http://localhost:8080/api/sip-control';

  constructor(private http: HttpClient) {}

  getSipControlRecords(): Observable<SipControl[]> {
    return this.http.get<SipControl[]>(`${this.apiUrl}/records`);
  }

  saveSipControlRecord(sipControlRecord: SipControl): Observable<SipControl> {
    return this.http.post<SipControl>(`${this.apiUrl}/save`, sipControlRecord);
  }

  deriveSurrogateValue(calculatedAge: number, proofType: string, fieldValue: string): Observable<any> {
    const payload = { calculatedAge, proofType, fieldValue };
    return this.http.post<any>(`${this.apiUrl}/derive-surrogate`, payload);
  }
}