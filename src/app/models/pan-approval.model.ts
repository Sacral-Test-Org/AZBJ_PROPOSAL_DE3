export class PanApproval {
  panNumber: string;
  panStatus: string;
  nameMatch: string;
  dobMatch: string;

  constructor(panNumber: string, panStatus: string, nameMatch: string, dobMatch: string) {
    if (panNumber.length > 100) {
      throw new Error('PAN Number cannot exceed 100 characters');
    }
    if (panStatus.length > 2000) {
      throw new Error('PAN Status cannot exceed 2000 characters');
    }
    if (nameMatch.length > 2) {
      throw new Error('Name Match cannot exceed 2 characters');
    }
    if (dobMatch.length > 2) {
      throw new Error('DOB Match cannot exceed 2 characters');
    }

    this.panNumber = panNumber;
    this.panStatus = panStatus;
    this.nameMatch = nameMatch;
    this.dobMatch = dobMatch;
  }
}