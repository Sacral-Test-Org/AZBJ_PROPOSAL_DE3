import { Component, OnInit } from '@angular/core';
import { MembershipDetailsService } from './membership-details.service';
import { MembershipDetails } from './membership-details.model';

@Component({
  selector: 'app-membership-details',
  templateUrl: './membership-details.component.html',
  styleUrls: ['./membership-details.component.css']
})
export class MembershipDetailsComponent implements OnInit {
  membershipNumber: string = '';
  membershipSumAssured: number = 0;

  constructor(private membershipDetailsService: MembershipDetailsService) {}

  ngOnInit(): void {
    this.initializeMembershipNumberField();
    this.initializeMembershipSumAssuredField();
  }

  initializeMembershipNumberField(): void {
    // Logic to display membership number in uppercase and make it read-only
    this.membershipNumber = this.membershipNumber.toUpperCase();
  }

  initializeMembershipSumAssuredField(): void {
    // Logic to initialize the "Membership Sum Assured" field
    // This field should be read-only, uppercase, and numeric
  }

  populateMembershipDetails(): void {
    // Clear current membership details
    this.membershipNumber = '';
    this.membershipSumAssured = 0;

    // Call the service method to fetch membership details
    this.membershipDetailsService.getMembershipDetails().subscribe(
      (details: MembershipDetails) => {
        // Populate the retrieved details into the membership details section
        this.membershipNumber = details.membershipNumber.toUpperCase();
        this.membershipSumAssured = details.membershipSumAssured;
        // Display a message indicating the status of the proposal
        alert('Membership details populated successfully.');
      },
      (error) => {
        // Display an error message with the SQL error message
        alert('Error fetching membership details: ' + error.message);
      }
    );
  }

  navigateToPreviousItem(): void {
    // Logic to navigate to the "CORRECT" field in the "AZBJ_MEMBERSHIP_DETAILS1" block
  }

  navigateToNextItem(): void {
    // Logic to iterate through all records in the "AZBJ_MEMBERSHIP_DETAILS" block
    // and set the focus to the "CORRECT" field in the "AZBJ_RIDER_DETAILS1" block for each record
  }
}
