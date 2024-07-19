import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-aml-kyc',
  templateUrl: './aml-kyc.component.html',
  styleUrls: ['./aml-kyc.component.css']
})
export class AMLKYCComponent implements OnInit {
  panNumber: string;
  name: string;
  status: string;
  partner: string;
  documentType: string;
  partners: string[] = [];
  customerStatuses: string[] = ['5', '8', 'SL'];
  isCustomerStatusVisible: boolean = false;

  constructor(private controlService: ControlService) {}

  ngOnInit(): void {
    this.partners = this.controlService.getPartners();
    this.toggleDropdownVisibility();
  }

  onPartnerSelect(selectedPartner: string): void {
    this.controlService.storeSelectedPartner(selectedPartner);
  }

  checkVisibilityCondition(): boolean {
    // Implement the specific condition logic here
    return true; // Placeholder for actual condition
  }

  toggleDropdownVisibility(): void {
    this.isCustomerStatusVisible = this.checkVisibilityCondition();
  }
}