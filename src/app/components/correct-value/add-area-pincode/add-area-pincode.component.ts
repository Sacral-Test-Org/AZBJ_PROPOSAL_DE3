import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-area-pincode',
  templateUrl: './add-area-pincode.component.html',
  styleUrls: ['./add-area-pincode.component.css']
})
export class AddAreaPincodeComponent implements OnInit {
  areaPincodeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.areaPincodeForm = this.fb.group({
      area: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  onSubmit(): void {
    if (this.areaPincodeForm.valid) {
      const formValues = this.areaPincodeForm.value;
      console.log('Form Submitted', formValues);
      // Handle form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }
}
