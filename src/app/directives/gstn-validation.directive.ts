import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[gstnValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: GSTNValidationDirective, multi: true }]
})
export class GSTNValidationDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const gstn = control.value;
    if (!gstn) {
      return null;
    }

    const errors: ValidationErrors = {};

    // Check if GSTN Number is exactly 15 characters long
    if (gstn.length !== 15) {
      errors['length'] = 'Please enter a valid GSTN Number';
    }

    // Check if GSTN Number contains any special characters
    const specialCharPattern = /[^a-zA-Z0-9]/;
    if (specialCharPattern.test(gstn)) {
      errors['specialChar'] = 'Special characters are not allowed for GSTN Number';
    }

    // Convert GSTN Number to uppercase
    control.setValue(gstn.toUpperCase(), { emitEvent: false });

    return Object.keys(errors).length ? errors : null;
  }
}
