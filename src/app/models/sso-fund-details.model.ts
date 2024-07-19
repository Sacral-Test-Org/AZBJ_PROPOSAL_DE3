export class SSOFundDetails {
  fundId: string;
  fundName: string;
  chkFund: string;
  apportionment: number;

  constructor(fundId: string, fundName: string, chkFund: string, apportionment: number) {
    this.fundId = fundId;
    this.fundName = fundName;
    this.chkFund = chkFund;
    this.apportionment = apportionment;
  }
}