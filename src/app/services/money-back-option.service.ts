import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneyBackOptionService {
  constructor() { }

  getMoneyBackOptions(): string[] {
    return ['5', '8', '10', 'Self', 'Policyholder', 'Other'];
  }
}
