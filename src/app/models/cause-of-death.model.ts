export class CauseOfDeath {
  fmIpType: string | null;
  fmMember: string | null;
  fmAge: number | null;
  fmHealthStat: string | null;
  fmAgeDied: number | null;
  fmCauseDeath: string | null;
  correctFmIpType: string | null;
  correctFmMember: string | null;
  correctFmAge: number | null;
  correctFmHealthStat: string | null;
  correctFmAgeDied: number | null;
  correctFmCauseDeath: string | null;

  constructor(
    fmIpType: string | null = null,
    fmMember: string | null = null,
    fmAge: number | null = null,
    fmHealthStat: string | null = null,
    fmAgeDied: number | null = null,
    fmCauseDeath: string | null = null,
    correctFmIpType: string | null = null,
    correctFmMember: string | null = null,
    correctFmAge: number | null = null,
    correctFmHealthStat: string | null = null,
    correctFmAgeDied: number | null = null,
    correctFmCauseDeath: string | null = null
  ) {
    this.fmIpType = fmIpType;
    this.fmMember = fmMember;
    this.fmAge = fmAge;
    this.fmHealthStat = fmHealthStat;
    this.fmAgeDied = fmAgeDied;
    this.fmCauseDeath = fmCauseDeath;
    this.correctFmIpType = correctFmIpType;
    this.correctFmMember = correctFmMember;
    this.correctFmAge = correctFmAge;
    this.correctFmHealthStat = correctFmHealthStat;
    this.correctFmAgeDied = correctFmAgeDied;
    this.correctFmCauseDeath = correctFmCauseDeath;
  }
}