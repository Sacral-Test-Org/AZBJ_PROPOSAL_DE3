import { Component } from '@angular/core';
import { PolicyMemberService } from 'src/app/services/policy-member.service';
import { PolicyMember } from 'src/app/models/policy-member.model';

@Component({
  selector: 'app-policy-member',
  templateUrl: './policy-member.component.html',
  styleUrls: ['./policy-member.component.css']
})
export class PolicyMemberComponent {
  ageProofOptions: string[] = ['5', '8', 'No'];
  selectedAgeProof: string = '';
  dateOfBirth: string = '';
  weight: number = 0;
  height: number = 0;
  bmi: number = 0;
  addCoversCheckbox: boolean = false;
  selectedRelationshipType: string = '';
  ageProofID: string = '';
  memberName: string = '';
  memberId: number = 0;

  constructor(private policyMemberService: PolicyMemberService) {}

  handleAgeProofDropdown(): void {
    // Initialize the dropdown with values '5', '8', and 'No'
    this.ageProofOptions = ['5', '8', 'No'];
  }

  calculateAge(dateOfBirth: string): void {
    if (dateOfBirth) {
      const dob = new Date(dateOfBirth);
      const diff = Date.now() - dob.getTime();
      const ageDate = new Date(diff);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);
      // Display the calculated age in the PM_AGE field
      // Assuming there's a field in the component to display the age
      this.policyMemberService.updateAge(age);
    }
  }

  handleWeightInput(weight: number, height: number): void {
    if (!isNaN(weight) && weight.toFixed(1) && height > 0) {
      this.bmi = weight / ((height / 100) ** 2);
      // Update the BMI field
      this.policyMemberService.updateBMI(this.bmi);
      this.navigateToNextField();
    }
  }

  navigateToNextField(): void {
    // Set focus to the next input field (member's age proof)
    const nextField = document.getElementById('MEMBER_AGE_PROOF_ID');
    if (nextField) {
      nextField.focus();
    }
  }

  onAddCoversCheckboxChange(event: any): void {
    if (event.target.checked) {
      const currentMember = this.policyMemberService.getCurrentMember();
      this.policyMemberService.assignCoverageDetails(currentMember);
    }
  }

  onRelationshipTypeSelect(selectedRelationshipType: string): void {
    if (selectedRelationshipType) {
      const coverCode = this.policyMemberService.determineCoverCode(selectedRelationshipType);
      this.policyMemberService.updateCoverCode(coverCode);
      this.policyMemberService.manageSpouseDetails(selectedRelationshipType);
      this.navigateToSumAssuredField();
    }
  }

  navigateToSumAssuredField(): void {
    const sumAssuredField = document.getElementById('SUM_ASSURED');
    if (sumAssuredField) {
      sumAssuredField.focus();
    }
  }

  handleHeightInput(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    const value = parseFloat(input.value);
    if (!isNaN(value) && value.toFixed(1).length <= 5) {
      this.height = value;
      this.navigateToWeightField();
    }
  }

  navigateToWeightField(): void {
    const weightField = document.getElementById('WEIGHT');
    if (weightField) {
      weightField.focus();
    }
  }

  deleteMember(memberId: number): void {
    const currentMember = this.policyMemberService.getMemberById(memberId);
    const coverCode = currentMember.coverCode;
    this.policyMemberService.deleteMemberById(memberId);
    this.policyMemberService.deleteAssociatedRiderDetails(coverCode);
    this.policyMemberService.updateCoverCodes();
    this.policyMemberService.updateSpouseDetails();
  }

  handleAgeProofIDInput(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    this.ageProofID = input.value.toUpperCase().slice(0, 20);
    this.navigateToMemberRelationField();
  }

  navigateToMemberRelationField(): void {
    const memberRelationField = document.getElementById('MEMBER_RELATION');
    if (memberRelationField) {
      memberRelationField.focus();
    }
  }

  handleAddMemberClick(): void {
    if (this.memberName) {
      this.policyMemberService.navigateToLastRecord();
      this.policyMemberService.createNewRecord();
      this.setFocusToMemberNameField();
    }
  }

  setFocusToMemberNameField(): void {
    const memberNameField = document.getElementById('MEMBER_NAME');
    if (memberNameField) {
      memberNameField.focus();
    }
  }

  handleAgeField(): void {
    const ageField = document.getElementById('AGE');
    if (ageField) {
      ageField.setAttribute('readonly', 'true');
      this.navigateToMemberHeightField();
    }
  }

  navigateToMemberHeightField(): void {
    const memberHeightField = document.getElementById('MEMBER_HEIGHT');
    if (memberHeightField) {
      memberHeightField.focus();
    }
  }
}
