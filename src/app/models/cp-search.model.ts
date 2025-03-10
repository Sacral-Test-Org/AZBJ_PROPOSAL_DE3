export class CP_Search {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  fatherName: string;
  spouseName: string;
  occupation: string;
  images: string[];
  partnerType: string;
  middleName: string;
  checkboxState: boolean;
  signatureCheckbox: string;
  ageProofCheckbox: string;
  addressProofCheckbox: string;
  signatureRadioButton: string;
  policyReference: string;
  updateNameInMasterCP: boolean;
  updateOccupationInMasterCP: boolean;
  correctionInFatherNameInMasterCP: boolean;
  updateHusbandNameInMasterCP: boolean;
  signatureCheck: string = 'NA';
  ageProofCheck: string = 'NA';
  addressProofCheck: string = 'NA';
  additionalProofCheck: string;
  ph_SPOUSE: string;
  SPOUSES_NAME_bkp: string;
  applicationNumber: string;
  mergeOption: string;
  controlFields: any;
  globalViewImageCount: number;
  partnerID: string;
  CP_3: boolean;
  CP_3_PARTID: string;
  CP_4_PARTID: string | null;
  date_of_birth: string;
  gender: string;
  first_name: string;
  last_name: string;
  partner_type: string;
  POLICY_REF: string;
  FATHER_NAME: string;
  SPOUSE_NAME: string;
}