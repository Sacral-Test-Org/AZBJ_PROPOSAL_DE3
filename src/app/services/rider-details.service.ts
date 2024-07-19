import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RiderDetails } from '../models/rider-details.model';

@Injectable({
  providedIn: 'root'
})
export class RiderDetailsService {
  private apiUrl = 'http://localhost:8080/api/rider-details';

  constructor(private http: HttpClient) {}

  getRiderDetails(): Observable<RiderDetails[]> {
    return this.http.get<RiderDetails[]>(`${this.apiUrl}`);
  }

  updateRiderDetails(riderDetails: RiderDetails): Observable<RiderDetails> {
    return this.http.put<RiderDetails>(`${this.apiUrl}/${riderDetails.id}`, riderDetails);
  }

  deleteRider(riderId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${riderId}`);
  }

  loadRiderCover1SAData(context: any): Observable<any> {
    // Logic to load data from an image file based on the provided context
    return this.http.get<any>(`${this.apiUrl}/loadRiderCover1SAData`, { params: context });
  }

  fetchRiderDetails(packageCode: string, productCode: string): Observable<RiderDetails[]> {
    return this.http.get<RiderDetails[]>(`${this.apiUrl}/fetch`, { params: { packageCode, productCode } });
  }

  deleteRiderDetails(riderId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${riderId}`);
  }

  getRiderCoverDetails(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cover-details`);
  }

  setPremiumTerm(premiumTerm: number): void {
    // Logic to set the premium term value
  }

  setBenefitTerm(benefitTerm: number): void {
    // Logic to store the benefit term value
  }

  getBenefitTerm(): Observable<number> {
    // Logic to retrieve the stored benefit term value
    return this.http.get<number>(`${this.apiUrl}/benefit-term`);
  }

  updateRiderSelection(riders: RiderDetails[]): void {
    // Logic to update the selection state of riders
  }

  updateTotalRiderInvest(sumAssuredValues: number[]): Observable<number> {
    // Logic to send the sum assured values to the back-end for calculating the total rider invest
    return this.http.post<number>(`${this.apiUrl}/total-rider-invest`, sumAssuredValues);
  }

  setTotalRiderInvestReadOnly(riderCoverCode: string): Observable<boolean> {
    // Logic to check if the Total Rider Invest field should be set to read-only
    return this.http.get<boolean>(`${this.apiUrl}/readonly`, { params: { riderCoverCode } });
  }
}