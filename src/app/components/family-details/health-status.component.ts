import { Component, OnInit } from '@angular/core';
import { FamilyDetailsService } from '../services/family-details.service';

@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.css']
})
export class HealthStatusComponent implements OnInit {
  healthStatus: string = '';

  constructor(private familyDetailsService: FamilyDetailsService) {}

  ngOnInit(): void {
    this.fetchPreloadedData();
  }

  handleHealthStatusInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    if (input === 'G') {
      this.healthStatus = 'GOOD';
      this.navigateToNextField();
    }
  }

  fetchPreloadedData(): void {
    this.familyDetailsService.getPreloadedData().subscribe(data => {
      if (data && data.healthStatus) {
        this.healthStatus = data.healthStatus;
      }
    });
  }

  validateHealthStatus(): void {
    if (this.healthStatus === 'G') {
      this.healthStatus = 'GOOD';
    }
  }

  navigateToNextField(): void {
    const nextField = document.getElementById('ageDiedField');
    if (nextField) {
      nextField.focus();
    }
  }

  handleHealthStatusChange(event: KeyboardEvent): void {
    if ((event.target as HTMLInputElement).value === 'G') {
      this.healthStatus = 'GOOD';
    }
  }
}