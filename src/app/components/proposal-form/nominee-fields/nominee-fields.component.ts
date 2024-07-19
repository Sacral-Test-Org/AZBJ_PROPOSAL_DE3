import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProposalFormService } from 'src/app/services/proposal-form.service';
import { FieldValidationService } from 'src/app/services/field-validation.service';

@Component({
  selector: 'app-nominee-fields',
  templateUrl: './nominee-fields.component.html',
  styleUrls: ['./nominee-fields.component.css']
})
export class NomineeFieldsComponent implements OnInit {
  nomineeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private proposalFormService: ProposalFormService,
    private fieldValidationService: FieldValidationService
  ) {
    this.nomineeForm = this.fb.group({
      nomineeName: [''],
      nomineeBirthplace: [''],
      nomineeDob: [''],
      nomineeRelation: [''],
      assignFlag: [''],
      multiNomineeControl: ['']
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  handleProposalType(applicationNo: string): void {
    this.proposalFormService.fetchProposalType(applicationNo).subscribe(
      (proposalType: string) => {
        switch (proposalType) {
          case 'K':
          case 'PS':
          case 'H':
            this.disableNomineeFields();
            this.nomineeForm.get('nomineeName')?.setValue('Nomination not allowed for this policy');
            break;
          case 'E':
            this.disableNomineeFields();
            this.nomineeForm.get('nomineeName')?.setValue('Nomination not allowed for this policy');
            this.nomineeForm.get('assignFlag')?.setValue('Y');
            this.nomineeForm.get('assignFlag')?.disable();
            break;
          case 'I':
            this.nomineeForm.get('multiNomineeControl')?.enable();
            break;
          case 'MWP':
            this.nomineeForm.get('nomineeName')?.disable();
            break;
          default:
            this.enableNomineeFields();
            this.nomineeForm.get('assignFlag')?.enable();
            break;
        }
      },
      (error) => {
        console.error('Error fetching proposal type', error);
        this.enableNomineeFields(); // Default behavior
      }
    );
  }

  validateNomineeRelationship(gender: string, nomineeRelationship: string): void {
    const validationResult = this.fieldValidationService.validateNomineeRelationship(gender, nomineeRelationship);
    if (!validationResult.isValid) {
      alert(validationResult.errorMessage);
    } else {
      this.navigateToNextItem();
    }
  }

  private disableNomineeFields(): void {
    this.nomineeForm.get('nomineeName')?.disable();
    this.nomineeForm.get('nomineeBirthplace')?.disable();
    this.nomineeForm.get('nomineeDob')?.disable();
    this.nomineeForm.get('nomineeRelation')?.disable();
  }

  private enableNomineeFields(): void {
    this.nomineeForm.get('nomineeName')?.enable();
    this.nomineeForm.get('nomineeBirthplace')?.enable();
    this.nomineeForm.get('nomineeDob')?.enable();
    this.nomineeForm.get('nomineeRelation')?.enable();
  }

  private navigateToNextItem(): void {
    // Logic to navigate to the next item in the sequence
  }
}
