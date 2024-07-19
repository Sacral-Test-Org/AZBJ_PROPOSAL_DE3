import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Nominee } from 'src/app/models/control.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-multiple-nominee',
  templateUrl: './multiple-nominee.component.html',
  styleUrls: ['./multiple-nominee.component.css']
})
export class MultipleNomineeComponent implements OnInit {
  nominees: Nominee[] = [];
  hasMinor: boolean = false;
  errorMessage: string = '';

  constructor(private controlService: ControlService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.controlService.getNomineeDetails()
      .pipe(
        catchError(error => {
          this.errorMessage = 'An error occurred while fetching nominee details.';
          this.logger.error(this.errorMessage, error);
          return of([]);
        })
      )
      .subscribe((nominees: Nominee[]) => {
        this.nominees = nominees;
        this.checkForMinors();
      });
  }

  private checkForMinors(): void {
    const currentDate = new Date();
    this.nominees.forEach(nominee => {
      const nomineeDob = new Date(nominee.nominee_dob);
      const age = currentDate.getFullYear() - nomineeDob.getFullYear();
      if (age < 18) {
        this.hasMinor = true;
      }
    });
    this.toggleFields();
  }

  private toggleFields(): void {
    if (this.hasMinor) {
      // Enable appointee fields
    } else {
      // Disable appointee fields
    }
  }
}