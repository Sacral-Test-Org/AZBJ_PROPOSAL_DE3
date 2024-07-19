import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CorrectValue } from '../models/correct-value.model';
import { State } from '../models/state.model';
import { SignatureConfidence } from '../models/signature-confidence.model';

@Injectable({
  providedIn: 'root'
})
export class CorrectValueService {
  constructor(private http: HttpClient) {}

  initiateScrutinyFailure(parameterList: any): Observable<any> {
    return this.http.post('/api/scrutiny-failure', parameterList);
  }

  fetchAgents(FSC_CODE: string): Observable<any> {
    return this.http.get(`/api/agents?FSC_CODE=${FSC_CODE}`);
  }

  fetchLOVData(): Observable<any> {
    return this.http.get('/api/lov-data');
  }

  fetchAgentInfo(fscCode: string): Observable<any> {
    return this.http.get(`/api/agent-info?fscCode=${fscCode}`);
  }

  validateDate(backdatedPolicyDate: string, currentDate: Date): Observable<any> {
    return this.http.post('/api/validate-date', { backdatedPolicyDate, currentDate });
  }

  calculateAge(dateOfBirth: Date, backdatedPolicyDate: Date): Observable<any> {
    return this.http.post('/api/calculate-age', { dateOfBirth, backdatedPolicyDate });
  }

  validatePan(ageProofID: string): Observable<any> {
    return this.http.post('/api/validate-pan', { ageProofID });
  }

  saveGenderData(gender: string): Observable<any> {
    return this.http.post('/api/save-gender', { gender });
  }

  getPinCodes(): Observable<any> {
    return this.http.get('/api/pin-codes');
  }

