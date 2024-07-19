export class Address {
  thirdLine: string;
  postalCode: string;
  state: string;
  district: string;
  landmarkArea: string;

  constructor(thirdLine: string, postalCode: string, state: string, district: string, landmarkArea: string) {
    this.thirdLine = thirdLine;
    this.postalCode = postalCode;
    this.state = state;
    this.district = district;
    this.landmarkArea = landmarkArea;
  }
}