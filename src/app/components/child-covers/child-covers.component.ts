import { Component } from '@angular/core';
import { ChildCoversService } from 'src/app/services/child-covers.service';
import { ControlComponent } from 'src/app/components/control/control.component';

@Component({
  selector: 'app-child-covers',
  templateUrl: './child-covers.component.html',
  styleUrls: ['./child-covers.component.css']
})
export class ChildCoversComponent {
  constructor(private childCoversService: ChildCoversService, private controlComponent: ControlComponent) {}

  handleAddChildButtonClick(): void {
    this.navigateToChildCoversSection();
    this.moveToLastRecord();
    this.createNewRecord();
  }

  onDeleteButtonClick(): void {
    this.childCoversService.deleteChildCovers();
  }

  calculateChildAge(dateOfBirth: string): number | null {
    if (this.isValidDate(dateOfBirth)) {
      return this.childCoversService.azbj_calc_entry_age(dateOfBirth);
    }
    return null;
  }

  handleExit(): void {
    this.childCoversService.refreshData();
    this.hideChildCoversSection();
    this.closeChildCoversWindow();
    this.controlComponent.navigateToControl();
  }

  private navigateToChildCoversSection(): void {
    // Logic to navigate to the child covers section
  }

  private moveToLastRecord(): void {
    // Logic to move to the last record in the child covers section
  }

  private createNewRecord(): void {
    // Logic to create a new record in the child covers section
  }

  private isValidDate(date: string): boolean {
    // Logic to validate the date
    return true;
  }

  private hideChildCoversSection(): void {
    // Logic to hide the child covers section
  }

  private closeChildCoversWindow(): void {
    // Logic to close the child covers window
  }
}