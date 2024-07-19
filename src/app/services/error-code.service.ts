import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorCodeService {
  private errorCodes = [
    { code: 'ERR001', description: 'Invalid input' },
    { code: 'ERR002', description: 'Connection timeout' },
    { code: 'ERR003', description: 'Data not found' },
    // Add more error codes and descriptions as needed
  ];

  constructor() {}

  getErrorCodes() {
    return this.errorCodes;
  }

  getErrorDescription(code: string): string | undefined {
    const error = this.errorCodes.find(err => err.code === code);
    return error ? error.description : undefined;
  }
}
