import { Component, OnInit } from '@angular/core';
import { MembershipDetailsService } from 'src/app/services/membership-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership-sum-assured',
  templateUrl: './membership-sum-assured.component.html',
  styleUrls: ['./membership-sum-assured.component.css']
})
export class MembershipSumAssuredComponent implements OnInit {
  membershipSumAssured: string = '';

  constructor(private membershipDetailsService: MembershipDetailsService, private router: Router) {}

  ngOnInit(): void {
    this.initializeMembershipSumAssured();
  }

  initializeMembershipSumAssured(): void {
    const currentItem = this.getCurrentItem();
    const currentBlockContext = this.getCurrentBlockContext();
    this.membershipDetailsService.getMembershipSumAssured(currentItem, currentBlockContext).subscribe(data => {
      this.membershipSumAssured = data.toUpperCase();
    });
  }

  navigateToPreviousItem(): void {
    this.router.navigate(['azbj-membership-details1', { focus: 'CORRECT' }]);
  }

  navigateToNextItem(): void {
    const records = this.getAllRecordsInBlock('AZBJ_MEMBERSHIP_DETAILS');
    records.forEach(record => {
      this.router.navigate(['azbj-rider-details1', { focus: 'CORRECT' }]);
    });
  }

  getCurrentItem(): any {
    // Logic to get the current item
  }

  getCurrentBlockContext(): any {
    // Logic to get the current block context
  }

  getAllRecordsInBlock(blockName: string): any[] {
    // Logic to get all records in a block
  }
}