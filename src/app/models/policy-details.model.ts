export class PolicyDetails {
  partnerId: string;
  policyReference: string;
  contractStatus: string;
  roleType: string;
  sumAssured: number;
  startDate: Date;
  riskDate: Date;
  productId: string;
  ratedUp: boolean;
  reason: string;
  value: string;
  mlPerc: number;
  ocPerc: number;
  nriPerc: number;
  srPerc: number;

  constructor(
    partnerId: string,
    policyReference: string,
    contractStatus: string,
    roleType: string,
    sumAssured: number,
    startDate: Date,
    riskDate: Date,
    productId: string,
    ratedUp: boolean,
    reason: string,
    value: string,
    mlPerc: number,
    ocPerc: number,
    nriPerc: number,
    srPerc: number
  ) {
    this.partnerId = partnerId;
    this.policyReference = policyReference;
    this.contractStatus = contractStatus;
    this.roleType = roleType;
    this.sumAssured = sumAssured;
    this.startDate = startDate;
    this.riskDate = riskDate;
    this.productId = productId;
    this.ratedUp = ratedUp;
    this.reason = reason;
    this.value = value;
    this.mlPerc = mlPerc;
    this.ocPerc = ocPerc;
    this.nriPerc = nriPerc;
    this.srPerc = srPerc;
  }
}