import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { Questionnaire } from 'src/app/models/questionnaire.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questionnaire: Questionnaire[] = [];
  v_isalch: string = '';
  pregnancyStatus: string = '';
  alcoholConsumptionStatus: string = '';

  constructor(private questionnaireService: QuestionnaireService) {}

  ngOnInit(): void {
    this.questionnaireService.getProposalTypeAndPages().subscribe(data => {
      // Initialize component with data
    });
  }

  determineStripNumber(questionId: number, subQuestion: number): number {
    // Logic to determine strip number
    return 0; // Placeholder
  }

  loadQuestionnaireImage(stripNumber: number): void {
    // Logic to load questionnaire image
  }

  handleMouseClick(event: any): void {
    if (event.target.tagName !== 'BUTTON') {
      // Logic to navigate to clicked item
    }
  }

  onEnterAnswersClick(): void {
    // Logic for Enter Answers button
    const questionId = 6;
    const subQuestion = 0;
    const correctValue = 'Y'; // Placeholder
    if (questionId === 6 && subQuestion === 0) {
      if (correctValue === 'Y') {
        // Set status to 'Y'
      } else if (correctValue === 'N') {
        // Set status to 'N'
      } else {
        // Set status to 'I'
      }
    }
  }

  handleANS1Navigation(question_id: number, sub_question: number, ANS1: string): void {
    if (question_id === 4 && ![0, 1, 2, 6].includes(sub_question) && this.v_isalch !== 'Y') {
      // Move to next record
    }
    if (question_id === 4 && sub_question === 2) {
      if (ANS1 === 'Y') {
        this.v_isalch = 'Y';
      } else if (ANS1 === 'N') {
        this.v_isalch = 'N';
      } else {
        this.v_isalch = 'I';
      }
    }
  }

  populateQuestions(): void {
    this.questionnaireService.checkFreezeQuestFlag().subscribe(freezeFlag => {
      if (freezeFlag) {
        // Make fields editable and insertable
      }
      this.questionnaireService.callProcedureBasedOnGrpProduct().subscribe(() => {
        this.questionnaireService.logOnlineActivities().subscribe(onlineActivities => {
          if (onlineActivities) {
            // Make fields non-editable and non-insertable
          }
        });
      });
    });
  }

  validateResponse(questionId: number, subQuestionId: number, response: string): void {
    this.questionnaireService.validateResponse(questionId, subQuestionId, response).subscribe(errorMessage => {
      if (errorMessage) {
        // Display error message
      }
    });
  }

  validateAnswer(correct_value: string, ANS_DESC: string, question_id: number, sub_question: number): void {
    if (correct_value !== 'Y' && ANS_DESC && question_id !== 85 && ![68, 69].includes(sub_question)) {
      // Display error message
    }
  }

  navigateDown(currentRecord: number, proposalStatus: string, proposalType: string): void {
    if (currentRecord === this.questionnaire.length - 1 && proposalStatus === 'D2') {
      if (proposalType === 'N') {
        this.loadQuestionnaireImage(46);
      } else if (proposalType === 'O') {
        this.loadQuestionnaireImage(14);
      }
      // Move to proposal_sign_date field
    } else if (proposalStatus !== 'D2') {
      this.loadQuestionnaireImage(1);
      // Move to save field
    } else {
      // Move to next record and then to correct_value field
    }
  }

  navigateUp(currentRecord: number): void {
    // Move to previous record and then to correct_value field
  }

  navigateNextItem(currentRecord: number): void {
    if (currentRecord === this.questionnaire.length - 1) {
      this.loadQuestionnaireImage(1);
      // Move to save field and set next item to save field
    } else {
      // Move to next record, then to correct_value field, and set next item to correct_value field
    }
  }

  validateCorrectValue(questionId: number, subQuestion: number, correctValue: string): void {
    if (questionId === 6 && subQuestion === 5 && !correctValue) {
      // Display error message 'Husband Insurance cannot be null'
    } else if (questionId === 6 && subQuestion === 0) {
      if (correctValue === 'Y') {
        this.pregnancyStatus = 'Y';
      } else if (correctValue === 'N') {
        this.pregnancyStatus = 'N';
      } else {
        this.pregnancyStatus = 'I';
      }
    } else if (questionId === 6 && subQuestion === 1) {
      if (this.pregnancyStatus === 'I') {
        // Display error message 'Please check pregnancy status'
      } else if (this.pregnancyStatus === 'N' && correctValue) {
        // Display error message 'She is not pregnant... Invalid Entry'
      } else if (this.pregnancyStatus === 'Y' && (correctValue < '1' || correctValue > '12')) {
        // Display error message 'The Pregnancy months can be between 1 and 12'
      } else if (this.pregnancyStatus === 'Y' && !correctValue) {
        // Display error message 'Please enter the month of pregnancy'
      }
    } else if (questionId === 4 && subQuestion === 2) {
      if (correctValue === 'Y') {
        this.alcoholConsumptionStatus = 'Y';
      } else if (correctValue === 'N') {
        this.alcoholConsumptionStatus = 'N';
      } else {
        this.alcoholConsumptionStatus = 'I';
      }
    } else if (questionId === 4 && [3, 4, 5].includes(subQuestion)) {
      if (this.alcoholConsumptionStatus === 'I') {
        // Display error message 'Please check Alcoholism Question'
      } else if (this.alcoholConsumptionStatus === 'N' && correctValue) {
        // Display error message 'The person does not drink alcohol... Invalid answer'
      } else if (this.alcoholConsumptionStatus === 'Y' && !correctValue) {
        // Display error message 'Please give in details of the drinking habits'
      }
    }
  }

  validateResponses(questionId: number, subQuestionId: number, correctValue: string): void {
    if (questionId === 6 && subQuestionId === 5 && !correctValue) {
      // Display error message 'Husband Insurance cannot be null'
    } else if (questionId === 6 && subQuestionId === 0) {
      if (correctValue === 'Y') {
        this.pregnancyStatus = 'Y';
      } else if (correctValue === 'N') {
        this.pregnancyStatus = 'N';
      } else {
        this.pregnancyStatus = 'I';
      }
    } else if (questionId === 6 && subQuestionId === 1) {
      if (this.pregnancyStatus === 'I') {
        // Display error message 'Please check pregnancy status'
      } else if (this.pregnancyStatus === 'N' && correctValue) {
        // Display error message 'She is not pregnant... Invalid Entry'
      } else if (this.pregnancyStatus === 'Y' && (correctValue < '1' || correctValue > '12')) {
        // Display error message 'The Pregnancy months can be between 1 and 12'
      } else if (this.pregnancyStatus === 'Y' && !correctValue) {
        // Display error message 'Please enter the month of pregnancy'
      }
    } else if (questionId === 4 && subQuestionId === 2) {
      if (correctValue === 'Y') {
        this.alcoholConsumptionStatus = 'Y';
      } else if (correctValue === 'N') {
        this.alcoholConsumptionStatus = 'N';
      } else {
        this.alcoholConsumptionStatus = 'I';
      }
    } else if (questionId === 4 && [3, 4, 5].includes(subQuestionId)) {
      if (this.alcoholConsumptionStatus === 'I') {
        // Display error message 'Please check Alcoholism Question'
      } else if (this.alcoholConsumptionStatus === 'N' && correctValue) {
        // Display error message 'The person does not drink alcohol... Invalid answer'
      } else if (this.alcoholConsumptionStatus === 'Y' && !correctValue) {
        // Display error message 'Please give in details of the drinking habits'
      }
    }
  }

  handleITDeclarationClick(): void {
    // Logic for IT Declaration button click
    const applicationNumber = '123'; // Placeholder
    const insuredPersonNumber = '456'; // Placeholder
    const contractID = '789'; // Placeholder
    const mandatoryStatus = 'Y'; // Placeholder
    const passportProof = 'N'; // Placeholder
    const nationality = 'IN'; // Placeholder
    const ipNationality = 'IN'; // Placeholder
    const propertyType = 'Type1'; // Placeholder
    this.questionnaireService.submitITDeclaration(applicationNumber, insuredPersonNumber, contractID, mandatoryStatus, passportProof, nationality, ipNationality, propertyType).subscribe(() => {
      // Handle success
    }, error => {
      // Handle error
    });
  }

  saveQuestionnaireAnswers(): void {
    this.questionnaireService.deleteExistingRecords().subscribe(() => {
      this.questionnaireService.insertNewRecords().subscribe(() => {
        // Commit transaction and display success message
        // Hide questionnaire window and move focus to profession description field
      });
    });
  }

  handleRenewalPaymentModeChange(newPaymentMode: string): void {
    this.questionnaireService.checkSystemConstants(newPaymentMode).subscribe(() => {
      this.questionnaireService.checkApplicationBypassDetails().subscribe(() => {
        this.questionnaireService.checkCardCases().subscribe(() => {
          // Update UI based on results
        });
      });
    });
  }

  setRenewalFrequency(frequency: string): void {
    this.questionnaireService.populateQuestions(frequency).subscribe(() => {
      // Handle success
    }, error => {
      // Handle error and set renewal frequency back to monthly
    });
  }
}