import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAgeValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AgeValidationDirective, multi: true }]
})
export class AgeValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null;
    }

    if (!/^[0-9]*$/.test(value)) {
      return { 'ageNumeric': true };
    }

    if (value.length > 3) {
      return { 'ageMaxLength': true };
    }

    const age = parseInt(value, 10);
    if (age < 0) {
      return { 'ageMinValue': true };
    }

    return null;
  }
}
