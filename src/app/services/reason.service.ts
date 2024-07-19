import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reason } from '../models/reason.model';

@Injectable({
  providedIn: 'root'
})
export class ReasonService {
  private apiUrl = 'http://your-api-url/reasons';
  private nonStpApiUrl = 'http://your-api-url/nonstp-reason';

  constructor(private http: HttpClient) {}

  getReasons(): Observable<Reason[]> {
    return this.http.get<Reason[]>(this.apiUrl);
  }

  addReason(reason: string): Observable<Reason> {
    return this.http.post<Reason>(this.apiUrl, { reason });
  }

  updateReason(reason: Reason): Observable<Reason> {
    return this.http.put<Reason>(`${this.apiUrl}/${reason.id}`, reason);
  }

  saveReasonComment(reasonComment: string): Observable<any> {
    return this.http.post<any>(this.nonStpApiUrl, { reasonComment });
  }
}
