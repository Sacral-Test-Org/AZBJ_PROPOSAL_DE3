import { FundDetails } from './fund-details.model';

export class SolutionProduct {
  frequency: string;
  accumulate: boolean;
  insuranceForAll: boolean;
  fullyVaccinatedFlag: boolean;
  autoPayRebateFlag: boolean;
  salariedRebateFlag: boolean;
  incomePeriod: number;
  payoutFrequency: string;
  deathBenefitOption: string;
  cashBonus: boolean;
  deferredPeriod: number;
  worksiteRebateFlag: boolean;
  lifeStageUpgradeFlag: boolean;
  numberOfPremiumHolidays: number;
  deathBenefitPercentage: number;
  gmi: number;
  addDeleteLoyalty: boolean;
  payoutDate: Date;
  adbPercentage: number;
  emr2Value: number;
  emr1Value: number;
  emr2: boolean;
  emr1: boolean;
  vestingAge: number;
  annuityOption: string;
  annuityType: string;
  pensionOption: string;
  percentageIncreaseInSA: number;
  spwFlag: boolean;
  spwPercentage: number;
  spwFrequency: string;
  ibAmount: number;
  productId: string;
  packageDescription: string;
  packageCode: string;
  premium: number;
  sumAssured: number;
  multiplier: number;
  benefitTerm: number;
  premiumTerm: number;
  moneyBooster: boolean;
  nomineeAge: number;
  solutionId: string;
  solutionMultiplier: number;
  controlFlag: string;
  percentageInput: number;
  payoutFrequency: string;
  paymentMethods: string[];
  fscCode: string;
  adiFlag: boolean;
  renewalPaymentMethods: string[];
  productCode: string;
  productType: string;
}

export class Package {
  packageCode: string;
  packageName: string;
  productCode: string;
  packageId: string;
  description: string;
}