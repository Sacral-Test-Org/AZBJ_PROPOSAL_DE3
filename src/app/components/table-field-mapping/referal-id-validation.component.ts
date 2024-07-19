import { Component, Input } from '@angular/core';
import { TableFieldMappingService } from 'src/app/services/table-field-mapping.service';
import { TableFieldMapping } from 'src/app/models/table-field-mapping.model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-referal-id-validation',
  templateUrl: './referal-id-validation.component.html',
  styleUrls: ['./referal-id-validation.component.css']
})
export class ReferalIdValidationComponent {
  @Input() groupType: string;
  @Input() referalId: string;

  constructor(private tableFieldMappingService: TableFieldMappingService, private logger: NGXLogger) {}

  validateReferalId() {
    if (!this.referalId) {
      if (['T', 'I', 'W'].includes(this.groupType)) {
        this.logger.error('Referal Id and name must be entered.');
        alert('Referal Id and name must be entered.');
      } else if (this.groupType === 'SY') {
        this.logger.warn('Referal Id is empty. Please select from the list.');
        alert('Referal Id is empty. Please select from the list.');
        this.showLOV('SYNDICATE');
      } else if (this.groupType.includes('Y')) {
        this.showLOV('AZBJ_XY_RG');
      }
    }
  }

  private showLOV(type: string) {
    let query = '';
    if (type === 'SYNDICATE') {
      query = `Select branch_code, branch_name from azbj_syn_bank_branches where br_type = (case when :CORRECT_VALUE.FSC_CODE like '522%' then 'B' else substr(:CORRECT_VALUE.FSC_CODE, 1, 3) end)`;
    } else if (type === 'AZBJ_XY_RG') {
      query = `Select branch_code, branch_name from azbj_syn_bank_branches where br_type like '3A6%'`;
    }
    this.tableFieldMappingService.fetchLOVData(query).subscribe(
      (data: TableFieldMapping[]) => {
        // Handle the LOV data here
        console.log(data);
      },
      (error) => {
        this.logger.error('Error fetching LOV data', error);
      }
    );
  }
}
