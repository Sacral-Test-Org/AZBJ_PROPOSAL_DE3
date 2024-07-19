import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { AadhaarDetails } from 'src/app/models/control.model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-aadhaar-details',
  templateUrl: './aadhaar-details.component.html',
  styleUrls: ['./aadhaar-details.component.css']
})
export class AadhaarDetailsComponent implements OnInit {
  aadhaarDetails: AadhaarDetails | null = null;
  errorMessage: string | null = null;

  constructor(private controlService: ControlService, private logger: NGXLogger) {}

  ngOnInit(): void {
    // Assuming aadharNumber is fetched from some other part of the application
    const aadharNumber = '123456789012';
    this.getAadharDetails(aadharNumber);
  }

  getAadharDetails(aadharNumber: string): void {
    this.controlService.getAadharDetails(aadharNumber).subscribe(
      (details: AadhaarDetails) => {
        this.aadhaarDetails = details;
        this.errorMessage = null;
      },
      (error) => {
        this.logger.error('Error fetching Aadhaar details', error);
        this.errorMessage = 'Aadhaar details not available or invalid.';
      }
    );
  }

  displayAadhaarDetails(aadhaarDetails: AadhaarDetails): void {
    this.aadhaarDetails = aadhaarDetails;
  }
}
