import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {
  constructor() { }

  getNationalities() {
    return [
      { code: 'PH', description: 'Philippines' },
      { code: '5', description: 'Option 5' },
      { code: '8', description: 'Option 8' },
      { code: '10', description: 'Option 10' },
      { code: 'LA', description: 'Laos' },
      { code: 'SL', description: 'Sri Lanka' }
    ];
  }
}
