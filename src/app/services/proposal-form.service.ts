import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProposalForm } from '../models/proposal-form.model';
import { SkipApplication } from '../models/skip-application.model';
import { RiderDetails } from '../models/rider-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProposalFormService {
  constructor(private http: HttpClient) {}

  fetchPreviousStripeImage(applicationNumber: string): Observable<any> {
    return this.http.get(`/api/previous-stripe-image/${applicationNumber}`);
  }

  Get_N_Set_Adjacent_strip_no(v_proposal_type: string, v_previous_stripe_no: string, direction: string): Observable<any> {
    return this.http.post('/api/adjacent-strip-no', { v_proposal_type, v_previous_stripe_no, direction });
  }

  getAdjacentStripNumber(proposalType: string, previousStripeNumber: string, direction: string): Observable<any> {
    return this.http.post('/api/adjacent-strip-number', { proposalType, previousStripeNumber, direction });
  }

  skipApplication(skipApplicationData: SkipApplication): Observable<any> {
    return this.http.post('/api/skip-application', skipApplicationData);
  }

  getImagePath(formName: string): Observable<string> {
    return this.http.get<string>(`/api/image-path/${formName}`);
  }

  getProposalDetails(): Observable<any> {
    return this.http.get('/api/proposal/details');
  }

  saveProposal(proposalData: any): Observable<any> {
    return this.http.post('/api/proposal/save', proposalData);
  }

  validateProposal(proposalData: any): Observable<any> {
    return this.http.post('/api/proposal/validate', proposalData);
  }

  updatePreviousPolicyDetails(previousPolicyDetails: any): Observable<any> {
    return this.http.post('/api/proposal-form/update-previous-policy-details', previousPolicyDetails);
  }

  fetchPreviousPolicyDetails(): Observable<any> {
    return this.http.get('/api/previous-policy-details');
  }

  fetchAndCopyImages(applicationNumber: string): Observable<any> {
    return this.http.get(`/api/fetch-and-copy-images/${applicationNumber}`);
  }

  getSummaryDetails(): Observable<any> {
    return this.http.get('/api/summary-details');
  }

  getPackageLOV(productId: string): Observable<any> {
    return this.http.get('/api/package-lov', { params: { productId } });
  }

  getProductLOV(): Observable<any> {
    return this.http.get('/api/product-lov');
  }

  fetchGroupCode(fsc_code: string): Observable<any> {
    return this.http.get(`/api/group-code/${fsc_code}`);
  }

  fetchAgentDetails(fsc_code: string): Observable<any> {
    return this.http.get(`/api/agent-details/${fsc_code}`);
  }

  getRiderDetails(): Observable<RiderDetails[]> {
    return this.http.get<RiderDetails[]>('/api/rider-details');
  }

  addRiderDetail(riderDetail: RiderDetails): Observable<RiderDetails> {
    return this.http.post<RiderDetails>('/api/rider-details', riderDetail);
  }

  deleteRiderDetail(riderDetailId: number): Observable<any> {
    return this.http.delete(`/api/rider-details/${riderDetailId}`);
  }

  populateRiderDetails(): Observable<RiderDetails[]> {
    return this.http.get<RiderDetails[]>('/api/rider-details/populate');
  }

  populateRecords(parameter: string): Observable<any> {
    return this.http.get(`/api/populate-records`, { params: { parameter } });
  }

  populateDE2Records(param: string): Observable<any> {
    return this.http.post('/api/populate-de2-records', { param });
  }

  validateForm(proposalForm: ProposalForm): Observable<any> {
    return this.http.post('/api/validate-form', proposalForm);
  }

  saveForm(proposalForm: ProposalForm): Observable<any> {
    return this.http.post('/api/save-form', proposalForm);
  }

  validateProposalForm(proposalForm: ProposalForm): Observable<any> {
    return this.http.post('/api/validate-proposal-form', proposalForm);
  }

  fetchImage(proposalType: string, currentBlock: string, currentItem: string): Observable<any> {
    return this.http.get(`/api/image`, { params: { proposalType, currentBlock, currentItem } });
  }

  getStripNumber(blockName: string, fieldName: string, proposalType: string): Observable<any> {
    return this.http.get(`/api/strip-number`, { params: { blockName, fieldName, proposalType } });
  }

  getFileName(stripNumber: string, proposalType: string): Observable<any> {
    return this.http.get(`/api/file-name`, { params: { stripNumber, proposalType } });
  }

  fetchImageData(currentBlock: string, currentItem: string, proposalType: string): Observable<any> {
    return this.http.get(`/api/image-data`, { params: { currentBlock, currentItem, proposalType } });
  }

  fetchMaxStripNumber(currentBlock: string, currentItem: string, proposalType: string): Observable<any> {
    return this.http.get(`/api/max-strip-number`, { params: { currentBlock, currentItem, proposalType } });
  }

  getPreviousPolicies(): Observable<any> {
    return this.http.get('/api/previous-policies');
  }

  addPolicy(policyDetails: any): Observable<any> {
    return this.http.post('/api/previous-policies', policyDetails);
  }

  updatePolicy(policyDetails: any): Observable<any> {
    return this.http.put(`/api/previous-policies/${policyDetails.id}`, policyDetails);
  }

  deletePolicy(policyId: string): Observable<any> {
    return this.http.delete(`/api/previous-policies/${policyId}`);
  }

  getFundName(currentItem: string): Observable<any> {
    return this.http.get(`/api/fund-name`, { params: { item: currentItem } });
  }

  getFundList(): Observable<any> {
    return this.http.get('/api/fund-list');
  }

  getProposalFormFields(): Observable<any> {
    return this.http.get('/api/proposal-form-fields');
  }

  saveProposalRecord(proposalRecord: any): Observable<any> {
    return this.http.post('/api/save-proposal-record', proposalRecord);
  }

  deleteProposalRecord(proposalRecordId: string): Observable<any> {
    return this.http.delete(`/api/delete-proposal-record/${proposalRecordId}`);
  }

  recheckProposalRecord(proposalRecordId: string): Observable<any> {
    return this.http.get(`/api/recheck-proposal-record/${proposalRecordId}`);
  }

  getProposalDetailsForSTP(): Observable<any> {
    return this.http.get('/api/proposal-details');
  }

  saveProposalDetails(proposalDetails: any): Observable<any> {
    return this.http.post('/api/proposal-details', proposalDetails);
  }

  getMasterPolicyNumber(applicationNumber: string): Observable<any> {
    return this.http.get(`/api/master-policy-number/${applicationNumber}`);
  }

  countSystemConstants(masterPolicyNumber: string): Observable<any> {
    return this.http.get(`/api/system-constants-count`, { params: { masterPolicyNumber } });
  }

  manageChildCovers(): Observable<any> {
    return this.http.get('/api/manage-child-covers');
  }

  fetchFundDetails(productCode: string, saDateRecd: string): Observable<any> {
    return this.http.get(`/api/fund-details`, { params: { productCode, saDateRecd } });
  }

  fetchProposalType(applicationNo: string): Observable<any> {
    return this.http.get(`/api/proposal-type/${applicationNo}`);
  }
}