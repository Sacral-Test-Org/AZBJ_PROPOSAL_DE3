import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private predefinedValues: string[] = ['Value1', 'Value2', 'Value3'];

  constructor() {}

  fetchPredefinedValues(): string[] {
    return this.predefinedValues;
  }

  validateValue(value: string): boolean {
    return this.predefinedValues.includes(value);
  }
}
