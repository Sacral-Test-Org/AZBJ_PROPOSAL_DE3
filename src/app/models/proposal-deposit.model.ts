export class ProposalDeposit {
  value: string;
  predefinedValues: string[] = ['5', '8', 'SL'];

  constructor(value: string) {
    this.value = value;
  }
}