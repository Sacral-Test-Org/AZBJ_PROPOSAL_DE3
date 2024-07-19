import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questionnaire } from '../models/questionnaire.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  private apiUrl = 'http://localhost:8080/api/questionnaire';

  constructor(private http: HttpClient) {}

  getQuestionnaireDetails(): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(`${this.apiUrl}/details`);
  }

  updateStatus(questionId: number, subQuestion: number, correctValue: string): string {
    if (questionId === 6 && subQuestion === 0) {
      if (correctValue === 'Y') return 'Y';
      if (correctValue === 'N') return 'N';
      return 'I';
    }
    return '';
  }

  updateVIsalch(ANS1: string): string {
    if (ANS1 === 'Y') return 'Y';
    if (ANS1 === 'N') return 'N';
    return 'I';
  }

  checkFreezeQuestFlag(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/checkFreezeQuestFlag`);
  }

  callProcedureBasedOnGrpProduct(v_grp_product: string, gender: string, part_id: string, name: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/callProcedureBasedOnGrpProduct`, { v_grp_product, gender, part_id, name });
  }

  logOnlineActivities(application_no: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/logOnlineActivities/${application_no}`);
  }

  validateResponse(questionId: number, subQuestionId: number, response: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/validateResponse`, { questionId, subQuestionId, response });
  }

  loadQuestionnaireImage(imageId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/loadQuestionnaireImage/${imageId}`);
  }

  processResponse(questionId: number, subQuestionId: number, response: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/processResponse`, { questionId, subQuestionId, response });
  }

  getProposalTypeAndPages(applicationNumber: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getProposalTypeAndPages/${applicationNumber}`);
  }

  fetchImages(questionId: number, subQuestionId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/fetchImages/${questionId}/${subQuestionId}`);
  }

  validateCorrectValue(questionId: number, subQuestion: number, correctValue: string): string {
    if (questionId === 6 && subQuestion === 5 && !correctValue) return 'Husband Insurance cannot be null';
    if (questionId === 6 && subQuestion === 0) {
      if (correctValue === 'Y') return 'Y';
      if (correctValue === 'N') return 'N';
      return 'I';
    }
    if (questionId === 6 && subQuestion === 1) {
      if (correctValue === 'I') return 'Please check pregnancy status.';
      if (correctValue === 'N' && correctValue) return 'She is not pregnant... Invalid Entry.';
      if (correctValue === 'Y' && (correctValue < '1' || correctValue > '12')) return 'The Pregnancy months can be between 1 and 12.';
      if (correctValue === 'Y' && !correctValue) return 'Please enter the month of pregnancy.';
    }
    if (questionId === 4 && subQuestion === 2) {
      if (correctValue === 'Y') return 'Y';
      if (correctValue === 'N') return 'N';
      return 'I';
    }
    if (questionId === 4 && [3, 4, 5].includes(subQuestion)) {
      if (correctValue === 'I') return 'Please check Alcoholism Question.';
      if (correctValue === 'N' && correctValue) return 'The person does not drink alcohol... Invalid answer.';
      if (correctValue === 'Y' && !correctValue) return 'Please give in details of the drinking habits.';
    }
    return '';
  }

  validateResponses(responses: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/validateResponses`, responses);
  }

  validateAnswers(ans1: string, ans_de1: string, correct: number): string {
    if (![1, 2, 3, 4, 7, 8].includes(correct)) return 'Invalid value entered';
    if (correct === 3 && ans1 !== ans_de1) return 'DE1 and DE2 Values Are Not Matching';
    if ([1, 2].includes(correct) && ans1 === ans_de1) return 'Please select 3, 4, 7 or 8';
    if ([3, 2].includes(correct)) return ans1;
    if (correct === 1) return ans_de1;
    return '';
  }

  validateQuestionnaireResponse(questionId: number, subQuestionId: number, correctValue: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/validateQuestionnaireResponse`, { questionId, subQuestionId, correctValue });
  }

  getQuestions(): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(`${this.apiUrl}/getQuestions`);
  }

  getQuestionsByCriteria(partnerId: string, applicationNumber: string): Observable<Questionnaire[]> {
    return this.http.post<Questionnaire[]>(`${this.apiUrl}/getQuestionsByCriteria`, { partnerId, applicationNumber });
  }

  deleteQuestion(questionId: string, subQuestion: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteQuestion/${questionId}/${subQuestion}`);
  }

  getExcludedQuestions(productCode: string): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(`${this.apiUrl}/getExcludedQuestions/${productCode}`);
  }

  populateQuestions(): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(`${this.apiUrl}/populateQuestions`);
  }

  updateAnswer(questionId: number, answerType: string, correctValue: string, answerDescription: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/updateAnswer`, { questionId, answerType, correctValue, answerDescription });
  }

  navigateToQualityCheck(): void {
    // Logic to navigate to quality check questions section
  }

  setFocusToAnswerField(): void {
    // Logic to set focus to the answer field in quality check questions
  }

  fetchDependentQuestions(questionId: string, answer: string): Observable<Questionnaire[]> {
    return this.http.post<Questionnaire[]>(`${this.apiUrl}/fetchDependentQuestions`, { questionId, answer });
  }

  deleteDependentQuestions(questionId: string, answer: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/deleteDependentQuestions`, { questionId, answer });
  }

  submitITDeclaration(applicationNumber: string, insuredPersonNumber: string, contractID: string, mandatoryStatus: string, passportProof: string, nationality: string, ipNationality: string, propertyType: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/submitITDeclaration`, { applicationNumber, insuredPersonNumber, contractID, mandatoryStatus, passportProof, nationality, ipNationality, propertyType });
  }

  deleteExistingRecords(applicationNumber: string, proposalStatus: string, questionId: number, subQuestion: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/deleteExistingRecords`, { applicationNumber, proposalStatus, questionId, subQuestion });
  }

  insertNewRecords(records: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/insertNewRecords`, records);
  }

  checkSystemConstants(newPaymentMode: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/checkSystemConstants`, { newPaymentMode });
  }

  checkApplicationBypassDetails(applicationNo: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/checkApplicationBypassDetails`, { applicationNo });
  }

  checkCardCases(applicationNo: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/checkCardCases`, { applicationNo });
  }

  handleMonthlyRenewalFrequency(frequency: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/handleMonthlyRenewalFrequency`, { frequency });
  }
}
