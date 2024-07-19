import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partner } from '../models/partner.model';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  private predefinedPartners: string[] = ['Partner A', 'Partner B', 'Partner C'];

  constructor(private http: HttpClient) {}

  getPredefinedPartners(): string[] {
    return this.predefinedPartners;
  }

  getPartnerDetails(): Observable<Partner[]> {
    return this.http.get<Partner[]>('api/partner-details');
  }

  validateMerge(): Observable<any> {
    return this.http.post<any>('api/partner-details/validate-merge', {});
  }

  mergePartners(partners: Partner[]): Observable<any> {
    return this.http.post<any>('api/partner-details/merge', { partners });
  }

  deleteRecords(applicationNo: string, partnerType: string): Observable<any> {
    return this.http.delete<any>(`api/partner-details/delete/${applicationNo}/${partnerType}`);
  }

  getPartnerDetailsById(partnerId: string): Observable<Partner> {
    return this.http.get<Partner>(`api/partner-details/${partnerId}`);
  }
}
