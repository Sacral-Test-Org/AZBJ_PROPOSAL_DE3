import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildCoversService {
  private apiUrl = 'http://your-backend-api-url';

  constructor(private http: HttpClient) {}

  createNewChildRecord(): Observable<any> {
    const newRecord = { /* your new record structure */ };
    return this.http.post(`${this.apiUrl}/child-covers`, newRecord);
  }

  deleteChildCovers(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/child-covers`);
  }

  azbj_calc_entry_age(dateOfBirth: string): number {
    const dob = new Date(dateOfBirth);
    const diffMs = Date.now() - dob.getTime();
    const ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
  }

  refreshData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/child-covers`);
  }
}
