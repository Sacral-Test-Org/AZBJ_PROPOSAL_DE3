import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appFundDetailsValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: FundDetailsValidationDirective, multi: true }]
})
export class FundDetailsValidationDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const apportionment = control.value;
    if (apportionment < 0 || apportionment > 100) {
      return { 'apportionmentInvalid': 'Apportionment percentage should be between 0 and 100' };
    }
    return null;
  }
}
