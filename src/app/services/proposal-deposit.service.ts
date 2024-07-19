import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProposalDepositService {
  private predefinedValues: string[] = ['5', '8', 'SL'];

  constructor() {}

  validateDepositValue(value: string): boolean {
    if (this.predefinedValues.includes(value)) {
      return true;
    }
    return this.validateCustomValue(value);
  }

  private validateCustomValue(value: string): boolean {
    // Custom validation logic for user-entered values
    // For simplicity, let's assume any non-empty string is valid
    return value.trim().length > 0;
  }
}
