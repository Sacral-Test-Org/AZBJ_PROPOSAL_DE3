export class AssesseeType {
  id: number;
  type: string;

  constructor(id: number, type: string) {
    this.id = id;
    this.type = type.toUpperCase(); // Ensure the type is always in uppercase
  }
}

// Example usage
const assesseeTypes: AssesseeType[] = [
  new AssesseeType(1, 'PH'),
  new AssesseeType(2, '5'),
  new AssesseeType(3, '8'),
  new AssesseeType(4, 'SL')
];

// The list of assessee types is now ready to be used in the PH_INFO tab page.
