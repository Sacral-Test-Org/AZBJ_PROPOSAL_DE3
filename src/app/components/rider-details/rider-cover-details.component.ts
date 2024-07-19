import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RiderDetailsService } from 'src/app/services/rider-details.service';

@Component({
  selector: 'app-rider-cover-details',
  templateUrl: './rider-cover-details.component.html',
  styleUrls: ['./rider-cover-details.component.css']
})
export class RiderCoverDetailsComponent implements OnInit {
  riderCoverForm: FormGroup;
  riderCoverDetails: string = '';
  predefinedValues: string[] = ['5', '8', '10', 'No'];

  constructor(private fb: FormBuilder, private riderDetailsService: RiderDetailsService) {
    this.riderCoverForm = this.fb.group({
      coverDescription: [{ value: '', disabled: true }]
    });
  }

  ngOnInit(): void {
    this.getRiderCoverDetails();
  }

  getRiderCoverDetails(): void {
    this.riderDetailsService.getRiderCoverDetails().subscribe(details => {
      this.riderCoverDetails = details.toUpperCase();
      this.riderCoverForm.patchValue({ coverDescription: this.riderCoverDetails });
    });
  }

  navigateToNextItem(): void {
    // Logic to navigate to the next item in the form
  }
}
