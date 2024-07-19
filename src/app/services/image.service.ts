import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageModel } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = '/api/images';

  constructor(private httpClient: HttpClient) {}

  getImagePath(proposalNumber: string, imageName: string): Observable<string> {
    return this.httpClient.get<string>(`${this.baseUrl}/path?proposalNumber=${proposalNumber}&imageName=${imageName}`);
  }

  downloadImage(imagePath: string): Observable<Blob> {
    return this.httpClient.get(`${this.baseUrl}/download?imagePath=${imagePath}`, { responseType: 'blob' });
  }

  getImage(currentItem: string, currentBlock: string): Observable<ImageModel> {
    return this.httpClient.get<ImageModel>(`${this.baseUrl}?item=${currentItem}&block=${currentBlock}`);
  }

  getSignature(ICCode: string, SubICCode: string): Observable<ImageModel> {
    return this.httpClient.get<ImageModel>(`${this.baseUrl}/signature?ICCode=${ICCode}&SubICCode=${SubICCode}`);
  }

  loadImageData(currentField: string): Observable<ImageModel> {
    return this.httpClient.get<ImageModel>(`${this.baseUrl}/load?field=${currentField}`);
  }
}
