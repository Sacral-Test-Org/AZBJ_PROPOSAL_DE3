import { Component, OnInit } from '@angular/core';
import { CP_SearchResultService } from 'src/app/services/cp-search-result.service';
import { PolicyDetailsService } from 'src/app/services/policy-details.service';
import { CP_SearchResult } from 'src/app/models/cp-search-result.model';

@Component({
  selector: 'app-cp-search-result',
  templateUrl: './cp-search-result.component.html',
  styleUrls: ['./cp-search-result.component.css']
})
export class CP_SearchResultComponent implements OnInit {
  searchResults: CP_SearchResult[] = [];
  selectedRecord: CP_SearchResult | null = null;
  mergeStatus: string = 'N_C';
  proofCheckFlags = { signature: 'NA', ageProof: 'NA', addressProof: 'NA' };

  constructor(
    private cpSearchResultService: CP_SearchResultService,
    private policyDetailsService: PolicyDetailsService
  ) {}

  ngOnInit(): void {
    this.getSearchResults();
  }

  getSearchResults(): void {
    this.cpSearchResultService.getSearchResults().subscribe(
      (results: CP_SearchResult[]) => {
        this.searchResults = results;
      },
      (error) => {
        console.error('Error fetching search results', error);
      }
    );
  }

  handleCheckboxChange(event: any, partnerId: string): void {
    const isChecked = event.target.checked;
    const partner = this.searchResults.find(result => result.partnerId === partnerId);
    if (!partner) return;

    if (isChecked) {
      this.updatePartnerInfo(partnerId, 'Y');
      partner.firstName = partner.correctFirstName;
      partner.middleName = partner.correctMiddleName;
      partner.lastName = partner.correctLastName;
      partner.fatherName = partner.correctFatherName;
      partner.spouseName = partner.correctSpouseName;
      partner.occupation = partner.correctOccupation;
      partner.updateNameFlag = '1';
      partner.updateFatherNameFlag = '1';
      partner.updateHusbandNameFlag = '1';
      partner.updateOccupationNameFlag = '1';
    } else {
      this.updatePartnerInfo(partnerId, 'N');
      partner.firstName = partner.backupFirstName;
      partner.middleName = partner.backupMiddleName;
      partner.lastName = partner.backupLastName;
      partner.fatherName = partner.backupFatherName;
      partner.spouseName = partner.backupSpouseName;
      partner.occupation = partner.backupOccupation;
      partner.updateNameFlag = '0';
      partner.updateFatherNameFlag = '0';
      partner.updateHusbandNameFlag = '0';
      partner.updateOccupationNameFlag = '0';
    }

    this.updateMergeStatusAndProofChecks();
  }

  updatePartnerInfo(partnerId: string, flag: string): void {
    this.cpSearchResultService.updatePartnerInfo(partnerId, flag).subscribe(
      (response) => {
        console.log('Partner info updated successfully', response);
      },
      (error) => {
        console.error('Error updating partner info', error);
      }
    );
  }

  updateMergeStatusAndProofChecks(): void {
    const checkedCount = this.searchResults.filter(result => result.checkFlag === 'Y').length;
    if (checkedCount === 0) {
      this.mergeStatus = 'N_C';
      this.proofCheckFlags.signature = 'NA';
      this.proofCheckFlags.ageProof = 'NA';
      this.proofCheckFlags.addressProof = 'NA';
    } else if (checkedCount === 1) {
      this.mergeStatus = 'S_C';
      this.proofCheckFlags.signature = 'Y';
      this.proofCheckFlags.ageProof = 'Y';
      this.proofCheckFlags.addressProof = 'Y';
    } else {
      this.mergeStatus = 'M_C';
      this.proofCheckFlags.signature = 'Y';
      this.proofCheckFlags.ageProof = 'Y';
      this.proofCheckFlags.addressProof = 'Y';
    }
  }

  navigateToPolicyDetails(partnerId: string): void {
    this.policyDetailsService.getPolicyDetails(partnerId).subscribe(
      (policyDetails) => {
        // Navigate to policy details section and clear existing data
        console.log('Policy details fetched successfully', policyDetails);
      },
      (error) => {
        console.error('Error fetching policy details', error);
      }
    );
  }

  handleSearch(searchCriteria: any): void {
    this.cpSearchResultService.searchCustomerProfiles(searchCriteria).subscribe(
      (results: CP_SearchResult[]) => {
        this.searchResults = results;
      },
      (error) => {
        console.error('Error searching customer profiles', error);
      }
    );
  }

  handleUpdate(updateFields: any): void {
    this.cpSearchResultService.updateCustomerProfile(updateFields).subscribe(
      (response) => {
        console.log('Customer profile updated successfully', response);
      },
      (error) => {
        console.error('Error updating customer profile', error);
      }
    );
  }

  clearData(): void {
    this.searchResults = [];
  }

  updateToChkField(): void {
    this.searchResults.forEach(result => {
      result.toChk = '0';
    });
  }

  clearResults(): void {
    this.searchResults = [];
  }

  applyAndSave(): void {
    this.searchResults.forEach(result => {
      if (result.checkFlag === 'Y') {
        this.cpSearchResultService.setMergeFlag(result.partnerId, 'Y').subscribe(
          (response) => {
            console.log('Merge flag set successfully', response);
            this.cpSearchResultService.displaySuccessMessage('CP merging details captured successfully for IP');
          },
          (error) => {
            console.error('Error setting merge flag', error);
          }
        );
      }
    });
  }

  onSelectRecord(record: CP_SearchResult): void {
    this.selectedRecord = record;
  }

  onViewPolicyDetails(record: CP_SearchResult): void {
    this.policyDetailsService.getPolicyDetails(record.partnerId).subscribe(
      (policyDetails) => {
        console.log('Policy details fetched successfully', policyDetails);
      },
      (error) => {
        console.error('Error fetching policy details', error);
      }
    );
  }
}