import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appPartnerType]'
})
export class PartnerTypeDirective implements OnChanges {
  @Input() partnerType: string;
  @Input() formGroup: FormGroup;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.partnerType) {
      this.updateFieldStates();
    }
  }

  private updateFieldStates(): void {
    const fieldsToToggle = [
      'name', 'middleName', 'dateOfBirth', 'title', 'gender', 'birthplace',
      'ageProof', 'ageProofId', 'maritalStatus', 'fathersName', 'height', 'weight', 'weightChange'
    ];

    if (this.partnerType === 'I') {
      fieldsToToggle.forEach(field => {
        this.setFieldState(field, true);
      });
      this.clearFields(['name', 'middleName', 'dateOfBirth']);
    } else {
      fieldsToToggle.forEach(field => {
        this.setFieldState(field, false);
      });
    }
  }

  private setFieldState(fieldName: string, isDisabled: boolean): void {
    const control = this.formGroup.get(fieldName);
    if (control) {
      if (isDisabled) {
        control.disable();
      } else {
        control.enable();
      }
    }
  }

  private clearFields(fields: string[]): void {
    fields.forEach(field => {
      const control = this.formGroup.get(field);
      if (control) {
        control.setValue('');
      }
    });
  }
}
