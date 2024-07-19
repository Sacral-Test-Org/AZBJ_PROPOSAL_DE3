import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ControlModel } from '../models/control.model';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  constructor(private http: HttpClient) {}

  getImage(policyType: string): Observable<any> {
    return this.http.get(`/api/image?policyType=${policyType}`);
  }

  getReceiptDetails(): Observable<any> {
    return this.http.get('/api/receipts');
  }

  updatePolicyHolderDetails(policyHolderDetails: any): any {
    // Logic to update policy holder details
    return policyHolderDetails;
  }

  clearDetails(): any {
    // Logic to clear policy holder details
    return {};
  }

  approvePanDetails(panApprovalDetails: ControlModel): Observable<any> {
    return this.http.post('/api/approvePanDetails', panApprovalDetails);
  }

  validateEmployeeId(employeeId: string, fscCode: string): Observable<any> {
    return this.http.post('/api/validateEmployeeId', { employeeId, fscCode });
  }

  loadImage(): Observable<any> {
    return this.http.get('/api/loadImage');
  }

  updateMailingAddress(residenceAddress: any): any {
    // Logic to update mailing address
    return residenceAddress;
  }

  updateAssignmentFlag(flag: boolean): Observable<any> {
    return this.http.post('/api/control/updateAssignmentFlag', { flag });
  }

  checkAndCreateParamList(paramName: string, agentCode: string): any {
    // Logic to check and create parameter list
    return { paramName, agentCode };
  }

  openForm(formName: string, paramList: any): any {
    // Logic to open form
    return { formName, paramList };
  }

  getAadhaarDetails(customerProfileDetails: any): Observable<any> {
    return this.http.post('/api/retrieveAadhaarDetails', customerProfileDetails);
  }

  checkAndCreateParamListForRCU(): any {
    // Logic to check and create parameter list for RCU
    return {};
  }

  callFormForRCU(paramList: any): any {
    // Logic to call form for RCU
    return paramList;
  }

  saveAMLInformation(amlInfo: any): Observable<any> {
    return this.http.post('/api/aml', amlInfo);
  }

  getProofDescription(proofType: string): Observable<any> {
    return this.http.get('/api/aml/proof-description', { params: { proofType } });
  }

  getControlFlag(): Observable<any> {
    return this.http.get('/api/control-flag');
  }

  getEnrichmentDetails(applicationNo: string, callFormName: string, proposalNo: string | null, laName: string): Observable<any> {
    return this.http.post('/api/enrichment-details', { applicationNo, callFormName, proposalNo, laName });
  }

  validatePan(documentId: string): Observable<any> {
    return this.http.post('/api/validatePan', { documentId });
  }

  createParameterList(params: { [key: string]: any }): any {
    // Logic to create parameter list
    return params;
  }

  callForm(formName: string, params: { [key: string]: any }): any {
    // Logic to call form
    return { formName, params };
  }

  getScrutinyNumber(applicationNumber: string): Observable<any> {
    return this.http.get(`/api/control/scrutiny-number/${applicationNumber}`);
  }

  checkEiaDetails(applicationNumber: string): Observable<any> {
    return this.http.get(`/api/control/eia-details/${applicationNumber}`);
  }

  getLOVData(documentType: string, partnerType: string): Observable<any> {
    return this.http.get('/api/aml/lov-data', { params: { documentType, partnerType } });
  }

  getSearchResults(): Observable<any> {
    return this.http.get('/api/search-results');
  }

  fetchDuplicateContacts(): Observable<any> {
    return this.http.get('/api/duplicate-contacts');
  }

  createParameterListForDocumentDE(listName: string): any {
    // Logic to create parameter list for Document DE
    return listName;
  }

  addParameter(listName: string, paramName: string, paramValue: any): any {
    // Logic to add parameter
    return { listName, paramName, paramValue };
  }

  navigateToAMLBlock(): any {
    // Logic to navigate to AML block
    return {};
  }

  incrementCounter(): any {
    // Logic to increment counter
    return {};
  }

  callFinancialDocumentForm(paramList: any): any {
    // Logic to call financial document form
    return paramList;
  }

  getPassportDetails(): Observable<any> {
    return this.http.get('/api/passport-details');
  }

  openSameBankDetails(bankAccountNumber: string, ifscCode: string): any {
    // Logic to open same bank details
    return { bankAccountNumber, ifscCode };
  }

  getPartners(): any {
    // Logic to get partners
    return ['5', '8', '10', 'SL'];
  }

  storeSelectedPartner(selectedPartner: string): any {
    // Logic to store selected partner
    return selectedPartner;
  }

  getDrivingLicenseDetails(): Observable<any> {
    return this.http.get('/api/driving-license-details');
  }

  fetchDataBasedOnCheckbox(checkboxState: boolean): any {
    // Logic to fetch data based on checkbox
    return checkboxState;
  }

  updatePartnerType(partnerType: string): any {
    // Logic to update partner type
    return partnerType;
  }

  verifyVoterId(): Observable<any> {
    return this.http.get('/api/verifyVoterId');
  }

  verifyPanStatus(status: string): Observable<any> {
    return this.http.post('/api/verifyPanStatus', { status });
  }

  populateQuestions(partnerDetails: any, applicationNumber: string): Observable<any> {
    return this.http.post('/api/populateQuestions', { partnerDetails, applicationNumber });
  }

  validateBIDateService(biDate: string, proposalSignDate: string): boolean {
    // Logic to validate BI Date
    return biDate <= proposalSignDate;
  }

  populateCarequote(biNumber: string): any {
    // Logic to populate carequote
    return biNumber;
  }

  validatePanCard(panCardNumber: string): Observable<any> {
    return this.http.post('/api/validatePanCard', { panCardNumber });
  }

  saveDuplicateContactDetails(controlModel: ControlModel): Observable<any> {
    return this.http.post('/api/saveDuplicateContactDetails', controlModel);
  }

  validateAddress(addressDetails: any): boolean {
    // Logic to validate address
    return addressDetails.includes('LEH') || addressDetails.includes('JAMMU AND KASHMIR');
  }

  validateBIReceivedDate(biReceivedDate: string, biDate: string, instab: string, proptype: string, fscCode: string, productCode: string): string {
    if (biReceivedDate < biDate) {
      if (instab === 'INSTAB' && proptype === 'I' && fscCode !== '2000003060' && productCode !== 321) {
        return 'BI Received date should not be less than BI Date.';
      } else {
        return 'BI Received date should not be less than BI Date.';
      }
    }
    return '';
  }

  saveData(): any {
    // Logic to save data
    return {};
  }

  updateUIElements(selectedOption: string): any {
    if (selectedOption === 'CORRECT_NUMBER') {
      return { approveButton: true, supervisorCheck: true, saveButton: false };
    } else {
      return { approveButton: false, supervisorCheck: false, saveButton: true };
    }
  }

  validateAmount(amount: number): Observable<any> {
    return this.http.post('/api/validateAmount', { amount });
  }

  calculateNomineeAge(nomineeDOB: Date): Observable<any> {
    return this.http.post('/api/calculateNomineeAge', { nomineeDOB });
  }

  saveSelectedOption(selectedOption: string): Observable<any> {
    return this.http.post('/api/saveSelectedOption', { selectedOption });
  }

  getNomineeDetails(applicationNo: string): Observable<any> {
    return this.http.get(`/api/nominee-details/${applicationNo}`);
  }

  validateProductCode(productCode: string): Observable<any> {
    return this.http.get(`/api/validateProductCode/${productCode}`);
  }

  verifyEKYC(aadhaarNumber: string, moduleName: string): any {
    // Logic to verify E-KYC
    return { aadhaarNumber, moduleName };
  }

  checkSignatureDecision(applicationNumber: string, signatureDecision: string): Observable<any> {
    return this.http.post('/api/verifySignatureDecision', { applicationNumber, signatureDecision });
  }

  setSelectedOption(selectedOption: string): any {
    // Logic to set selected option
    return selectedOption;
  }

  getSelectedOption(): any {
    // Logic to get selected option
    return {};
  }

  validatePAN(panNumber: string): Observable<any> {
    return this.http.post('/api/validatePAN', { panNumber });
  }

  authenticateSupervisor(supervisorCredentials: any): boolean {
    // Logic to authenticate supervisor
    return true;
  }

  validatePolicySelection(): boolean {
    // Logic to validate policy selection
    return true;
  }

  fetchCRPFDefenceQuestions(userDetails: any): Observable<any> {
    return this.http.post('/api/getCRPFDefenceQuestions', userDetails);
  }

  fetchQuestions(userDetails: any): Observable<any> {
    return this.http.post('/api/fetchQuestions', userDetails);
  }

  verifyAadharCard(aadharNumber: string): Observable<any> {
    return this.http.post('/api/verifyAadharCard', { aadharNumber });
  }

  callFormWithParams(params: any): Observable<any> {
    return this.http.post('/api/callFormWithParams', params);
  }

  verifyAadhar(aadharNumber: string): Observable<any> {
    return this.http.post('/api/verifyAadhar', { aadharNumber });
  }

  saveRelationship(relationship: string): Observable<any> {
    return this.http.post('/api/saveRelationship', { relationship });
  }

  generateBIReport(): Observable<any> {
    return this.http.get('/api/generateBIReport');
  }

  getEmployerNameValues(): Observable<any> {
    return this.http.get('/api/fetchEmployerNameValues');
  }

  validateAadhaar(aadhaarDetails: any): Observable<any> {
    return this.http.post('/api/validateAadhaar', aadhaarDetails);
  }
}
