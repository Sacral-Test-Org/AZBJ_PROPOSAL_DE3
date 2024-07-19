export class RiderDetails {
  coverCode: string;
  coverDescription: string;
  sumAssured: number;
  benefitTerm: number;
  premiumTerm: number;
  interestRate: number;
  entryAge: number;
  totalRiderSumAssured: number;
  coverDescriptionDisplay: string;
  deleteCheckbox: boolean;
  riderId: string;
  deleteCheckFlag: boolean;
  predefinedValues: string[];
  totalRiderInvest: number;
  correctValueSumAssured: number;
  riderCoverCode: string;
  riderCoverAmount: number;

  constructor() {
    this.coverCode = '';
    this.coverDescription = '';
    this.sumAssured = 0;
    this.benefitTerm = 0;
    this.premiumTerm = 0;
    this.interestRate = 0;
    this.entryAge = 0;
    this.totalRiderSumAssured = 0;
    this.coverDescriptionDisplay = '';
    this.deleteCheckbox = false;
    this.riderId = '';
    this.deleteCheckFlag = false;
    this.predefinedValues = ['5', '8', '10', 'No'];
    this.totalRiderInvest = 0;
    this.correctValueSumAssured = 0;
    this.riderCoverCode = '';
    this.riderCoverAmount = 0;
  }

  getCoverCode(): string {
    return this.coverCode.toUpperCase();
  }

  setCoverCode(value: string): void {
    this.coverCode = value.toUpperCase();
  }

  getCoverDescription(): string {
    return this.coverDescription.toUpperCase();
  }

  setCoverDescription(value: string): void {
    this.coverDescription = value.toUpperCase();
  }

  getSumAssured(): number {
    return this.sumAssured;
  }

  setSumAssured(value: number): void {
    this.sumAssured = value;
  }

  getBenefitTerm(): number {
    return this.benefitTerm;
  }

  setBenefitTerm(value: number): void {
    this.benefitTerm = value;
  }

  getPremiumTerm(): number {
    return this.premiumTerm;
  }

  setPremiumTerm(value: number): void {
    this.premiumTerm = value;
  }

  getInterestRate(): number {
    return this.interestRate;
  }

  setInterestRate(value: number): void {
    this.interestRate = value;
  }

  getEntryAge(): number {
    return this.entryAge;
  }

  setEntryAge(value: number): void {
    this.entryAge = value;
  }

  getTotalRiderSumAssured(): number {
    return this.totalRiderSumAssured;
  }

  setTotalRiderSumAssured(value: number): void {
    this.totalRiderSumAssured = value;
  }

  getCoverDescriptionDisplay(): string {
    return this.coverDescriptionDisplay.toUpperCase();
  }

  setCoverDescriptionDisplay(value: string): void {
    this.coverDescriptionDisplay = value.toUpperCase();
  }

  getDeleteCheckbox(): boolean {
    return this.deleteCheckbox;
  }

  setDeleteCheckbox(value: boolean): void {
    this.deleteCheckbox = value;
  }

  getRiderId(): string {
    return this.riderId;
  }

  setRiderId(value: string): void {
    this.riderId = value;
  }

  getDeleteCheckFlag(): boolean {
    return this.deleteCheckFlag;
  }

  setDeleteCheckFlag(value: boolean): void {
    this.deleteCheckFlag = value;
  }

  getPredefinedValues(): string[] {
    return this.predefinedValues;
  }

  setPredefinedValues(values: string[]): void {
    this.predefinedValues = values;
  }

  getTotalRiderInvest(): number {
    return this.totalRiderInvest;
  }

  setTotalRiderInvest(value: number): void {
    this.totalRiderInvest = value;
  }

  getCorrectValueSumAssured(): number {
    return this.correctValueSumAssured;
  }

  setCorrectValueSumAssured(value: number): void {
    this.correctValueSumAssured = value;
  }

  getRiderCoverCode(): string {
    return this.riderCoverCode;
  }

  setRiderCoverCode(value: string): void {
    this.riderCoverCode = value;
  }

  getRiderCoverAmount(): number {
    return this.riderCoverAmount;
  }

  setRiderCoverAmount(value: number): void {
    this.riderCoverAmount = value;
  }
}
