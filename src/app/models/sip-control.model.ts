export class SipControl {
  fieldValue: string;
  surrogateProofType: string;
  proofDescription: string;
  documentDate: Date;
  derivedIncome: number;
  derivedTasaValue: number;
  insuredPersonDOB: Date;
  policyholderDOB: Date;
  policyDate: Date;
  calculatedEntryAge: number;

  constructor(
    fieldValue: string,
    surrogateProofType: string,
    proofDescription: string,
    documentDate: Date,
    derivedIncome: number,
    derivedTasaValue: number,
    insuredPersonDOB: Date,
    policyholderDOB: Date,
    policyDate: Date
  ) {
    this.fieldValue = fieldValue;
    this.surrogateProofType = surrogateProofType;
    this.proofDescription = proofDescription;
    this.documentDate = documentDate;
    this.derivedIncome = derivedIncome;
    this.derivedTasaValue = derivedTasaValue;
    this.insuredPersonDOB = insuredPersonDOB;
    this.policyholderDOB = policyholderDOB;
    this.policyDate = policyDate;
    this.calculatedEntryAge = this.calculateEntryAge();
  }

  private calculateEntryAge(): number {
    const insuredAge = this.getAge(this.insuredPersonDOB, this.policyDate);
    const policyholderAge = this.getAge(this.policyholderDOB, this.policyDate);
    return insuredAge < 18 ? policyholderAge : insuredAge;
  }

  private getAge(dob: Date, referenceDate: Date): number {
    const ageDifMs = referenceDate.getTime() - dob.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}