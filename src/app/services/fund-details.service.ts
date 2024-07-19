import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FundDetails } from '../models/fund-details.model';

@Injectable({
  providedIn: 'root'
})
export class FundDetailsService {
  private baseUrl = '/api/fund-details';

  constructor(private http: HttpClient) {}

  getApportionmentPercentages(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/apportionment-percentages`);
  }

  performActionsBasedOnTotal(totalPercentage: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/perform-actions`, { totalPercentage });
  }

  deleteFundById(fundId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${fundId}`);
  }

  getFunds(): Observable<FundDetails[]> {
    return this.http.get<FundDetails[]>(this.baseUrl);
  }

  updateFund(fundId: string, apportionmentPercentage: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${fundId}`, { apportionmentPercentage });
  }

  deleteFund(fundId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${fundId}`);
  }

  fetchAvailableFunds(productCode: string, saDateRecd: string): Observable<FundDetails[]> {
    return this.http.get<FundDetails[]>(`${this.baseUrl}/available-funds`, {
      params: { productCode, saDateRecd }
    });
  }

  validateApportionment(percentage: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/validate-apportionment`, { percentage });
  }

  deleteFundRecord(recordId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/record/${recordId}`);
  }

  fetchImageData(currentBlock: string, currentItem: string, proposalType: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/image-data`, {
      params: { currentBlock, currentItem, proposalType }
    });
  }

  validateCorrectValue(correctValue: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/validate-correct-value`, { correctValue });
  }

  updateFundDetails(fundDetails: FundDetails): Observable<any> {
    return this.http.put<any>(this.baseUrl, fundDetails);
  }

  resetFundDetails(): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/reset`, {});
  }

  navigateToNextItem(): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/navigate-next`, {});
  }

  fetchFundNames(productCode: string, coverCode: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/fund-names`, {
      params: { productCode, coverCode }
    });
  }

  deleteRecords(): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete-records`);
  }

  getFundLOV(productCode: string, coverCode: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/fund-lov`, {
      params: { productCode, coverCode }
    });
  }

  fetchFundDetails(productCode: string, dateRange: string): Observable<FundDetails[]> {
    return this.http.get<FundDetails[]>(`${this.baseUrl}/details`, {
      params: { productCode, dateRange }
    });
  }

  addFundDetail(fundID: string, apportionmentPercentage: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/add`, { fundID, apportionmentPercentage });
  }

  updateFundDetail(fundID: string, apportionmentPercentage: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/update`, { fundID, apportionmentPercentage });
  }

  deleteFundDetail(fundID: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${fundID}`);
  }

  clearFields(): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/clear-fields`, {});
  }

  navigateToFirstRecord(): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/navigate-first`, {});
  }

  deleteFundRecords(): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete-fund-records`);
  }

  getSSOFundDetails(productCode: string, dateRange: string): Observable<FundDetails[]> {
    return this.http.get<FundDetails[]>(`${this.baseUrl}/sso-fund-details`, {
      params: { productCode, dateRange }
    });
  }

  deleteSSOFundRecord(recordId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/sso-fund/${recordId}`);
  }

  manageSolutionProductDetails(solutionProductDetails: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/solution-product`, solutionProductDetails);
  }

  getFundList(): Observable<FundDetails[]> {
    return this.http.get<FundDetails[]>(`${this.baseUrl}/fund-list`);
  }

  saveApportionment(fundId: string, percentage: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/save-apportionment`, { fundId, percentage });
  }

  validatePercentage(percentage: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/validate-percentage`, { percentage });
  }

  calculateTotalPercentage(percentages: number[]): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/calculate-total`, { percentages });
  }

  handleNavigation(totalPercentage: number, productCode: number, productDefinition: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/handle-navigation`, { totalPercentage, productCode, productDefinition });
  }
}