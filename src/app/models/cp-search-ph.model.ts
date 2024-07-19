export class Occupation {
  partnerType: string;
  occupation: string;
  backupOccupation: string;

  constructor(partnerType: string, occupation: string, backupOccupation: string) {
    this.partnerType = partnerType;
    this.occupation = occupation;
    this.backupOccupation = backupOccupation;
  }
}

export class CP_SearchPHModel {
  date_of_birth: string;
  gender: string;
  first_name: string;
  last_name: string;
  partner_type: string;
  policy_ref: string;
  father_name: string;
  spouse_name: string;
  age_proof_check: string;
  signature_check: string;
  address_proof_check: string;

  constructor(
    date_of_birth: string,
    gender: string,
    first_name: string,
    last_name: string,
    partner_type: string,
    policy_ref: string,
    father_name: string,
    spouse_name: string,
    age_proof_check: string,
    signature_check: string,
    address_proof_check: string
  ) {
    this.date_of_birth = date_of_birth;
    this.gender = gender;
    this.first_name = first_name;
    this.last_name = last_name;
    this.partner_type = partner_type;
    this.policy_ref = policy_ref;
    this.father_name = father_name;
    this.spouse_name = spouse_name;
    this.age_proof_check = age_proof_check;
    this.signature_check = signature_check;
    this.address_proof_check = address_proof_check;
  }
}

export class CP_SearchResultPH {
  PAN_NO: string;
  AADHAAR_NO: string;
  OCCUPATION: string;
  partner_id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  father_name: string;
  spouse_name: string;

  constructor(
    PAN_NO: string,
    AADHAAR_NO: string,
    OCCUPATION: string,
    partner_id: string,
    first_name: string,
    last_name: string,
    date_of_birth: string,
    gender: string,
    father_name: string,
    spouse_name: string
  ) {
    this.PAN_NO = PAN_NO;
    this.AADHAAR_NO = AADHAAR_NO;
    this.OCCUPATION = OCCUPATION;
    this.partner_id = partner_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.date_of_birth = date_of_birth;
    this.gender = gender;
    this.father_name = father_name;
    this.spouse_name = spouse_name;
  }
}