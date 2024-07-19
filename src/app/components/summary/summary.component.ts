import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summaryForm: FormGroup;
  premiumFrequencyOptions = [
    { label: '5', value: '5' },
    { label: '8', value: '8' },
    { label: 'No', value: 'SL' }
  ];
  genderOptions = [
    'IP', '5', '8', '10', 'LA', 'No', 'Other'
  ];

  constructor(private fb: FormBuilder) {
    this.summaryForm = this.fb.group({
      premiumFrequency: [{ value: '5', disabled: true }],
      gender: [{ value: 'M', disabled: true }]
    });
  }

  ngOnInit(): void {
    this.summaryForm.get('gender').valueChanges.subscribe(value => {
      this.handleGenderInput(value);
    });
  }

  handleGenderInput(value: string): void {
    const upperCaseValue = value.toUpperCase().slice(0, 20);
    this.summaryForm.get('gender').setValue(upperCaseValue, { emitEvent: false });
  }
}
