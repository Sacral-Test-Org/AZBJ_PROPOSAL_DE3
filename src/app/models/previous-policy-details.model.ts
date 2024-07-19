export class PreviousPolicyDetails {
  previousPolicyNumber: string;
  block: string;
  item: string;
  proposalType: string;
  image: string;
  previousInsuranceCompanyInfo: string;
  amountOfInsurance: string;

  constructor(
    previousPolicyNumber: string,
    block: string,
    item: string,
    proposalType: string,
    image: string,
    previousInsuranceCompanyInfo: string,
    amountOfInsurance: string
  ) {
    this.previousPolicyNumber = previousPolicyNumber;
    this.block = block;
    this.item = item;
    this.proposalType = proposalType;
    this.image = image;
    this.previousInsuranceCompanyInfo = previousInsuranceCompanyInfo;
    this.amountOfInsurance = amountOfInsurance;
  }
}