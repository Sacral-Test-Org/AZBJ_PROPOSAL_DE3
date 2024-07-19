import { Component, OnInit } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { CorrectValue } from 'src/app/models/correct-value.model';

@Component({
  selector: 'app-pin-code-validation',
  templateUrl: './pin-code-validation.component.html',
  styleUrls: ['./pin-code-validation.component.css']
})
export class PinCodeValidationComponent implements OnInit {
  validPinCodes: CorrectValue[] = [];
  countryName: string = 'INDIA';

  constructor(private correctValueService: CorrectValueService) {}

  ngOnInit(): void {}

  onPinCodeFieldNavigate(): void {
    if (this.countryName === 'INDIA') {
      this.correctValueService.fetchValidPinCodes().subscribe((data: CorrectValue[]) => {
        this.validPinCodes = data;
      });
    }
  }

  onPinCodeFieldDoubleClick(): void {
    if (this.countryName === 'INDIA') {
      this.correctValueService.fetchValidPinCodes().subscribe((data: CorrectValue[]) => {
        this.validPinCodes = data;
      });
    }
  }

  validatePinCode(pinCode: string): boolean {
    return this.validPinCodes.some((value) => value.pincode === pinCode);
  }
}
