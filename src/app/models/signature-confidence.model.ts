export class SignatureConfidence {
  documentName: string;
  signatureConfidencePercentage: number;

  constructor(documentName: string, signatureConfidencePercentage: number) {
    this.documentName = documentName;
    this.signatureConfidencePercentage = signatureConfidencePercentage;
  }
}