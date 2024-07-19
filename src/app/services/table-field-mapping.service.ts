import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableFieldMapping } from '../models/table-field-mapping.model';

@Injectable({
  providedIn: 'root'
})
export class TableFieldMappingService {
  constructor(private http: HttpClient) {}

  getTableFieldMappings(): Observable<TableFieldMapping[]> {
    return this.http.get<TableFieldMapping[]>('/api/table-field-mappings');
  }

  getReferralIDLOV(): Observable<any> {
    return this.http.get('/api/lov/referral-id');
  }

  getReferralNameLOV(): Observable<any> {
    return this.http.get('/api/lov/referral-name');
  }

  getBBUReasonLOV(): Observable<any> {
    return this.http.get('/api/lov/bbu-reason');
  }

  getReasons(): Observable<any> {
    return this.http.get('/api/reasons');
  }

  fetchReferralNameLOV(fscCode: string): Observable<any> {
    return this.http.get(`/api/lov/referral-name?fscCode=${fscCode}`);
  }

  fetchLOVData(groupType: string): Observable<any> {
    return this.http.get(`/api/lov/data?groupType=${groupType}`);
  }

  fetchImageDetails(proposalType: string, numberOfPages: number, formVersion: string, imagePath: string, fileName: string): Observable<any> {
    const suffix = this.getImageSuffix(proposalType, numberOfPages);
    const constructedFileName = `${imagePath}/${fileName}_${suffix}.TIF`;
    return this.http.get(`/api/image-details?fileName=${constructedFileName}&formVersion=${formVersion}`);
  }

  private getImageSuffix(proposalType: string, numberOfPages: number): string {
    if (proposalType === 'N') {
      return numberOfPages === 19 ? '12' : '25';
    } else if (proposalType === 'O') {
      return numberOfPages === 14 ? '6' : '11';
    }
    return '';
  }

  setICCode(icCode: string): void {
    // Logic to set IC_CODE field in the table field mapping
  }

  enableFields(): void {
    // Logic to enable specified fields (LEAD_SUB_CODE, SUB_NAME, REFERAL_ID, REFERAL_NAME, EMPLOYEE_ID)
  }
}