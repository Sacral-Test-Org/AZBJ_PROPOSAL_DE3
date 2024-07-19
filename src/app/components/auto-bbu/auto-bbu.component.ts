import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auto-bbu',
  templateUrl: './auto-bbu.component.html',
  styleUrls: ['./auto-bbu.component.css']
})
export class AutoBbuComponent implements OnInit {
  autoBbuForm: FormGroup;
  reasonOptions: string[] = ['SON', '5', '8', '10', 'SL', 'AUTO'];

  constructor(private fb: FormBuilder) {
    this.autoBbuForm = this.fb.group({
      manualUnderwriting: ['N'],
      reason: [{ value: '', disabled: true }],
      comments: [{ value: '', disabled: true }]
    });
  }

  ngOnInit(): void {
    this.autoBbuForm.get('manualUnderwriting')?.valueChanges.subscribe(value => {
      this.onManualUnderwritingChange(value);
    });
  }

  onManualUnderwritingChange(value: string): void {
    if (value === 'Y') {
      this.autoBbuForm.get('reason')?.enable();
      this.autoBbuForm.get('comments')?.enable();
    } else {
      this.clearFields();
      this.autoBbuForm.get('reason')?.disable();
      this.autoBbuForm.get('comments')?.disable();
    }
  }

  clearFields(): void {
    this.autoBbuForm.get('reason')?.setValue('');
    this.autoBbuForm.get('comments')?.setValue('');
  }

  onReasonChange(event: any): void {
    const selectedValue = event.target.value;
    // Handle the selected value if needed
  }

  handleManualUnderwritingChange(event: any): void {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.autoBbuForm.get('reason')?.enable();
      this.autoBbuForm.get('comments')?.enable();
    } else {
      this.clearFields();
      this.autoBbuForm.get('reason')?.disable();
      this.autoBbuForm.get('comments')?.disable();
    }
  }

  handleCheckboxChange(event: any): void {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.autoBbuForm.get('reason')?.enable();
      this.autoBbuForm.get('comments')?.enable();
    } else {
      this.clearFields();
      this.autoBbuForm.get('reason')?.disable();
      this.autoBbuForm.get('comments')?.disable();
    }
  }
}
