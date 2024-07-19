export class CorrectValue {
  fscCode: string;
  fullName: string;
  recruitedBy: string;
  branchCode: string;
  recruiterFullName: string;
  recruiterBranchCode: string;
  vWebAggr: boolean;
  gender: string;
  maritalStatus: string;
  father: string;
  spouse: string;
  spouseDOB: Date;
  title: string;
  errorMessage: string;
  ipAgeProof: string;
  residenceProofType: string;
  pinCode: string;
  state: string;
  district: string;
  consentForComm: string;
  area: string;
  pincode: string;
  occ_code: string;
  occ_desc: string;
  itAssesseeStatus: string;
  dispatchMode: string;
  ind_code: string;
  ind_desc: string;
  pepDetails: string;
  partnerType: string;
  relationshipNominee: string;
  insuredCheckbox: boolean;
  productCode: number;
  age: number;
  occupation: string;
  spousePresent: boolean;
  groupProduct: string;
  ageProofType: string;
  proofOfResidence: string;
  nomineeName: string;
  nomineeBirthplace: string;
  nomineeDOB: Date;
  nomineeRelationship: string;
  cityDistrict: string;
  jointLife: string;
  loanType: string;
  ifscCode: string;
  bankName: string;
  bankBranch: string;
  micrCode: string;
  laStudyStandard: string;
  productId: string;
  packageCode: string;
  premium: number;
  portfolioStrategy: string;
  solutionName: string;
  unitLinkFlag: string;
  moneyBackOption: string;
  gmiValue: number;
  sumAssured: number;
  subIdCode: string;
  subIdName: string;
  channelCode: string;
  subIdValidationResult: boolean;
}

export class Language {
  languageId: number;
  languageName: string;
}

export class Profession {
  occ_code: string;
  occ_desc: string;
}

export class IndustryDescription {
  ind_code: string;
  ind_desc: string;
}

export class SurrogateIncomeProof {
  id: string;
  name: string;
  description: string;
}

export class PackageCode {
  packageCode: string;
  productCode: string;
  description: string;
  validationResults: any;
}

export class RateDetails {
  onlineRate: number;
  staffRate: number;
  hpmuRate: number;
  incomeFactor: number;
  autoPayRate: number;
  loyaltyFactor: number;
  wmmRate: number;
  awgTotalPerc: number;
}