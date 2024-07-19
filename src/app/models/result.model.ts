export class Result {
  resultField: string;
  resultType: string;
  // other relevant fields can be added here

  constructor(resultField: string, resultType: string) {
    this.resultField = resultField;
    this.resultType = resultType;
  }
}
