import { Component } from '@angular/core';
import { CPDataService } from 'src/app/services/cp-data.service';
import { CPData } from 'src/app/models/cp-data.model';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-save-apply-button',
  templateUrl: './save-apply-button.component.html',
  styleUrls: ['./save-apply-button.component.css']
})
export class SaveApplyButtonComponent {
  constructor(
    private cpDataService: CPDataService,
    private router: Router,
    private logger: NGXLogger
  ) {}

  onSaveAndApply(): void {
    this.logger.debug('Save and Apply button pressed');
    this.cpDataService.saveAndApply().subscribe(
      (response) => {
        this.logger.debug('Save and Apply successful', response);
        // Handle successful response and update the front-end accordingly
        this.router.navigate(['/next-page']); // Navigate to the next page or appropriate section
      },
      (error) => {
        this.logger.error('Save and Apply failed', error);
        // Handle error response and show appropriate message to the user
      }
    );
  }
}
