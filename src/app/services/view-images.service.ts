import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ViewImagesModel } from '../models/view-images.model';

@Injectable({
  providedIn: 'root'
})
export class ViewImagesService {
  private apiUrl = `${environment.apiUrl}/view-images`;

  constructor(private http: HttpClient) {}

  getImages(policyId: string): Observable<ViewImagesModel[]> {
    return this.http.get<ViewImagesModel[]>(`${this.apiUrl}/images/${policyId}`);
  }

  viewImages(policyId: string, insuredCheck: boolean, policyType: string): Observable<string> {
    const url = `${this.apiUrl}/generate-url`;
    const params = { policyId, insuredCheck: insuredCheck.toString(), policyType };
    return this.http.get<string>(url, { params });
  }
}