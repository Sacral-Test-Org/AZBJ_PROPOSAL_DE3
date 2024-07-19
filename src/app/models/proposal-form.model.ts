export class ProposalForm {
  // Personal Details
  personalDetails: {
    name: string;
    occupation: string;
    contactInfo: string;
  };

  // Policy Details
  policyDetails: {
    policyNumber: string;
    policyDate: Date;
    policyStatus: string;
  };

  // Verification Details
  verificationDetails: {
    panCard: string;
    aadharCard: string;
  };

  // Additional Details
  additionalDetails: {
    financialDocuments: string;
    consentInformation: string;
    relationshipDetails: string;
  };

  // Statuses
  statuses: {
    eligibilityFlags: boolean;
    riskScores: number;
    verificationStatuses: boolean;
  };

  // Previous Policy Details
  previousPolicyDetails: {
    policyNumber: string;
    insuranceCompany: string;
    amountOfInsurance: number;
    status: string;
    ipType: string;
  };

  // Summary Section
  summary: {
    fscCode: string;
    age: number;
    education: string;
    gender: string;
    occupation: string;
    dob: Date;
    pan: string;
    annualIncome: number;
    citizenship: string;
    ageProof: string;
    proofId: string;
    incomeProof: string;
    addressProof: string;
    bmi: number;
    numEarlyDeaths: number;
    signatureType: string;
    healthQuestions: string;
    itDeclaration: string;
    premiumPaidBy: string;
    productName: string;
    packageCode: string;
    benefitTerm: number;
    premiumTerm: number;
    sumAssured: number;
    premium: number;
    fundDetails: string;
    nsapLoading: string;
    ridersSa: number;
    renewalPremium: number;
    premiumFrequency: string;
    maturityFt: string;
    caseSummaryRcu: string;
    aizwalFlag: string;
    pepFlag: string;
    suspectedCp: string;
  };

  // Lead By Field
  leadByDetails: {
    leadBy: string;
    groupCode: string;
    custPartUniqueCode: string;
    intId: string;
    icName: string;
    beforeTitle: string;
    firstName: string;
    middleName: string;
    surname: string;
  };

  // Rider Details
  riderDetails: RiderDetails[];

  // Populate DE1 Records
  POPULATE_DE1_RECORDS: string;

  // Proposal Form Fields
  proposalFormFields: {
    productGroup: string;
    insuredCheckbox: boolean;
    spousePresent: boolean;
    incomeTaxDeclaration: boolean;
  };

  // Image Data
  imageData: string;
  stripNumber: number;

  // Fund Details
  fundDetails: {
    fundName: string;
    apportionment: string;
    proposalType: string;
    numberOfPages: number;
    imageZoomPercentage: number;
  };

  // Incomplete Proposal Details
  incompleteProposalDetails: {
    proposalFormField: string;
    comments: string;
    detailsReceived: string;
    deleteRow: boolean;
    proposalRecordId: number;
  };

  // STP Case Details
  stpCaseDetails: {
    TASA: number;
    BMI: number;
    manualUnderwritingStatus: string;
    reasons: string;
    comments: string;
    applicationNumber: string;
    proposalNumber: string;
    ipCpId: string;
    phCpId: string;
    ulTradText: string;
    bop: string;
    receiptAmount: number;
    premium: number;
    reverseSa: number;
    sumAssured: number;
    saDifference: number;
  };

  // Child Covers
  childCovers: ChildCover[];

  // Proposal Type
  proposalType: string;

  // Validation Results
  validationResults: any;
}

export class RiderDetails {
  coverCode: string;
  coverDescription: string;
  sumAssured: number;
  benefitTerm: number;
  premiumTerm: number;
  interestRate: number;
  entryAge: number;
}

export class ChildCover {
  childName: string;
  childDob: Date;
  childAge: number;
  childSumPerc: number;
}
