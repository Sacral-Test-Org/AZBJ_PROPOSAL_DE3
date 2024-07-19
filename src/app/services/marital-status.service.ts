import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaritalStatusService {

  validateTitleGenderMaritalStatus(title: string, gender: string, maritalStatus: string): string {
    if (title === 'MRS' && gender === 'F' && maritalStatus === 'S') {
      return 'Error: MRS cannot have a marital status of Single.';
    }
    if (title === 'MISS' && gender === 'F' && maritalStatus === 'M') {
      return 'Error: MISS cannot have a marital status of Married.';
    }
    return 'Success: Valid combination.';
  }

  checkMaritalStatus(maritalStatus: string): boolean {
    return maritalStatus === 'S';
  }

  validateMaritalStatus(maritalStatus: string, title: string, gender: string): string {
    return this.validateTitleGenderMaritalStatus(title, gender, maritalStatus);
  }

  checkMaritalStatusForSpouseField(maritalStatus: string): boolean {
    return maritalStatus === 'W' || maritalStatus === 'D';
  }
}
