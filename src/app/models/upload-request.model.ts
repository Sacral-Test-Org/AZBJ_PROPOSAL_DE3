export class UploadRequest {
  applicationNumber: string;
  requestCode: string;
  requestDescription: string;
  uploadDate: Date;
  uploadUser: string;
  receivedStatus: string;
  contactNumber: string;
  passportNumber: string;
  panNumber: string;
  aadhaarNumber: string;
  healthQuestion: boolean;
  policyQuestion: boolean;

  constructor(
    applicationNumber: string,
    requestCode: string,
    requestDescription: string,
    uploadDate: Date,
    uploadUser: string,
    receivedStatus: string,
    contactNumber: string,
    passportNumber: string,
    panNumber: string,
    aadhaarNumber: string,
    healthQuestion: boolean,
    policyQuestion: boolean
  ) {
    this.applicationNumber = applicationNumber;
    this.requestCode = requestCode;
    this.requestDescription = requestDescription;
    this.uploadDate = uploadDate;
    this.uploadUser = uploadUser;
    this.receivedStatus = receivedStatus;
    this.contactNumber = contactNumber;
    this.passportNumber = passportNumber;
    this.panNumber = panNumber;
    this.aadhaarNumber = aadhaarNumber;
    this.healthQuestion = healthQuestion;
    this.policyQuestion = policyQuestion;
  }
}