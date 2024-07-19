import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPhoneNumberValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneNumberValidationDirective, multi: true }]
})
export class PhoneNumberValidationDirective implements Validator {
  private readonly phoneNumberPattern = /^[A-Z]{2,5}[0-9]{6,10}$/;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setAttribute(this.el.nativeElement, 'placeholder', 'Please Enter Phone Number in format: [STD CODE][NUMBER]');
    this.renderer.setAttribute(this.el.nativeElement, 'title', 'Please Enter Phone Number in format: [STD CODE][NUMBER]');
  }

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && !this.phoneNumberPattern.test(value)) {
      return { 'phoneNumberInvalid': true };
    }
    return null;
  }
}