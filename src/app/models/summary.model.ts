export class Summary {
  gender: string;

  constructor() {
    this.gender = 'M'; // Default value
  }

  setGender(value: string): void {
    const upperCaseValue = value.toUpperCase();
    const validGenders = ['IP', '5', '8', '10', 'LA', 'NO', 'OTHER'];
    if (validGenders.includes(upperCaseValue)) {
      this.gender = upperCaseValue;
    } else {
      throw new Error('Invalid gender value');
    }
  }

  getGender(): string {
    return this.gender;
  }
}
