export class PolicyMember {
  name: string;
  ageProof: string;
  memberAgeProofId: string;
  dateOfBirth: string;
  age: number;
  coverCode: string;
  sumAssured: number;
  relationshipType: string;
  gender: string;
  ageProofID: string;

  constructor() {
    this.name = '';
    this.ageProof = '';
    this.memberAgeProofId = '';
    this.dateOfBirth = '';
    this.age = 0;
    this.coverCode = '';
    this.sumAssured = 0;
    this.relationshipType = '';
    this.gender = '';
    this.ageProofID = '';
  }

  setName(name: string): void {
    this.name = name.toUpperCase().substring(0, 100);
  }

  setAgeProof(ageProof: string): void {
    this.ageProof = ageProof;
  }

  setMemberAgeProofId(memberAgeProofId: string): void {
    this.memberAgeProofId = memberAgeProofId;
  }

  setDateOfBirth(dateOfBirth: string): void {
    this.dateOfBirth = dateOfBirth;
    this.calculateAge();
  }

  private calculateAge(): void {
    if (this.dateOfBirth) {
      const dob = new Date(this.dateOfBirth);
      const diff = Date.now() - dob.getTime();
      const ageDate = new Date(diff);
      this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }

  setCoverCode(coverCode: string): void {
    this.coverCode = coverCode;
  }

  setSumAssured(sumAssured: number): void {
    this.sumAssured = sumAssured;
  }

  setRelationshipType(relationshipType: string): void {
    this.relationshipType = relationshipType;
  }

  setGender(gender: string): void {
    this.gender = gender.toUpperCase().substring(0, 6);
  }

  setAgeProofID(ageProofID: string): void {
    this.ageProofID = ageProofID.toUpperCase().substring(0, 20);
  }
}
