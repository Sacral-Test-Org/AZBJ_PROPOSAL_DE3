export class MaritalStatus {
  maritalStatus: string;
  title: string;
  gender: string;

  constructor(maritalStatus: string, title: string, gender: string) {
    this.maritalStatus = maritalStatus;
    this.title = title;
    this.gender = gender;
  }

  validateMaritalStatus(): string | null {
    if (this.maritalStatus === 'M' && this.title === 'MISS' && this.gender === 'F') {
      return 'Error: A married female cannot have the title MISS.';
    }
    if (this.maritalStatus === 'S' && this.title === 'MRS' && this.gender === 'F') {
      return 'Error: A single female cannot have the title MRS.';
    }
    return null;
  }

  shouldEnableSpouseField(): boolean {
    return this.maritalStatus === 'M' || this.maritalStatus === 'W';
  }

  shouldEnableFatherField(): boolean {
    return this.maritalStatus === 'M';
  }
}