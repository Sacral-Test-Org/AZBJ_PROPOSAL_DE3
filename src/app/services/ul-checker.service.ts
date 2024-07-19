import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ULCheckerService {
  private baseUrl = 'http://localhost:8080/api/ul-checker';

  constructor(private http: HttpClient) {}

  fetchAddressDetails(): Observable<any> {
    // Logic to fetch the insured's address details from the backend if needed.
    return this.http.get(`${this.baseUrl}/address-details`);
  }

  updateApportionment(fundId: string, apportionmentPercentage: number): Observable<any> {
    // Logic to make an HTTP PUT request to the back-end API to update the apportionment percentage for the specified fund.
    return this.http.put(`${this.baseUrl}/apportionment`, { fundId, apportionmentPercentage });
  }

  deleteFund(fundId: string): Observable<any> {
    // Logic to make an HTTP DELETE request to the back-end API to delete the specified fund.
    return this.http.delete(`${this.baseUrl}/fund/${fundId}`);
  }

  getAvailableFunds(productId: string, startDate: string, endDate: string): Observable<any> {
    // Logic to make an HTTP GET request to the back-end API to fetch the list of available funds based on the specified criteria.
    return this.http.get(`${this.baseUrl}/available-funds`, {
      params: { productId, startDate, endDate }
    });
  }
}
