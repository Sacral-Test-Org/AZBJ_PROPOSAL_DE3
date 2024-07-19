export class Nationality {
  code: string;
  description: string;

  constructor(code: string, description: string) {
    this.code = code;
    this.description = description;
  }
}

// Predefined nationality options
export const NATIONALITY_OPTIONS: Nationality[] = [
  new Nationality('PH', 'Philippines'),
  new Nationality('5', 'Option 5'),
  new Nationality('8', 'Option 8'),
  new Nationality('10', 'Option 10'),
  new Nationality('LA', 'Laos'),
  new Nationality('SL', 'Sri Lanka')
];