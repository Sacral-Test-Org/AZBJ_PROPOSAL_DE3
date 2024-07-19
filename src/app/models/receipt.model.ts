export class Receipt {
  constructor(
    public receiptNumber: string,
    public amount: number,
    public dateReceived: Date,
    public chequeStatus: string,
    public premiumPayer: string,
    public branchCode: string,
    public branchName: string,
    public branchState: string
  ) {}
}