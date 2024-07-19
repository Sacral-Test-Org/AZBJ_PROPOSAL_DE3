import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-income-proof',
  templateUrl: './income-proof.component.html',
  styleUrls: ['./income-proof.component.css']
})
export class IncomeProofComponent {
  incomeProofForm: FormGroup;
  incomeProofOptions: string[] = ['PH', '5', '8', 'SL'];

  constructor(private fb: FormBuilder) {
    this.incomeProofForm = this.fb.group({
      incomeProof: ['']
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onIncomeProofChange(event: any): void {
    const selectedValue = event.target.value;
    this.incomeProofForm.get('incomeProof')?.setValue(selectedValue);
  }
}
