export class NavigationModel {
  productCode: number;
  packageCode: string;
  spwFlag: string;
  spwPercentage: number;
  spwFrequency: string;
  riderCoverCode: string;
  sumAssured: number;
  benefitTerm: number;
  premiumTerm: number;
  solutionName: string;
  groupProductFlag: string;
  unitLinkFlag: string;
  portfolioStrategyEnabled: boolean;
  masterPolicy: string;
  insuredPersonAge: number;
  safeDistrictFlag: string;
  nomineeAge: number;
  itemId: string;

  constructor(
    productCode: number,
    packageCode: string,
    spwFlag: string,
    spwPercentage: number,
    spwFrequency: string,
    riderCoverCode: string,
    sumAssured: number,
    benefitTerm: number,
    premiumTerm: number,
    solutionName: string,
    groupProductFlag: string,
    unitLinkFlag: string,
    portfolioStrategyEnabled: boolean,
    masterPolicy: string,
    insuredPersonAge: number,
    safeDistrictFlag: string,
    nomineeAge: number,
    itemId: string
  ) {
    this.productCode = productCode;
    this.packageCode = packageCode;
    this.spwFlag = spwFlag;
    this.spwPercentage = spwPercentage;
    this.spwFrequency = spwFrequency;
    this.riderCoverCode = riderCoverCode;
    this.sumAssured = sumAssured;
    this.benefitTerm = benefitTerm;
    this.premiumTerm = premiumTerm;
    this.solutionName = solutionName;
    this.groupProductFlag = groupProductFlag;
    this.unitLinkFlag = unitLinkFlag;
    this.portfolioStrategyEnabled = portfolioStrategyEnabled;
    this.masterPolicy = masterPolicy;
    this.insuredPersonAge = insuredPersonAge;
    this.safeDistrictFlag = safeDistrictFlag;
    this.nomineeAge = nomineeAge;
    this.itemId = itemId;
  }
}