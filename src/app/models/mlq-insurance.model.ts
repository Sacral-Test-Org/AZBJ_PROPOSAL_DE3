export class MLQInsurance {
  premium: number;
  sumAssured: number;
  companyName: string;

  constructor(premium: number, sumAssured: number, companyName: string) {
    this.premium = premium;
    this.sumAssured = sumAssured;
    this.companyName = companyName;
  }

  isComplete(): boolean {
    return this.premium !== null && this.sumAssured !== null && this.companyName !== null && this.companyName.trim() !== '';
  }
}