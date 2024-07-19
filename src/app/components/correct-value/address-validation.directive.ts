import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appAddressValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AddressValidationDirective, multi: true }]
})
export class AddressValidationDirective implements Validator {
  constructor(private correctValueService: CorrectValueService) {}

  validate(control: AbstractControl) {
    if (!control.value) {
      return null;
    }

    return this.correctValueService.fetchAddressDetails(control.value).pipe(
      map((result: any) => {
        return result && result.length > 0 ? null : { invalidAddress: true };
      })
    );
  }
}
