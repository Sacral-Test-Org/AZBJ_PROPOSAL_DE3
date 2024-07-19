import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-family-details-insert',
  templateUrl: './family-details-insert.component.html',
  styleUrls: ['./family-details-insert.component.css']
})
export class FamilyDetailsInsertComponent implements OnInit {
  familyDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.familyDetailsForm = this.fb.group({
      memberName: ['', Validators.required],
      healthStatus: ['', Validators.required],
      memberNumber: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      causeOfDeath: [''],
      help: ['']
    });
  }

  onSubmit(): void {
    if (this.familyDetailsForm.valid) {
      // Logic to handle form submission
      console.log('Form Submitted', this.familyDetailsForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onHelp(): void {
    // Logic to provide help/assistance
    alert('Please fill out all required fields.');
  }
}