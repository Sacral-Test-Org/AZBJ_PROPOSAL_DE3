import { Component } from '@angular/core';
import { PolicyMemberService } from 'src/app/services/policy-member.service';
import { PolicyMember } from 'src/app/models/policy-member.model';

@Component({
  selector: 'app-add-covers',
  templateUrl: './add-covers.component.html',
  styleUrls: ['./add-covers.component.css']
})
export class AddCoversComponent {
  currentPolicyMember: PolicyMember;

  constructor(private policyMemberService: PolicyMemberService) {}

  onAddCoversCheckboxChange(event: any): void {
    if (event.target.checked && event.target.value === 'Y') {
      this.retrieveCurrentPolicyMember();
      this.assignCoverageDetails();
    }
  }

  private retrieveCurrentPolicyMember(): void {
    // Logic to retrieve the current policy member record
    // This is a placeholder. Actual implementation will depend on how the current policy member is stored or retrieved.
    this.currentPolicyMember = this.policyMemberService.getCurrentPolicyMember();
  }

  private assignCoverageDetails(): void {
    if (this.currentPolicyMember) {
      const { coverCode, sumAssured, age } = this.currentPolicyMember;
      this.policyMemberService.assignCoverageDetails(coverCode, sumAssured, age);
    }
  }
}
