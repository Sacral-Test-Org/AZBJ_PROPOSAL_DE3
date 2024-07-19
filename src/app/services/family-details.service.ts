import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FamilyDetails } from '../models/family-details.model';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyDetailsService {
  private apiUrl = '/api/family-details';

  constructor(private http: HttpClient) {}

  getFamilyDetails(): Observable<FamilyDetails[]> {
    return this.http.get<FamilyDetails[]>(this.apiUrl);
  }

  saveFamilyDetails(familyDetails: FamilyDetails): Observable<FamilyDetails> {
    return this.http.post<FamilyDetails>(this.apiUrl, familyDetails);
  }

  navigateToNextField(): void {
    // Logic to navigate to the next relevant field
  }

  fetchImage(currentItem: string, currentBlock: string, proposalType: string): Observable<Image> {
    return this.http.get<Image>(`/api/images?item=${currentItem}&block=${currentBlock}&proposalType=${proposalType}`);
  }

  getAgeData(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/age`);
  }

  updateAgeData(age: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/age`, { age });
  }

  addFamilyMember(familyMember: FamilyDetails): Observable<FamilyDetails> {
    return this.http.post<FamilyDetails>(this.apiUrl, familyMember);
  }

  updateFamilyMember(familyMember: FamilyDetails): Observable<FamilyDetails> {
    return this.http.put<FamilyDetails>(this.apiUrl, familyMember);
  }

  deleteFamilyMember(familyMemberId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${familyMemberId}`);
  }

  getFamilyMembers(): Observable<FamilyDetails[]> {
    return this.http.get<FamilyDetails[]>(this.apiUrl);
  }

  deleteFamilyMemberById(familyMemberId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${familyMemberId}`);
  }

  getPreloadedData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/preloaded-data`);
  }

  fetchImageData(imageId: string): Observable<Image> {
    return this.http.get<Image>(`/api/images/${imageId}`);
  }

  fetchFieldData(selectedPolicyType: string): Observable<any> {
    return this.http.get<any>(`/api/fields?policyType=${selectedPolicyType}`);
  }

  fetchPreviousItem(currentItem: string, currentBlock: string): Observable<any> {
    return this.http.get<any>(`/api/previous-item?item=${currentItem}&block=${currentBlock}`);
  }

  fetchFamilyMemberDetails(currentBlock: string, currentItem: string): Observable<FamilyDetails> {
    return this.http.get<FamilyDetails>(`${this.apiUrl}/details?block=${currentBlock}&item=${currentItem}`);
  }

  fetchAgeFromImage(imageData: string): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/fetch-age`, { imageData });
  }

  updateAge(age: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/update-age`, { age });
  }

  saveInsuranceDetails(insuranceDetails: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/insurance-details`, insuranceDetails);
  }

  addMember(member: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add-member`, member);
  }

  deleteMember(memberId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete-member/${memberId}`);
  }

  updateGenderField(genderData: any): void {
    // Logic to handle gender field update
  }

  validateHealthStatus(healthStatus: string): string {
    return healthStatus === 'G' ? 'GOOD' : healthStatus;
  }

  getImage(context: any): Observable<Image> {
    return this.http.post<Image>(`${this.apiUrl}/get-image`, context);
  }

  fetchFamilyMemberImage(familyMemberId: number): Observable<Image> {
    return this.http.get<Image>(`${this.apiUrl}/family-member-image/${familyMemberId}`);
  }

  fetchStripNumber(currentBlock: string, currentItem: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/strip-number?block=${currentBlock}&item=${currentItem}`);
  }

  fetchImageDetails(stripNumber: number, proposalType: string): Observable<Image> {
    return this.http.get<Image>(`${this.apiUrl}/image-details?stripNumber=${stripNumber}&proposalType=${proposalType}`);
  }

  fetchFamilyDetails(context: any): Observable<FamilyDetails[]> {
    return this.http.post<FamilyDetails[]>(`${this.apiUrl}/fetch-details`, context);
  }

  determineContext(): any {
    // Logic to determine the current context
  }

  getImageData(currentItemId: string): Observable<Image> {
    return this.http.get<Image>(`/api/images/${currentItemId}`);
  }

  updateFamilyDetails(familyDetails: FamilyDetails): Observable<FamilyDetails> {
    return this.http.put<FamilyDetails>(this.apiUrl, familyDetails);
  }

  insertFamilyDetails(familyDetails: FamilyDetails): Observable<FamilyDetails> {
    return this.http.post<FamilyDetails>(this.apiUrl, familyDetails);
  }

  loadImage(imageFile: File): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/load-image`, imageFile);
  }

  handleError(error: any): void {
    // Logic to handle errors
  }
}