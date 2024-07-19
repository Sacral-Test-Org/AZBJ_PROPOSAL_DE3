export class Partner {
  id: number;
  name: string;
}

export class PartnerDetails {
  partnerId: string;
  fullName: string;
  fathersName: string;
  spousesName: string;
  address: string;
  telephone: string;
  dateOfBirth: Date;
  title: string;
  firstName: string;
  middleName: string;
  surname: string;
  maritalStatus: string;
  nationality: string;
  occupation: string;
  gender: string;
  email: string;
  fatherName: string;
  spouseName: string;
  placeOfBirth: string;
  education: string;
  mobileNumber: string;
  residentialAddress: Address;
  mailingAddress: Address;
}

export class Address {
  doorNumber: string;
  buildingName: string;
  plotNumber: string;
  area: string;
  addressLine3: string;
  addressLine4: string;
  addressLine5: string;
  postcode: string;
  phoneNumber: string;
  countryName: string;
}

export class MergeCheckboxState {
  isChecked: boolean;
}

export class PartnerSelectionFields {
  partnerId: string;
  fullName: string;
  fathersName: string;
  spousesName: string;
  address: string;
  telephone: string;
  dateOfBirth: Date;
}