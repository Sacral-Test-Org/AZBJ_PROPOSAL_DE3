export class TableFieldMapping {
  columnName: string;
  fieldName: string;
  blockName: string;
  leadSubCode: string;
  subName: string;
  referralID: string;
  referralName: string;
  employeeID: string;
  icCode: string;
  manualBBU: boolean;
  bbuReason: string;

  constructor(
    columnName: string,
    fieldName: string,
    blockName: string,
    leadSubCode: string,
    subName: string,
    referralID: string,
    referralName: string,
    employeeID: string,
    icCode: string,
    manualBBU: boolean,
    bbuReason: string
  ) {
    this.columnName = columnName;
    this.fieldName = fieldName;
    this.blockName = blockName;
    this.leadSubCode = leadSubCode;
    this.subName = subName;
    this.referralID = referralID;
    this.referralName = referralName;
    this.employeeID = employeeID;
    this.icCode = icCode;
    this.manualBBU = manualBBU;
    this.bbuReason = bbuReason;
  }
}

export class ReferalIdModel {
  referalId: string;
  groupType: string;
  lovData: any[];

  constructor(referalId: string, groupType: string, lovData: any[]) {
    this.referalId = referalId;
    this.groupType = groupType;
    this.lovData = lovData;
  }
}

export class ImageDetails {
  proposalType: string;
  numberOfPages: number;
  formVersion: string;
  imagePath: string;
  fileName: string;
  para_x: number;
  para_y: number;
  loadedPage: number;

  constructor(
    proposalType: string,
    numberOfPages: number,
    formVersion: string,
    imagePath: string,
    fileName: string,
    para_x: number,
    para_y: number,
    loadedPage: number
  ) {
    this.proposalType = proposalType;
    this.numberOfPages = numberOfPages;
    this.formVersion = formVersion;
    this.imagePath = imagePath;
    this.fileName = fileName;
    this.para_x = para_x;
    this.para_y = para_y;
    this.loadedPage = loadedPage;
  }
}

export class TableFieldMappingModel {
  branchName: string;

  constructor(branchName: string) {
    this.branchName = branchName;
  }
}
