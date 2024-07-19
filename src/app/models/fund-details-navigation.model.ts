export class FundDetailsNavigation {
  currentRecord: any;
  nextRecord: any;

  constructor(currentRecord: any, nextRecord: any) {
    this.currentRecord = currentRecord;
    this.nextRecord = nextRecord;
  }
}