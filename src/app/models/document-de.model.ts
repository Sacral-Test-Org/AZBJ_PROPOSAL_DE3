export class DocumentDE {
  PARAM_APPLN_NO: string;
  PARAM_PROPOSAL_NO: string | null;
  PARAM_MODULE_NAME: string;
  PARAM_PH_DOB: Date;
  PARAM_PAN: string;

  constructor(
    PARAM_APPLN_NO: string,
    PARAM_PROPOSAL_NO: string | null,
    PARAM_MODULE_NAME: string,
    PARAM_PH_DOB: Date,
    PARAM_PAN: string
  ) {
    this.PARAM_APPLN_NO = PARAM_APPLN_NO;
    this.PARAM_PROPOSAL_NO = PARAM_PROPOSAL_NO;
    this.PARAM_MODULE_NAME = PARAM_MODULE_NAME;
    this.PARAM_PH_DOB = PARAM_PH_DOB;
    this.PARAM_PAN = PARAM_PAN;
  }
}