import { Component } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-portfolio-strategy-validation',
  templateUrl: './portfolio-strategy-validation.component.html',
  styleUrls: ['./portfolio-strategy-validation.component.css']
})
export class PortfolioStrategyValidationComponent {
  constructor(private correctValueService: CorrectValueService, private logger: NGXLogger) {}

  validatePortfolioStrategy(portfolioStrategy: string, frequency: string, productDefinition: string, productCode: number, packageCode: string): void {
    if (portfolioStrategy === 'AT' && frequency === '12') {
      this.logger.error('Auto Transfer Portfolio is not applicable for Monthly Mode');
      return;
    }

    if (productDefinition === 'MONEY_SECURE_PLAN') {
      portfolioStrategy = 'IS';
    } else if (productDefinition === 'PRINCIPAL_GAIN') {
      portfolioStrategy = 'WL';
    }

    if (portfolioStrategy && portfolioStrategy !== 'SO') {
      this.correctValueService.navigateToBlock('AZBJ_SSO_FUND_DETAILS');
      this.correctValueService.clearBlock('AZBJ_SSO_FUND_DETAILS');
      this.correctValueService.disableFields(['CORRECT_FUNDLIST', 'CORRECT_APPORT', 'CORRECT_FUND_ID']);
    }

    if (portfolioStrategy === 'SO') {
      this.correctValueService.enableFields(['CORRECT_FUNDLIST', 'CORRECT_APPORT']);
    }

    if ([307, 316, 331, 351, 353].includes(productCode) && ['TB', 'AT'].includes(portfolioStrategy)) {
      this.correctValueService.navigateToBlock('UL_AT_PORTFOL');
      this.correctValueService.clearBlockWithoutValidation('UL_AT_PORTFOL');
      this.correctValueService.navigateToBlock('UL_AT_PORTFOL_2');
      this.correctValueService.clearBlockWithoutValidation('UL_AT_PORTFOL_2');
      this.correctValueService.navigateToBlock('AZBJ_FUND_DETAILS');
      this.correctValueService.enableFieldForAllRecords('APPORTIONMENT');
    }

    if ([307, 316, 331].includes(productCode) && ['TB', 'WL', 'CP'].includes(portfolioStrategy)) {
      this.correctValueService.disableField('CMD_FUND_VAL');
    } else {
      this.correctValueService.enableField('CMD_FUND_VAL');
    }

    if (productCode === 311 && portfolioStrategy === 'SO' && !packageCode.includes('SINGLE')) {
      portfolioStrategy = null;
      this.logger.error('SSO Option is applicable only for Single premium');
      return;
    }

    this.correctValueService.callProcedure('AZBJ_WOL_FUND_POPULATE', { portfolioStrategy });
  }
}
