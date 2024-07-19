import { Component } from '@angular/core';
import { PolicyMemberService } from 'src/app/services/policy-member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relationship-type',
  templateUrl: './relationship-type.component.html',
  styleUrls: ['./relationship-type.component.css']
})
export class RelationshipTypeComponent {
  selectedRelationshipType: string | null = null;

  constructor(private policyMemberService: PolicyMemberService, private router: Router) {}

  onSelect(selectedRelationshipType: string): void {
    if (selectedRelationshipType) {
      this.selectedRelationshipType = selectedRelationshipType;
      this.policyMemberService.updateCoverCode(selectedRelationshipType).subscribe(
        (response) => {
          if (response.success) {
            // Handle spouse details based on the presence of a spouse
            if (selectedRelationshipType === 'Spouse') {
              this.policyMemberService.addSpouseDetails();
            } else {
              this.policyMemberService.removeSpouseDetails();
            }
            // Navigate to the "Sum Assured" field
            this.router.navigate(['/sum-assured']);
          }
        },
        (error) => {
          console.error('Error updating cover code:', error);
        }
      );
    }
  }
}
