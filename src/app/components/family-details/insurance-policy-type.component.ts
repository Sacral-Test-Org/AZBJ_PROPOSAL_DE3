import { Component } from '@angular/core';
import { FamilyDetailsService } from '../../services/family-details.service';
import { FieldData } from '../../models/family-details.model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-insurance-policy-type',
  templateUrl: './insurance-policy-type.component.html',
  styleUrls: ['./insurance-policy-type.component.css']
})
export class InsurancePolicyTypeComponent {
  policyTypes: string[] = ['IP', '8', '10', 'SL'];
  selectedPolicyType: string | null = null;
  fieldData: FieldData | null = null;

  constructor(private familyDetailsService: FamilyDetailsService, private logger: NGXLogger) {}

  onPolicyTypeSelect(selectedPolicyType: string): void {
    if (!selectedPolicyType) {
      this.logger.error('Selected policy type is null');
      return;
    }
    this.selectedPolicyType = selectedPolicyType;
    this.familyDetailsService.fetchFieldData(selectedPolicyType).subscribe(
      (data: FieldData) => {
        this.fieldData = data;
        this.logger.info('Field data loaded successfully', data);
      },
      (error) => {
        this.logger.error('Error loading field data', error);
      }
    );
  }
}
