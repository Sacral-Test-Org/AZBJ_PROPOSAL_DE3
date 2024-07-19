import { Component, OnInit } from '@angular/core';
import { RiderDetailsService } from '../../services/rider-details.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-populate-rider-details',
  templateUrl: './populate-rider-details.component.html',
  styleUrls: ['./populate-rider-details.component.css']
})
export class PopulateRiderDetailsComponent implements OnInit {
  riderDetails: any[] = [];
  v_ip_ph_flag: boolean = false;
  v_minor_flag: boolean = false;
  v_joint_flag: boolean = false;
  groupProductFlag: string = 'N';

  constructor(private riderDetailsService: RiderDetailsService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.populateRiderDetails();
  }

  populateRiderDetails(): void {
    this.riderDetailsService.fetchRiderDetails().subscribe(
      (data: any) => {
        this.riderDetails = data;
        this.processRiderDetails();
      },
      (error: any) => {
        this.logger.error('Error fetching rider details', error);
      }
    );
  }

  processRiderDetails(): void {
    if (this.groupProductFlag === 'Y') {
      this.riderDetails = [];
      // Fetch rider details from the database based on the selected package and product code
      this.riderDetailsService.fetchRiderDetailsFromDB().subscribe(
        (data: any) => {
          this.riderDetails = data;
          this.updateRiderDetails();
        },
        (error: any) => {
          this.logger.error('Error fetching rider details from DB', error);
        }
      );
    }
  }

  updateRiderDetails(): void {
    this.riderDetails.forEach(rider => {
      // Set cover code, description, sum assured, premium term, benefit term, entry age, and rider partner
      rider.coverCode = rider.cover_code;
      rider.description = rider.cover_description;
      rider.sumAssured = rider.sum_assured;
      rider.premiumTerm = rider.premium_term;
      rider.benefitTerm = rider.benefit_term;
      rider.entryAge = rider.entry_age;
      rider.riderPartner = rider.rider_partner;

      // Delete records if certain conditions are met
      if (rider.topUps === 0 || (rider.coverCode === 'SPECIFIC_CODE' && rider.productCode === 'SPECIFIC_PRODUCT')) {
        this.riderDetails = this.riderDetails.filter(r => r !== rider);
      }

      // Adjust premium and benefit terms based on product and cover codes
      if (rider.productCode === 'SPECIFIC_PRODUCT' && rider.coverCode === 'SPECIFIC_CODE') {
        rider.premiumTerm = 'ADJUSTED_TERM';
        rider.benefitTerm = 'ADJUSTED_TERM';
      }
    });

    // Refresh policy member details if the product code is 315
    if (this.riderDetails.some(rider => rider.productCode === '315')) {
      this.refreshPolicyMemberDetails();
    }

    // Refresh child covers if the product code is 321 and the package code starts with 'SMART_CHILD_'
    if (this.riderDetails.some(rider => rider.productCode === '321' && rider.packageCode.startsWith('SMART_CHILD_'))) {
      this.refreshChildCovers();
    }
  }

  refreshPolicyMemberDetails(): void {
    // Logic to refresh policy member details
  }

  refreshChildCovers(): void {
    // Logic to refresh child covers
  }
}