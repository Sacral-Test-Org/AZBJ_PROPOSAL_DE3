import { Component, OnInit } from '@angular/core';
import { FamilyDetailsService } from 'src/app/services/family-details.service';
import { FamilyDetails } from 'src/app/models/family-details.model';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit {
  familyDetails: FamilyDetails[] = [];
  errorMessage: string = '';

  constructor(private familyDetailsService: FamilyDetailsService) {}

  ngOnInit(): void {
    this.getFamilyDetails();
  }

  getFamilyDetails(): void {
    this.familyDetailsService.getFamilyDetails().subscribe(
      (data: FamilyDetails[]) => {
        this.familyDetails = data;
      },
      (error) => {
        this.errorMessage = 'Failed to load family details';
      }
    );
  }

  addOrUpdateFamilyMember(familyMember: FamilyDetails): void {
    this.familyDetailsService.saveFamilyDetails(familyMember).subscribe(
      () => {
        this.getFamilyDetails();
      },
      (error) => {
        this.errorMessage = 'Failed to save family member details';
      }
    );
  }

  validateInputs(): boolean {
    // Implement validation logic here
    return true;
  }

  showHelp(): void {
    // Implement help display logic here
  }

  onHealthStatusChange(event: any): void {
    if (event.target.value === 'G') {
      event.target.value = 'GOOD';
      this.navigateToNextField();
    }
  }

  validateHealthStatus(value: string): void {
    if (value === 'G') {
      value = 'GOOD';
    }
  }

  loadImage(currentItem: string, currentBlock: string, proposalType: string): void {
    this.familyDetailsService.fetchImage(currentItem, currentBlock, proposalType).subscribe(
      (imageData) => {
        // Logic to display image
      },
      (error) => {
        this.errorMessage = 'Failed to load image';
      }
    );
  }

  validateAge(age: number): boolean {
    if (age < 0) {
      this.errorMessage = 'Age cannot be less than zero';
      return false;
    }
    return true;
  }

  preloadAge(imageData: any): void {
    this.familyDetailsService.fetchAgeFromImage(imageData).subscribe(
      (age) => {
        // Logic to set age field
      },
      (error) => {
        this.errorMessage = 'Failed to preload age';
      }
    );
  }

  toggleAgeVisibility(condition: boolean): void {
    // Logic to show or hide age field
  }

  processShortcut(shortcutString: string): void {
    // Logic to parse and populate family details fields
  }

  addFamilyMember(familyMember: FamilyDetails): void {
    this.familyDetailsService.addFamilyMember(familyMember).subscribe(
      () => {
        this.getFamilyDetails();
      },
      (error) => {
        this.errorMessage = 'Failed to add family member';
      }
    );
  }

  updateFamilyMember(familyMember: FamilyDetails): void {
    this.familyDetailsService.updateFamilyMember(familyMember).subscribe(
      () => {
        this.getFamilyDetails();
      },
      (error) => {
        this.errorMessage = 'Failed to update family member';
      }
    );
  }

  deleteFamilyMember(familyMemberId: number): void {
    if (this.confirmDeletion()) {
      this.familyDetailsService.deleteFamilyMember(familyMemberId).subscribe(
        () => {
          this.getFamilyDetails();
        },
        (error) => {
          this.errorMessage = 'Failed to delete family member';
        }
      );
    }
  }

  confirmDeletion(): boolean {
    return confirm('Are you sure you want to delete this family member?');
  }

  handleHealthStatusInput(event: any): void {
    if (event.target.value === 'G') {
      event.target.value = 'GOOD';
      this.navigateToNextField();
    }
    this.fetchPreloadedData();
  }

  fetchPreloadedData(): void {
    this.familyDetailsService.getPreloadedData().subscribe(
      (data) => {
        // Logic to pre-load data
      },
      (error) => {
        this.errorMessage = 'Failed to fetch preloaded data';
      }
    );
  }

  handleAgeInput(event: any): void {
    const age = event.target.value;
    if (!this.validateAge(age)) {
      return;
    }
    this.familyDetailsService.fetchImageData().subscribe(
      (imageData) => {
        // Logic to pre-populate age field
      },
      (error) => {
        this.errorMessage = 'Failed to fetch image data';
      }
    );
  }

  closeButtonHandler(): void {
    // Logic to close the window
  }

  handleCauseOfDeathNavigation(currentItem: string): void {
    this.familyDetailsService.loadImage(currentItem).subscribe(
      (imageData) => {
        // Logic to display image
      },
      (error) => {
        this.errorMessage = 'Failed to load image';
      }
    );
    this.promptAddMoreMembers();
  }

  promptAddMoreMembers(): void {
    if (confirm('Do you wish to add more members?')) {
      // Logic to navigate to the next tab
    } else {
      // Logic to move to the next record
    }
  }

  applyVisualAttributes(currentItem: string): void {
    // Logic to apply visual attributes
  }

  loadFamilyDetails(context: any): void {
    this.familyDetailsService.getFamilyDetails(context).subscribe(
      (data) => {
        // Logic to load family details
      },
      (error) => {
        this.errorMessage = 'Failed to load family details';
      }
    );
  }

  determineContext(): any {
    // Logic to determine current context
    return {};
  }

  onNavigateToAgeDiedField(): void {
    this.familyDetailsService.fetchImage().subscribe(
      (imageData) => {
        // Logic to display image
      },
      (error) => {
        this.errorMessage = 'Failed to fetch image';
      }
    );
  }

  navigateToPreviousItem(currentItem: string, currentBlock: string): void {
    this.familyDetailsService.fetchPreviousItem(currentItem, currentBlock).subscribe(
      (previousItem) => {
        // Logic to update UI with previous item
      },
      (error) => {
        this.errorMessage = 'Failed to fetch previous item';
      }
    );
  }

  handleNavigation(): void {
    // Logic to handle navigation
  }

  updateFamilyDetails(familyDetails: FamilyDetails): void {
    this.familyDetailsService.updateFamilyDetails(familyDetails).subscribe(
      () => {
        this.getFamilyDetails();
      },
      (error) => {
        this.errorMessage = 'Failed to update family details';
      }
    );
  }

  insertFamilyDetails(familyDetails: FamilyDetails): void {
    this.familyDetailsService.insertFamilyDetails(familyDetails).subscribe(
      () => {
        this.getFamilyDetails();
      },
      (error) => {
        this.errorMessage = 'Failed to insert family details';
      }
    );
  }

  getHelp(): void {
    // Logic to display help content
  }

  validateAgeField(age: number): void {
    if (isNaN(age)) {
      this.errorMessage = 'Only numeric values are allowed';
    } else if (age < 0) {
      this.errorMessage = 'Age cannot be less than zero';
    }
  }

  navigateToNextField(): void {
    // Logic to navigate to the next field
  }

  fetchImageDetails(currentBlock: string, currentItem: string): void {
    this.familyDetailsService.fetchStripNumber(currentBlock, currentItem).subscribe(
      (stripNumber) => {
        // Logic to display image based on strip number
      },
      (error) => {
        this.errorMessage = 'Failed to fetch strip number';
      }
    );
  }

  onFamilyMemberFieldInteract(event: any): void {
    this.familyDetailsService.fetchFamilyMemberDetails().subscribe(
      (data) => {
        // Logic to update component state with fetched data
      },
      (error) => {
        this.errorMessage = 'Failed to fetch family member details';
      }
    );
  }

  prepopulateAge(imageData: string): void {
    this.familyDetailsService.fetchAgeFromImage(imageData).subscribe(
      (age) => {
        // Logic to prepopulate age field
      },
      (error) => {
        this.errorMessage = 'Failed to fetch age from image';
      }
    );
  }

  onNavigateToMemberNumber(): void {
    this.familyDetailsService.fetchImage().subscribe(
      (imageData) => {
        // Logic to display image
      },
      (error) => {
        this.errorMessage = 'Failed to fetch image';
      }
    );
  }

  handleFocus(event: any): void {
    if (event.target.tagName !== 'BUTTON') {
      event.target.focus();
    }
  }

  validateInputs(companyName: string, sumAssured: number, premium: number): boolean {
    if (companyName.length > 100) {
      this.errorMessage = 'Company name cannot exceed 100 characters';
      return false;
    }
    if (isNaN(sumAssured) || isNaN(premium)) {
      this.errorMessage = 'Sum Assured and Premium must be numeric';
      return false;
    }
    return true;
  }

  addMember(): void {
    this.familyDetailsService.addMember().subscribe(
      () => {
        this.getFamilyDetails();
      },
      (error) => {
        this.errorMessage = 'Failed to add member';
      }
    );
  }

  deleteMember(memberId: number): void {
    this.familyDetailsService.deleteMember(memberId).subscribe(
      () => {
        this.getFamilyDetails();
      },
      (error) => {
        this.errorMessage = 'Failed to delete member';
      }
    );
  }

  calculateAge(dob: string): number {
    const birthDate = new Date(dob);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  calculateBMI(height: number, weight: number): number {
    return weight / ((height / 100) * (height / 100));
  }

  handleGenderSelection(selectedGender: string): void {
    if (selectedGender.length > 6) {
      this.errorMessage = 'Gender cannot exceed 6 characters';
      return;
    }
    selectedGender = selectedGender.toUpperCase();
    this.navigateToNextField();
  }
}