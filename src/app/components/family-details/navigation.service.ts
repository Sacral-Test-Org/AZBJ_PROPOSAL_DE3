import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private apiUrl = 'http://localhost:8080/api/images';

  constructor(private http: HttpClient) {}

  fetchImage(proposalType: string, numberOfPages: number): Observable<Image> {
    const url = `${this.apiUrl}?proposalType=${proposalType}&numberOfPages=${numberOfPages}`;
    return this.http.get<Image>(url);
  }

  getHelp(): string {
    return 'Please fill out all required fields. For more assistance, contact support.';
  }
}
