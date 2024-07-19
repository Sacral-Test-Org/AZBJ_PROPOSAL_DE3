export class FundDetails {
  fundId: string;
  fundName: string;
  apportionmentPercentage: number;
  totalFundValue: number;
  deleteFlag: boolean;
  validationFlag: boolean;
  correctValue: number;
  fundDetails1: object;
  fundDetails2: object;
  imageUrl: string;
  imageDescription: string;
  productCode: number;
  productDefinition: string;
  totalPercentage: number;
  allocationPerc: number;
  sumOfApportionments: number;
  isAutoTransfer: boolean;
  isMarkedForDeletion: boolean;
  checkboxStatus: string;
  constructor(
    fundId: string,
    fundName: string,
    apportionmentPercentage: number,
    totalFundValue: number,
    deleteFlag: boolean,
    validationFlag: boolean,
    correctValue: number,
    fundDetails1: object,
    fundDetails2: object,
    imageUrl: string,
    imageDescription: string,
    productCode: number,
    productDefinition: string,
    totalPercentage: number,
    allocationPerc: number,
    sumOfApportionments: number,
    isAutoTransfer: boolean,
    isMarkedForDeletion: boolean,
    checkboxStatus: string
  ) {
    this.fundId = fundId;
    this.fundName = fundName;
    this.apportionmentPercentage = apportionmentPercentage;
    this.totalFundValue = totalFundValue;
    this.deleteFlag = deleteFlag;
    this.validationFlag = validationFlag;
    this.correctValue = correctValue;
    this.fundDetails1 = fundDetails1;
    this.fundDetails2 = fundDetails2;
    this.imageUrl = imageUrl;
    this.imageDescription = imageDescription;
    this.productCode = productCode;
    this.productDefinition = productDefinition;
    this.totalPercentage = totalPercentage;
    this.allocationPerc = allocationPerc;
    this.sumOfApportionments = sumOfApportionments;
    this.isAutoTransfer = isAutoTransfer;
    this.isMarkedForDeletion = isMarkedForDeletion;
    this.checkboxStatus = checkboxStatus;
  }
}