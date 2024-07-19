import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NonstpReasonService {
  private apiUrl = 'http://localhost:8080/api/nonstp-reason';

  constructor(private http: HttpClient) {}

  clearNonstpReason(): void {
    // Logic to clear the non-stop reason and set the recheck and stop flags to 'Y'
    this.setFlags();
  }

  setFlags(): void {
    // Logic to set the recheck and stop flags to 'Y'
    // Assuming we have some flags in the service to set
    this.recheckFlag = 'Y';
    this.stopFlag = 'Y';
  }

  saveNonstpReason(nonstpReason: string): Observable<any> {
    // Make an HTTP POST request to the back-end API to save the non-stop reason
    return this.http.post(`${this.apiUrl}/save`, { nonstpReason });
  }

  updateScrutinyPartnerForm(applicationNumber: string, previousPolicyDetails: any): Observable<any> {
    // Make an HTTP POST request to the back-end API to update the scrutiny partner form with the provided details
    return this.http.post(`${this.apiUrl}/update-scrutiny-partner-form`, { applicationNumber, previousPolicyDetails });
  }
}
