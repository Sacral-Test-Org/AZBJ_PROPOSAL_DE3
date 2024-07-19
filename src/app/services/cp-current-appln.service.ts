import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CPCurrentAppln } from '../models/cp-current-appln.model';

@Injectable({
  providedIn: 'root'
})
export class CPCurrentApplnService {
  private apiUrl = 'api/current-applicant-details';

  constructor(private http: HttpClient) {}

  getCurrentApplicantDetails(): Observable<CPCurrentAppln> {
    return this.http.get<CPCurrentAppln>(this.apiUrl);
  }
}