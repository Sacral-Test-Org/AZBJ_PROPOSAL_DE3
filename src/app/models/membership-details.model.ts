export class MembershipDetails {
  membershipNumber: string;
  sumAssured: number;

  constructor(membershipNumber: string, sumAssured: number) {
    this.membershipNumber = membershipNumber.toUpperCase();
    this.sumAssured = sumAssured;
  }
}
