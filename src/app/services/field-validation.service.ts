import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FieldValidationService {
  constructor(private http: HttpClient) {}

  validateCurrentItem(): boolean {
    // Perform all necessary validations on the current item.
    // Logic to validate the current item goes here.
    return true; // Return true if validation passes, otherwise false.
  }

  fetchEmployeeIdList(): Observable<any> {
    // Fetch the list of values for Employee ID from the back-end.
    return this.http.get('/api/employee-id-list');
  }

  validateNomineeRelationship(gender: string, nomineeRelationship: string): Observable<any> {
    // Call the validateNomineeRelationship method from FieldValidationController with gender and nomineeRelationship as parameters.
    return this.http.post('/api/validate-nominee-relationship', { gender, nomineeRelationship });
  }

  validateIPRelationField(ipRelation: string): boolean {
    // Check if 'IP Relation' field is empty.
    if (!ipRelation) {
      alert('Premium Paid by Relation field should not be blank');
      return false;
    }
    return true;
  }

  validateGSTNNumber(gstnNumber: string): boolean {
    // Validate the GSTN number for length (15 characters) and absence of special characters.
    const gstnRegex = /^[A-Z0-9]{15}$/;
    if (!gstnRegex.test(gstnNumber)) {
      if (gstnNumber.length !== 15) {
        alert('Please enter a valid GSTN Number');
      } else {
        alert('Special characters are not allowed for GSTN Number');
      }
      return false;
    }
    return true;
  }

  validatePhoneNumber(phoneNumber: string): boolean {
    // Validate the phone number format as [STD CODE][NUMBER].
    const phoneRegex = /^[0-9]{3,4}[0-9]{6,8}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert('Please enter a valid phone number in the format: [STD CODE][NUMBER]');
      return false;
    }
    return true;
  }
}
