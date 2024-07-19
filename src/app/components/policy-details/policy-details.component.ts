import { Component, OnInit } from '@angular/core';
import { PolicyDetailsService } from 'src/app/services/policy-details.service';
import { ViewImagesService } from 'src/app/services/view-images.service';
import { PolicyDetails } from 'src/app/models/policy-details.model';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {
  policyDetails: PolicyDetails;
  errorMessage: string;

  constructor(
    private policyDetailsService: PolicyDetailsService,
    private viewImagesService: ViewImagesService
  ) {}

  ngOnInit(): void {
    this.getPolicyDetails();
  }

  getPolicyDetails(): void {
    const partnerId = 'some-partner-id'; // This should be dynamically set based on the selected partner
    this.policyDetailsService.getPolicyDetails(partnerId).subscribe(
      (data: PolicyDetails) => {
        this.policyDetails = data;
        this.calculateRatedUpStatus();
      },
      (error) => {
        this.errorMessage = 'Error retrieving policy details';
      }
    );
  }

  calculateRatedUpStatus(): void {
    const { ml_perc, oc_perc, nri_perc, sr_perc } = this.policyDetails;
    if (ml_perc > 0 || oc_perc > 0 || nri_perc > 0 || sr_perc > 0) {
      this.policyDetails.rated_up = 'YES';
      this.policyDetails.reason = `ML: ${ml_perc}, OC: ${oc_perc}, NRI: ${nri_perc}, SR: ${sr_perc}`;
      this.policyDetails.value = `${ml_perc}, ${oc_perc}, ${nri_perc}, ${sr_perc}`;
    } else {
      this.policyDetails.rated_up = 'NO';
      this.policyDetails.reason = '';
      this.policyDetails.value = '';
    }
  }

  viewImages(policyId: string): void {
    this.viewImagesService.getImages(policyId).subscribe(
      (url: string) => {
        window.open(url, '_blank');
      },
      (error) => {
        this.errorMessage = 'Error retrieving images';
      }
    );
  }

  handleNameInput(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
    if (event.key === 'Tab') {
      const genderField = document.getElementById('gender-field');
      if (genderField) {
        genderField.focus();
      }
    }
  }
}