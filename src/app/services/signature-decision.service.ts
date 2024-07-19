import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignatureDecisionService {

  constructor() { }

  getDecisionOptions(): { value: string, label: string }[] {
    return [
      { value: '8', label: 'Approved' },
      { value: 'LA', label: 'Pending' },
      { value: 'No', label: 'Rejected' }
    ];
  }
}
