export class MoneyBackOption {
  static readonly values: string[] = ['5', '8', '10', 'Self', 'Policyholder', 'Other'];

  constructor(public value: string) {
    if (!MoneyBackOption.values.includes(value)) {
      throw new Error(`Invalid value for MoneyBackOption: ${value}`);
    }
  }

  toUpperCase(): string {
    return this.value.toUpperCase();
  }
}
