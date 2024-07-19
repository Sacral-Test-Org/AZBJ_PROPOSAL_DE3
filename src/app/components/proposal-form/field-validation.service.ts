import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldValidationService {

  constructor() { }

  validateField(field: any): boolean {
    // Logic to validate the specified field based on the input parameter.
    if (!field) {
      return false;
    }

    // Add specific validation logic here
    switch (field.name) {
      case 'COVER_TYPE':
        return this.validateCoverType(field.value);
      case 'PORTFOLIO_STRATEGY':
        return this.validatePortfolioStrategy(field.value);
      case 'CORRECT_FUNDNAME':
        return this.validateCorrectFundName(field.value);
      case 'RESET':
        return this.validateReset(field.value);
      case 'PROPOSAL_SIGN_DATE':
        return this.validateProposalSignDate(field.value);
      case 'BANK_ACCOUNT_NO':
        return this.validateBankAccountNo(field.value);
      case 'SAFE_DISTRICT_FLAG':
        return this.validateSafeDistrictFlag(field.value);
      case 'SUSPECTED_CASE':
        return this.validateSuspectedCase(field.value);
      case 'LOAN_NUMBER':
        return this.validateLoanNumber(field.value);
      case 'PRODUCT_ID_PROD2':
        return this.validateProductIdProd2(field.value);
      case 'PROPOSAL_DEPOSIT':
        return this.validateProposalDeposit(field.value);
      default:
        return true;
    }
  }

  private validateCoverType(value: any): boolean {
    // Add validation logic for COVER_TYPE
    return value !== null && value !== undefined;
  }

  private validatePortfolioStrategy(value: any): boolean {
    // Add validation logic for PORTFOLIO_STRATEGY
    return value !== null && value !== undefined;
  }

  private validateCorrectFundName(value: any): boolean {
    // Add validation logic for CORRECT_FUNDNAME
    return value !== null && value !== undefined;
  }

  private validateReset(value: any): boolean {
    // Add validation logic for RESET
    return value !== null && value !== undefined;
  }

  private validateProposalSignDate(value: any): boolean {
    // Add validation logic for PROPOSAL_SIGN_DATE
    return value !== null && value !== undefined;
  }

  private validateBankAccountNo(value: any): boolean {
    // Add validation logic for BANK_ACCOUNT_NO
    return value !== null && value !== undefined;
  }

  private validateSafeDistrictFlag(value: any): boolean {
    // Add validation logic for SAFE_DISTRICT_FLAG
    return value !== null && value !== undefined;
  }

  private validateSuspectedCase(value: any): boolean {
    // Add validation logic for SUSPECTED_CASE
    return value !== null && value !== undefined;
  }

  private validateLoanNumber(value: any): boolean {
    // Add validation logic for LOAN_NUMBER
    return value !== null && value !== undefined;
  }

  private validateProductIdProd2(value: any): boolean {
    // Add validation logic for PRODUCT_ID_PROD2
    return value !== null && value !== undefined;
  }

  private validateProposalDeposit(value: any): boolean {
    // Add validation logic for PROPOSAL_DEPOSIT
    return value !== null && value !== undefined;
  }
}
