import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadRequest } from '../models/upload-request.model';

@Injectable({
  providedIn: 'root'
})
export class UploadRequestService {
  private apiUrl = '/api/upload-requests';

  constructor(private httpClient: HttpClient) {}

  getUploadRequestDetails(): Observable<UploadRequest[]> {
    return this.httpClient.get<UploadRequest[]>(this.apiUrl);
  }

  saveReceivedStatus(status: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/status`, { status });
  }
}