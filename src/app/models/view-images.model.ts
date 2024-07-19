export class ViewImagesModel {
  policyId: string;
  insuredCheck: boolean;
  policyType: string;
  url: string;
  errorMessage: string;

  constructor(policyId: string, insuredCheck: boolean, policyType: string, url: string, errorMessage: string) {
    this.policyId = policyId;
    this.insuredCheck = insuredCheck;
    this.policyType = policyType;
    this.url = url;
    this.errorMessage = errorMessage;
  }
}

export class ImageData {
  imageUrl: string;
  imageName: string;
  imageSize: number;

  constructor(imageUrl: string, imageName: string, imageSize: number) {
    this.imageUrl = imageUrl;
    this.imageName = imageName;
    this.imageSize = imageSize;
  }
}
