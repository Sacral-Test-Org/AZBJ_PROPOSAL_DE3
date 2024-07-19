import { Component, OnInit } from '@angular/core';
import { CPCurrentApplnService } from 'src/app/services/cp-current-appln.service';
import { CPCurrentAppln } from 'src/app/models/cp-current-appln.model';

@Component({
  selector: 'app-cp-current-appln',
  templateUrl: './cp-current-appln.component.html',
  styleUrls: ['./cp-current-appln.component.css']
})
export class CPCurrentApplnComponent implements OnInit {
  currentApplicant: CPCurrentAppln;

  constructor(private cpCurrentApplnService: CPCurrentApplnService) { }

  ngOnInit(): void {
    this.fetchCurrentApplicantDetails();
  }

  fetchCurrentApplicantDetails(): void {
    this.cpCurrentApplnService.getCurrentApplicantDetails().subscribe(
      (data: CPCurrentAppln) => {
        this.currentApplicant = data;
      },
      (error) => {
        console.error('Error fetching current applicant details', error);
      }
    );
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
