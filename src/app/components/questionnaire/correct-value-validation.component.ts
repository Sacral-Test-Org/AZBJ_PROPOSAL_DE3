import { Component } from '@angular/core';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-correct-value-validation',
  templateUrl: './correct-value-validation.component.html',
  styleUrls: ['./correct-value-validation.component.css']
})
export class CorrectValueValidationComponent {
  correctValue: string = '';

  constructor(private questionnaireService: QuestionnaireService, private logger: LoggerService) {}

  validateCorrectValue(correctValue: string): void {
    if (!correctValue) {
      this.displayErrorMessage('Please enter a value for Correct Value.');
    } else if (correctValue === 'Y') {
      this.navigateToAnswerDescription();
    } else if (correctValue === 'N') {
      this.moveToNextRecord();
    } else {
      this.displayErrorMessage('The value should be either Y or N.');
    }
  }

  navigateBasedOnCorrectValue(correctValue: string): void {
    if (!correctValue) {
      this.displayErrorMessage('Please enter a value for Correct Value.');
    } else if (correctValue === 'Y') {
      this.navigateToAnswerDescription();
    } else if (correctValue === 'N') {
      this.moveToNextRecord();
    } else {
      this.displayErrorMessage('The value should be either Y or N.');
    }
  }

  private navigateToAnswerDescription(): void {
    this.questionnaireService.navigateToAnswerDescription();
  }

  private moveToNextRecord(): void {
    this.questionnaireService.moveToNextRecord();
  }

  private displayErrorMessage(message: string): void {
    this.questionnaireService.displayErrorMessage(message);
    this.logger.log(NgxLoggerLevel.ERROR, message);
  }
}