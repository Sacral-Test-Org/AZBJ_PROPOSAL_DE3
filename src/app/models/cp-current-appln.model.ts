export class CPCurrentApplnModel {
  firstName: string;
  middleName: string;
  lastName: string;
  occupation: string;
  fathersName: string;
  spousesName: string;
  gender: string;
  dateOfBirth: Date;
  placeOfBirth: string;
  permanentAddress: string;
  telephoneNumber?: string;
  mobileNumber?: string;
  numberOfPolicies?: number;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    occupation: string,
    fathersName: string,
    spousesName: string,
    gender: string,
    dateOfBirth: Date,
    placeOfBirth: string,
    permanentAddress: string,
    telephoneNumber?: string,
    mobileNumber?: string,
    numberOfPolicies?: number
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.occupation = occupation;
    this.fathersName = fathersName;
    this.spousesName = spousesName;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.placeOfBirth = placeOfBirth;
    this.permanentAddress = permanentAddress;
    this.telephoneNumber = telephoneNumber;
    this.mobileNumber = mobileNumber;
    this.numberOfPolicies = numberOfPolicies;
  }
}