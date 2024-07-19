export class Verification {
  verificationNumber: string;
  relatedDetails: object;
  hasRelatedRecords: boolean;

  constructor(verificationNumber: string, relatedDetails: object, hasRelatedRecords: boolean) {
    this.verificationNumber = verificationNumber;
    this.relatedDetails = relatedDetails;
    this.hasRelatedRecords = hasRelatedRecords;
  }
}