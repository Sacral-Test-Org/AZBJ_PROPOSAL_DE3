export class Image {
  constructor(public url: string, public altText: string) {}
}

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

export class PolicyHolderDetails {
  constructor(
    public name: string,
    public address: string,
    public contactDetails: string
  ) {}
}

export class InsuredPersonDetails {
  constructor(
    public name: string,
    public address: string,
    public contactDetails: string
  ) {}
}

export class PanApprovalDetails {
  constructor(
    public ipPanIssuanceDate: Date,
    public phPanIssuanceDate: Date,
    public ageProof: string,
    public ageProofId: string,
    public panIssuanceDate: Date,
    public uwReason: string,
    public supervisorComments: string,
    public ipPanDateUnavailable: boolean,
    public phPanDateUnavailable: boolean
  ) {}
}

export class EmployeeID {
  constructor(
    public employeeId: string,
    public fscCode: string,
    public validationResult: boolean
  ) {}
}

export class ControlModel {
  constructor(
    public statusField: string,
    public imageData: string,
    public assignmentFlag: boolean,
    public eIA: boolean,
    public ipAadhaar: string,
    public phAadhaar: string,
    public moduleName: string,
    public RCU_COMMENTS: string,
    public MODULE_NAME: string,
    public APPLN_NO: string,
    public controlFlag: string,
    public proofType: string,
    public proofDesc: string,
    public expiryDate: Date,
    public others: string,
    public panCardNotAvailable: boolean,
    public phNoPanLov: string,
    public phPanCardNo: string,
    public phFirstName: string,
    public phMiddleName: string,
    public phLastName: string,
    public phCurrentStatus: string,
    public phLastUpdatedDate: Date,
    public stCustomer: boolean,
    public partnerType: string,
    public voterIdVerified: boolean,
    public insuredPersonDetails: InsuredPersonDetails,
    public policyholderDetails: PolicyHolderDetails,
    public status: string,
    public partnerDetails: any,
    public applicationNumber: string,
    public biReceivedDate: Date,
    public biDate: Date,
    public instab: string,
    public proptype: string,
    public fscCode: string,
    public productCode: number,
    public selectedOption: string,
    public formTypeFlag: boolean,
    public addressFlag: boolean,
    public selectedFormType: string,
    public bi: string,
    public panNumber: string,
    public panStatus: string,
    public errorMessage: string,
    public supervisorCredentials: string,
    public isPolicySelected: boolean,
    public isSaveButtonEnabled: boolean,
    public aadharNumber: string,
    public aadharDetails: AadharDetails,
    public panStatus: string,
    public validationMessage: string,
    public relationship: string
  ) {}
}

export class AML {
  constructor(
    public documentType: string,
    public requestCode: string,
    public documentDescription: string,
    public information: string,
    public proofType: string,
    public documentId: string,
    public documentDate: Date,
    public oldPolicyReference: string,
    public proofDescription: string,
    public documentRemarks: string
  ) {}
}

export class SearchResult {
  constructor(
    public partnerId: string,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public fathersName: string,
    public spousesName: string,
    public gender: string,
    public dateOfBirth: Date,
    public permanentAddress: string,
    public telephone: string,
    public mobile: string,
    public confidenceParameter: number,
    public numberOfPolicies: number,
    public occupation: string,
    public aadhaarNumber: string,
    public panNumber: string
  ) {}
}

export class DuplicateContact {
  constructor(
    public policyNumber: string,
    public agentCode: string,
    public name: string,
    public contactInformation: string,
    public specialHandling: boolean
  ) {}
}

export class PanValidationResult {
  constructor(
    public panCardNumber: string,
    public isValid: boolean,
    public middleName: string,
    public firstName: string,
    public surname: string,
    public dateOfBirth: Date,
    public validationFlag: string
  ) {}
}

export class ParamList {
  constructor(
    public inception_date: string,
    public POLICY_REF: string,
    public APPLICATION_NO: string,
    public solution_config_id: string,
    public solution_name: string,
    public amount_invested: string,
    public contract_id: string,
    public solution_id: string,
    public calling_from: string
  ) {}
}

export class AadharDetails {
  constructor(
    public aadharNumber: string,
    public name: string,
    public address: string,
    public district: string,
    public state: string,
    public pinCode: string,
    public gender: string,
    public dateOfBirth: Date
  ) {}
}

export class EmployerName {
  constructor(
    public id: number,
    public name: string
  ) {}
}

export class Question {
  constructor(
    public questionId: number,
    public questionText: string,
    public answerType: string,
    public options: string[]
  ) {}
}
