import { Component } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-id-validation',
  templateUrl: './product-id-validation.component.html',
  styleUrls: ['./product-id-validation.component.css']
})
export class ProductIdValidationComponent {
  productId: string;
  packageCode: string;
  premium: number;
  portfolioStrategy: string;
  entryAge: number;
  benefitTerm: number;
  solutionName: string;
  unitLinkFlag: string;

  constructor(private correctValueService: CorrectValueService, private router: Router) {}

  validateProductId() {
    this.correctValueService.validateProductId(this.productId).subscribe(response => {
      if (response.exists) {
        this.packageCode = response.packageCode;
        this.premium = null;
        this.portfolioStrategy = '';

        if (response.productDefinition === 'LIFELONG_ASSURE' || response.productDefinition === 'LIFE_SECURE') {
          this.benefitTerm = 100 - this.entryAge;
        } else if (response.productDefinition === 'LONGLIFE_GOAL') {
          this.benefitTerm = 99 - this.entryAge;
        }

        if (response.solutionConfigExists && response.solutionName.length < 3) {
          // Enable solution name field
          this.solutionName = '';
        } else {
          // Disable solution name field
          this.solutionName = null;
        }

        this.unitLinkFlag = response.unitLinkFlag;
        this.portfolioStrategy = response.portfolioStrategy;

        if (this.unitLinkFlag === 'Y' || this.unitLinkFlag === 'P') {
          // Enable unit link tab
          this.router.navigate(['/unit-link-tab']);
        }
      }
    });
  }

  onNewItemInstance() {
    if (this.unitLinkFlag !== 'Y' && this.unitLinkFlag !== 'P' && this.premium !== null) {
      // Disable insert and update properties of the IP area free text field
      // Assuming there's a method to disable these properties
      this.disableIpAreaFreeText();
    }
  }

  disableIpAreaFreeText() {
    // Logic to disable IP area free text field
  }
}
