import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsentInfoService {
  constructor() {}

  getConsentOptions() {
    return [
      { label: 'Option 1', value: '5' },
      { label: 'Option 2', value: '8' },
      { label: 'Option 3', value: '10' },
      { label: 'Option 4', value: 'SL' }
    ];
  }
}