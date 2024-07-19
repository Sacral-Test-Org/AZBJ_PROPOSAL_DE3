import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviousPolicyDetailsNavigationService {

  constructor() { }

  clearVisualAttributes(currentField: any): void {
    // Logic to clear visual attributes from the current field
    if (currentField) {
      currentField.style.border = 'none';
      currentField.style.backgroundColor = 'transparent';
    }
  }

  navigateToNextItem(currentField: any): void {
    // Logic to navigate to the next item in the sequence
    if (currentField) {
      const formElements = document.querySelectorAll('input, select, textarea');
      const currentIndex = Array.prototype.indexOf.call(formElements, currentField);
      if (currentIndex > -1 && currentIndex < formElements.length - 1) {
        const nextElement = formElements[currentIndex + 1];
        if (nextElement) {
          nextElement.focus();
        }
      }
    }
  }

  navigateNext(): void {
    // Logic to clear visual attributes from the current item and navigate to the next item
    const currentField = document.activeElement;
    this.clearVisualAttributes(currentField);
    this.navigateToNextItem(currentField);
  }

  promptUserForMorePolicies(): void {
    // Logic to prompt the user with a question asking if they wish to add more policies
    const userResponse = confirm('Do you wish to add more Policies?');
    if (userResponse) {
      this.navigateToNextItem(document.activeElement);
    } else {
      // Logic to handle proposal type and number of pages
      // Placeholder for actual implementation
      console.log('Handle proposal type and number of pages');
    }
  }
}
