import { Component } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-sub-id-code-validation',
  templateUrl: './sub-id-code-validation.component.html',
  styleUrls: ['./sub-id-code-validation.component.css']
})
export class SubIdCodeValidationComponent {
  subIdForm: FormGroup;
  validationMessage: string = '';
  agentFullName: string = '';
  channelList: any[] = [];

  constructor(
    private fb: FormBuilder,
    private correctValueService: CorrectValueService,
    private logger: NGXLogger
  ) {
    this.subIdForm = this.fb.group({
      subIdCode: ['', Validators.required],
      fscCode: ['', Validators.required],
      applnNo: ['', Validators.required]
    });
  }

  validateSubIdCode() {
    const subIdCode = this.subIdForm.get('subIdCode')?.value;
    const fscCode = this.subIdForm.get('fscCode')?.value;
    const applnNo = this.subIdForm.get('applnNo')?.value;

    if (subIdCode) {
      this.correctValueService.validateSubIdCode(subIdCode, fscCode, applnNo).subscribe(
        (response: any) => {
          if (response.isValid) {
            this.agentFullName = response.agentFullName;
            this.channelList = response.channelList;
            this.validationMessage = 'Sub Id Code is valid.';
            this.highlightField('green');
          } else {
            this.validationMessage = 'Invalid sub id code';
            this.highlightField('red');
          }
        },
        (error: any) => {
          this.logger.error('Error validating Sub Id Code', error);
          this.validationMessage = 'Error validating Sub Id Code';
          this.highlightField('red');
        }
      );
    }
  }

  highlightField(color: string) {
    const subIdCodeField = document.getElementById('subIdCodeField');
    if (subIdCodeField) {
      subIdCodeField.style.borderColor = color;
    }
  }
}
