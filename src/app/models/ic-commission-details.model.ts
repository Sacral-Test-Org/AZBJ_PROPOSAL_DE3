export class ICCommissionDetails {
  agentCode: string;
  commissionDetails: any;

  constructor(agentCode: string, commissionDetails: any) {
    this.agentCode = agentCode;
    this.commissionDetails = commissionDetails;
  }
}