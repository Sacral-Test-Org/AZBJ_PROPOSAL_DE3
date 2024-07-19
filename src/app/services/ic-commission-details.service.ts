import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ICCommissionDetailsService {
  private apiUrl = 'http://your-backend-api-url/ic-commission-details';

  constructor(private http: HttpClient) {}

  getICCommissionDetails(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}