  validateTitleGenderMaritalStatus(title: string, gender: string, maritalStatus: string): string {
    if (title === 'MRS' && gender === 'F' && maritalStatus === 'S') {
      return 'Error: Invalid combination of title, gender, and marital status.';
    }
    if (title === 'MISS' && gender === 'F' && maritalStatus === 'M') {
      return 'Error: Invalid combination of title, gender, and marital status.';
    }
    return 'Success: Valid combination.';
  }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>('/api/states');
  }

  manageAgeProofField(): void {
    // Logic to manage the data and operations related to the 'IP Age Proof' field.
  }

  getCityDistrictList(country: string): Observable<any> {
    return this.http.get(`/api/cities-districts?country=${country}`);
  }

  saveResidenceProofType(proofType: string): Observable<any> {
    return this.http.post('/api/save-residence-proof', { proofType });
  }

  getResidenceProofType(): Observable<any> {
    return this.http.get('/api/get-residence-proof');
  }

  getPlacesByDistrict(district: string): Observable<any> {
    return this.http.get(`/api/places?district=${district}`);
  }

  fetchValidPinCodes(): Observable<any> {
    return this.http.get('/api/valid-pin-codes');
  }

  fetchValidAreaValues(postcode: string, state: string, district: string): Observable<any> {
    return this.http.get(`/api/valid-area-values?postcode=${postcode}&state=${state}&district=${district}`);
  }

  getLatestRequestStatus(applicationNo: string, addressType: string): Observable<any> {
    return this.http.get(`/api/latest-request-status?applicationNo=${applicationNo}&addressType=${addressType}`);
  }

  updatePanField(pan: string): Observable<any> {
    return this.http.post('/api/update-pan', { pan });
  }

  getProfessions(industryCode: string): Observable<any> {
    return this.http.get(`/api/professions?industryCode=${industryCode}`);
  }

  saveITAssesseeStatus(status: string): Observable<any> {
    return this.http.post('/api/save-it-assessee-status', { status });
  }

  saveDispatchMode(dispatchMode: string): Observable<any> {
    return this.http.post('/api/save-dispatch-mode', { dispatchMode });
  }

  getDispatchMode(): Observable<any> {
    return this.http.get('/api/get-dispatch-mode');
  }

  fetchIndustryValues(): Observable<any> {
    return this.http.get('/api/industry-values');
  }

  savePEPDetails(pepDetails: string): Observable<any> {
    return this.http.post('/api/save-pep-details', { pepDetails });
  }

  updatePEPDetails(pepDetails: string): Observable<any> {
    return this.http.post('/api/update-pep-details', { pepDetails });
  }

  fetchIncomeProofTypes(occupation: string): Observable<any> {
    return this.http.get(`/api/income-proof-types?occupation=${occupation}`);
  }

  fetchEmployerNames(): Observable<any> {
    return this.http.get('/api/employer-names');
  }

  clearFields(): void {
    // Logic to clear specific fields.
  }

  setRuralUrbanFlag(): void {
    // Logic to set the rural/urban flag based on partner type.
  }

  autoFillAadhaar(ageProofType: string, ageProofID: string): void {
    // Logic to auto-fill the Aadhaar field with the age proof ID.
  }

  queryArea(state: string, district: string, pincode: string, area: string): Observable<any> {
    return this.http.get(`/api/query-area?state=${state}&district=${district}&pincode=${pincode}&area=${area}`);
  }

  queryPlace(addressLine3: string, district: string): Observable<any> {
    return this.http.get(`/api/query-place?addressLine3=${addressLine3}&district=${district}`);
  }

  updateOccupationList(age: number): Observable<any> {
    return this.http.get(`/api/update-occupation-list?age=${age}`);
  }

  updateGender(gender: string): Observable<any> {
    return this.http.post('/api/update-gender', { gender });
  }

  saveAgeProofType(ageProofType: string): Observable<any> {
    return this.http.post('/api/save-age-proof-type', { ageProofType });
  }

  validatePAN(panID: string): Observable<any> {
    return this.http.post('/api/validate-pan', { panID });
  }

  validateAadhaar(aadhaarID: string): Observable<any> {
    return this.http.post('/api/validate-aadhaar', { aadhaarID });
  }

  getStateList(): Observable<any> {
    return this.http.get('/api/state-list');
  }

  fetchLanguages(): Observable<any> {
    return this.http.get('/api/languages');
  }

  saveSelectedLanguage(selectedLanguage: string): Observable<any> {
    return this.http.post('/api/languages', { selectedLanguage });
  }

  updateProofOfResidence(proofOfResidence: string): Observable<any> {
    return this.http.post('/api/update-proof-of-residence', { proofOfResidence });
  }

  fetchUniquePlaces(district: string): Observable<any> {
    return this.http.get(`/api/unique-places?district=${district}`);
  }

  fetchAreasAndPostalCodes(postalCode: string, state: string, district: string): Observable<any> {
    return this.http.get(`/api/areas-postal-codes?postalCode=${postalCode}&state=${state}&district=${district}`);
  }

  getCityDistrictValues(): Observable<any> {
    return this.http.get('/api/city-district-values');
  }

  fetchLatestRequestStatus(applicationNo: string, addressType: string): Observable<any> {
    return this.http.get(`/api/latest-request-status?applicationNo=${applicationNo}&addressType=${addressType}`);
  }

  fetchPinCodes(): Observable<any> {
    return this.http.get('/api/pin-codes');
  }

  fetchAreasByStateAndDistrict(state: string, district: string): Observable<any> {
    return this.http.get(`/api/areas?state=${state}&district=${district}`);
  }

  getAddressLine3Data(district: string): Observable<any> {
    return this.http.get(`/api/address-line3-data?district=${district}`);
  }

  getStatusMessage(applicationNo: string, addressType: string): Observable<any> {
    return this.http.get(`/api/status-message?applicationNo=${applicationNo}&addressType=${addressType}`);
  }

  validateMaritalStatus(maritalStatus: string, title: string, gender: string): Observable<any> {
    return this.http.post('/api/validate-marital-status', { maritalStatus, title, gender });
  }

  getProfessions(industryCode: string): Observable<any> {
    return this.http.get(`/api/professions?industryCode=${industryCode}`);
  }

  fetchValidIndustryValues(): Observable<any> {
    return this.http.get('/api/valid-industry-values');
  }

  validateIndustryDescription(industryDescription: string): Observable<any> {
    return this.http.post('/api/validate-industry-description', { industryDescription });
  }

  saveSelectedValue(selectedValue: string): Observable<any> {
    return this.http.post('/api/save-selected-value', { selectedValue });
  }

  validateJointLife(jointLifeValue: string, ip: string, ph: string): boolean {
    if (jointLifeValue === 'JL' && ip === ph) {
      return true;
    }
    return false;
  }

  saveLoanType(selectedLoanType: string): Observable<any> {
    return this.http.post('/api/save-loan-type', { selectedLoanType });
  }

  validatePortfolioStrategy(portfolioStrategy: string, frequency: string, productDefinition: string, productCode: string, packageCode: string): Observable<any> {
    return this.http.post('/api/validate-portfolio-strategy', { portfolioStrategy, frequency, productDefinition, productCode, packageCode });
  }

  incrementPhSignatureCount(): void {
    // Logic to increment the PH signature count by 1.
  }

  getBankDetails(ifscCode: string): Observable<any> {
    return this.http.get(`/api/bank-details?ifscCode=${ifscCode}`);
  }

  validateProductId(productId: string): Observable<any> {
    return this.http.post('/api/validate-product-id', { productId });
  }

  saveMoneyBackOption(value: string): Observable<any> {
    return this.http.post('/api/save-money-back-option', { value });
  }

  getMoneyBackOption(): Observable<any> {
    return this.http.get('/api/get-money-back-option');
  }

  getSignatureConfidenceDetails(applicationNumber: string): Observable<SignatureConfidence[]> {
    return this.http.get<SignatureConfidence[]>(`/api/signature-confidence/${applicationNumber}`);
  }

  validateMobileNumber(mobileNumber: string): boolean {
    const isNumeric = /^\d{10}$/.test(mobileNumber);
    return isNumeric;
  }

  validateGMI(gmiValue: number): boolean {
    return gmiValue !== null && gmiValue > 0;
  }

  calculateSumAssured(gmiValue: number): number {
    return gmiValue * 144;
  }

  validateGSTN(gstnNumber: string): boolean {
    const isValidLength = gstnNumber.length === 15;
    const hasSpecialChars = /[^a-zA-Z0-9]/.test(gstnNumber);
    return isValidLength && !hasSpecialChars;
  }

  fetchPreviousItem(currentItem: string, currentBlock: string, proposalType: string): Observable<any> {
    return this.http.get(`/api/previous-item?currentItem=${currentItem}&currentBlock=${currentBlock}&proposalType=${proposalType}`);
  }

  loadFieldData(currentItem: string, currentBlock: string, proposalType: string): Observable<any> {
    return this.http.get(`/api/load-field-data?currentItem=${currentItem}&currentBlock=${currentBlock}&proposalType=${proposalType}`);
  }

  validateAadhaar(aadhaarNumber: string, otherDetails: any): Observable<any> {
    return this.http.post('/api/validate-aadhaar', { aadhaarNumber, otherDetails });
  }

  validateSubIdCode(subIdCode: string): Observable<any> {
    return this.http.post('/api/validate-sub-id-code', { subIdCode });
  }

  fetchSurrogateIncomeProofList(): Observable<any> {
    return this.http.get('/api/surrogate-income-proof-list');
  }

  getFlagValue(): Observable<any> {
    return this.http.get('/api/flag-value');
  }

  getRateDetails(applicationNumber: string, topIndicator: string): Observable<any> {
    return this.http.get(`/api/rate-details?applicationNumber=${applicationNumber}&topIndicator=${topIndicator}`);
  }
}
