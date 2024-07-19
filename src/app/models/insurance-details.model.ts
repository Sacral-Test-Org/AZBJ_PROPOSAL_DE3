export class InsuranceDetails {
  relationship: string;
  companyName: string;
  sumAssured: number;
  premium: number;

  constructor(relationship: string, companyName: string, sumAssured: number, premium: number) {
    this.relationship = relationship;
    this.companyName = companyName;
    this.sumAssured = sumAssured;
    this.premium = premium;
  }

  setRelationship(relationship: string): void {
    this.relationship = relationship;
  }

  setCompanyName(companyName: string): void {
    if (companyName.length > 100) {
      throw new Error('Company name cannot exceed 100 characters');
    }
    this.companyName = companyName;
  }

  setSumAssured(sumAssured: number): void {
    if (isNaN(sumAssured)) {
      throw new Error('Sum assured must be a number');
    }
    this.sumAssured = sumAssured;
  }

  setPremium(premium: number): void {
    if (isNaN(premium)) {
      throw new Error('Premium must be a number');
    }
    this.premium = premium;
  }

  getRelationship(): string {
    return this.relationship;
  }

  getCompanyName(): string {
    return this.companyName;
  }

  getSumAssured(): number {
    return this.sumAssured;
  }

  getPremium(): number {
    return this.premium;
  }
}