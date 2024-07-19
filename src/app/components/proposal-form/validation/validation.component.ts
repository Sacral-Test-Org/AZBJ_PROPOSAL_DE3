import { Component, OnInit } from '@angular/core';
import { ProposalFormService } from '../../services/proposal-form.service';
import { NavigationService } from '../../services/navigation.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  constructor(
    private proposalFormService: ProposalFormService,
    private navigationService: NavigationService,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.displayValidationResults();
  }

  triggerValidation(): void {
    this.logger.info('Triggering validation screen');
    // Logic to execute the necessary trigger for the validation screen
  }

  displayValidationResults(): void {
    this.logger.info('Starting validation process');
    this.proposalFormService.validateProposalForm().subscribe(
      (response) => {
        this.logger.info('Validation results received', response);
        // Logic to display validation results
      },
      (error) => {
        this.logger.error('Error during validation', error);
        // Logic to handle validation errors
      }
    );
  }
}
