export class ResidenceProof {
  constructor(
    public id: number,
    public type: string,
    public description: string
  ) {}
}

export const predefinedResidenceProofs: ResidenceProof[] = [
  new ResidenceProof(1, 'IP', 'Insured Person'),
  new ResidenceProof(2, 'SON', 'Son'),
  new ResidenceProof(3, 'PH', 'Policy Holder'),
  new ResidenceProof(4, 'SL', 'Spouse')
];