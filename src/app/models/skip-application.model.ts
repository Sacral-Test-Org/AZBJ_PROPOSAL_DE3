export class SkipApplication {
  reason: string;
  approvalFlag: string;
  userId: string;

  constructor(reason: string, approvalFlag: string, userId: string) {
    this.reason = reason;
    this.approvalFlag = approvalFlag;
    this.userId = userId;
  }
}