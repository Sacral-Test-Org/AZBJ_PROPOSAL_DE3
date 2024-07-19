import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';
import { Partner } from 'src/app/models/partner.model';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.component.html',
  styleUrls: ['./partner-details.component.css']
})
export class PartnerDetailsComponent implements OnInit {
  partners: Partner[] = [];
  selectedPartner: Partner | null = null;
  control = { ch_merge: false };

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.partnerService.getPartnerDetails().subscribe((data: Partner[]) => {
      this.partners = data;
    });
  }

  validateDetails(): void {
    // Logic to validate partner details
  }

  exitForm(): void {
    // Logic to close the form
  }

  validateMerge(): void {
    if (this.control.ch_merge) {
      this.partnerService.validateMerge().subscribe((result: any) => {
        if (result.count === 0) {
          alert('Please select a reason.');
          // Move cursor to reason selection field
        }
      });
    }
  }

  onExit(): void {
    if (this.control.ch_merge) {
      const selectedPartners = this.partners.filter(p => p.selected);
      const masterPartner = selectedPartners.find(p => p.isMaster);
      const childPartners = selectedPartners.filter(p => !p.isMaster);

      if (selectedPartners.length === 0) {
        if (confirm('Do you want to exit without selecting a partner?')) {
          this.exitForm();
        }
      } else if (masterPartner && childPartners.length > 0) {
        this.partnerService.mergePartners(masterPartner, childPartners).subscribe(() => {
          if (this.control.ch_merge) {
            this.partnerService.deleteRecords('IP').subscribe();
            this.partnerService.deleteRecords('PH').subscribe();
          }
          this.exitForm();
        });
      } else {
        alert('Please choose a unique master partner and other partners to be merged.');
      }
    } else {
      if (!this.selectedPartner?.reason) {
        alert('Please choose a reason.');
      }
    }
  }

  retrievePartnerDetails(partnerId: string): void {
    this.partnerService.getPartnerDetails(partnerId).subscribe((partner: Partner) => {
      if (partner) {
        this.selectedPartner = partner;
      } else {
        alert('Invalid Partner ID. Please correct the ID.');
      }
    });
  }
}
