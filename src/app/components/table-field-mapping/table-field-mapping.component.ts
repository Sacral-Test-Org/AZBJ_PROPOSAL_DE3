import { Component, OnInit } from '@angular/core';
import { TableFieldMappingService } from 'src/app/services/table-field-mapping.service';
import { TableFieldMapping } from 'src/app/models/table-field-mapping.model';

@Component({
  selector: 'app-table-field-mapping',
  templateUrl: './table-field-mapping.component.html',
  styleUrls: ['./table-field-mapping.component.css']
})
export class TableFieldMappingComponent implements OnInit {
  tableFieldMappings: TableFieldMapping[] = [];
  manualBBU: boolean = false;
  reasons: string[] = [];

  constructor(private tableFieldMappingService: TableFieldMappingService) {}

  ngOnInit(): void {
    this.tableFieldMappingService.getTableFieldMappings().subscribe((data: TableFieldMapping[]) => {
      this.tableFieldMappings = data;
    });
  }

  toggleManualBBU(): void {
    this.manualBBU = !this.manualBBU;
  }

  getLOVs(): void {
    this.tableFieldMappingService.getReferralIDLOV().subscribe();
    this.tableFieldMappingService.getReferralNameLOV().subscribe();
    this.tableFieldMappingService.getBBUReasonLOV().subscribe();
  }

  onManualBBUChange(event: any): void {
    if (event.target.checked) {
      this.fetchReasons();
    } else {
      this.reasons = [];
    }
  }

  fetchReasons(): void {
    this.tableFieldMappingService.getReasons().subscribe((data: string[]) => {
      this.reasons = data;
    });
  }

  validateReferralNameInput(fscCode: string, leadSubCode: string): void {
    if (fscCode && !leadSubCode) {
      alert('Lead Sub Code is required.');
    }
  }

  validateReferalId(groupType: string, referalId: string): void {
    if (!referalId) {
      if (['T', 'I', 'W'].includes(groupType)) {
        alert('Referal Id is required.');
      } else if (groupType === 'SY') {
        alert('Referal Id is required. Showing LOV.');
        this.tableFieldMappingService.fetchLOVData('SYNDICATE').subscribe();
      } else if (groupType.includes('Y')) {
        this.tableFieldMappingService.fetchLOVData('AZBJ_XY_RG').subscribe();
      }
    }
  }

  onNomineeDetailsButtonPress(): void {
    // Logic to handle nominee details button press
  }

  handleSubNameInteraction(): void {
    // Logic to handle sub name interaction
  }

  handleRepaymentPeriodInput(repaymentPeriod: string): void {
    this.tableFieldMappingService.getFSCCode().subscribe((fscCode: string) => {
      this.tableFieldMappingService.setICCode(fscCode);
      // Enable specified fields and navigate to LEAD_SUB_CODE
    });
  }
}
