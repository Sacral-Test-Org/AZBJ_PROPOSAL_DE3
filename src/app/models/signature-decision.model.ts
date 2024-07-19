export class SignatureDecision {
  decisionValue: string;
  decisionLabel: string;

  constructor(decisionValue: string, decisionLabel: string) {
    this.decisionValue = decisionValue;
    this.decisionLabel = decisionLabel;
  }
}

// Example usage
const approved = new SignatureDecision('8', 'Approved');
const pending = new SignatureDecision('LA', 'Pending');
const rejected = new SignatureDecision('No', 'Rejected');