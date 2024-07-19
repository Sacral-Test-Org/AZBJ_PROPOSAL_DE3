import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  resultItem: any;
  resultType: string;
  formQuestion: string;

  constructor(private navigationService: NavigationService) {}

  onResultItemDoubleClick(resultItem: any): void {
    if (resultItem && (this.resultType === 'E' || this.resultType === 'W')) {
      if (this.formQuestion === 'BK_ALL_VALIDATIONS') {
        this.navigationService.navigateToFormQuestion('POPULATE');
      } else {
        this.navigationService.navigateToFormQuestion(this.formQuestion);
      }
    }
  }

  handleDoubleClick(): void {
    if (this.resultItem && (this.resultType === 'E' || this.resultType === 'W')) {
      if (this.formQuestion === 'BK_ALL_VALIDATIONS') {
        this.navigationService.navigateToItem('POPULATE');
      } else {
        this.navigationService.navigateToItem(this.formQuestion);
      }
    }
  }

  handleEnterKey(): void {
    if (this.resultItem && this.resultType === 'E') {
      if (this.formQuestion === 'BK_ALL_VALIDATIONS') {
        this.navigationService.navigateToItem('POPULATE');
      } else {
        this.navigationService.navigateToItem(this.formQuestion);
      }
    }
  }

  onExitButtonClick(): void {
    this.navigationService.navigateToFirstRecord();
  }

  displayPDFandImageWindows(resultField: any, resultType: string): void {
    if (resultField && resultType === 'E') {
      // Logic to display PDF and image windows
    } else {
      // Logic to display PDF and image windows
    }
  }
}
