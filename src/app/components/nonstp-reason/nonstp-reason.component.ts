import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NonstpReasonService } from 'src/app/services/nonstp-reason.service';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-nonstp-reason',
  templateUrl: './nonstp-reason.component.html',
  styleUrls: ['./nonstp-reason.component.css']
})
export class NonstpReasonComponent {
  nonstpReason: string = '';

  constructor(
    private nonstpReasonService: NonstpReasonService,
    private questionnaireService: QuestionnaireService,
    private router: Router
  ) {}

  recheckButton() {
    this.nonstpReasonService.clearNonstpReason();
    this.router.navigate(['/quality-check-questions']);
    this.questionnaireService.setFocusToAnswerField();
    this.questionnaireService.setRecheckFlag('Y');
    this.questionnaireService.setStopFlag('Y');
  }

  onProceedButtonClick() {
    if (this.nonstpReason.trim() === '') {
      alert('Please enter the non-stop reason.');
      return;
    }

    this.nonstpReasonService.saveNonstpReason(this.nonstpReason).subscribe(
      () => {
        this.nonstpReasonService.updateScrutinyPartnerForm().subscribe(
          () => {
            this.router.navigate(['/previous-policy']);
          },
          (error) => {
            console.error('Error updating scrutiny partner form:', error);
          }
        );
      },
      (error) => {
        console.error('Error saving non-stop reason:', error);
      }
    );
  }
}
