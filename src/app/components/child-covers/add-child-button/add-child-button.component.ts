import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChildCoversService } from '../services/child-covers.service';

@Component({
  selector: 'app-add-child-button',
  templateUrl: './add-child-button.component.html',
  styleUrls: ['./add-child-button.component.css']
})
export class AddChildButtonComponent {
  constructor(private router: Router, private childCoversService: ChildCoversService) {}

  handleAddChildButtonClick(): void {
    // Navigate to the child covers section
    this.router.navigate(['/child-covers']).then(() => {
      // Move to the last record in the child covers section
      this.childCoversService.moveToLastRecord();
      // Create a new record for user input
      this.childCoversService.createNewRecord();
    });
  }
}
