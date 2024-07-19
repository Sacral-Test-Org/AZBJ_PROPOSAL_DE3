import { Component } from '@angular/core';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-it-declaration',
  templateUrl: './it-declaration.component.html',
  styleUrls: ['./it-declaration.component.css']
})
export class ITDeclarationComponent {
  applicationNumber: string;
  insuredPersonNumber: string;
  contractID: string;
  mandatoryStatus: string;
  passportProof: string;
  nationality: string;
  ipNationality: string;
  propertyType: string;

  constructor(private questionnaireService: QuestionnaireService, private logger: NGXLogger) {}

  submitITDeclaration() {
    this.logger.debug('Submitting IT Declaration with the following parameters:', {
      applicationNumber: this.applicationNumber,
      insuredPersonNumber: this.insuredPersonNumber,
      contractID: this.contractID,
      mandatoryStatus: this.mandatoryStatus,
      passportProof: this.passportProof,
      nationality: this.nationality,
      ipNationality: this.ipNationality,
      propertyType: this.propertyType
    });

    this.questionnaireService.submitITDeclaration(
      this.applicationNumber,
      this.insuredPersonNumber,
      this.contractID,
      this.mandatoryStatus,
      this.passportProof,
      this.nationality,
      this.ipNationality,
      this.propertyType
    ).subscribe(
      response => {
        this.logger.info('IT Declaration submitted successfully', response);
      },
      error => {
        this.logger.error('Error submitting IT Declaration', error);
      }
    );
  }
}
