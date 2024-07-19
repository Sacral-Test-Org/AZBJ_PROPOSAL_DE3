import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ResidenceProof } from '../../models/residence-proof.model';

@Component({
  selector: 'app-residence-proof-list',
  templateUrl: './residence-proof-list.component.html',
  styleUrls: ['./residence-proof-list.component.css']
})
export class ResidenceProofListComponent implements OnInit {
  residenceProofForm: FormGroup;
  predefinedValues: string[] = ['IP', 'SON', 'PH', 'SL'];
  isVisible: boolean = false;

  constructor(private fb: FormBuilder) {
    this.residenceProofForm = this.fb.group({
      residenceProofs: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.addPredefinedValues();
  }

  get residenceProofs(): FormArray {
    return this.residenceProofForm.get('residenceProofs') as FormArray;
  }

  addPredefinedValues(): void {
    this.predefinedValues.forEach(value => {
      this.residenceProofs.push(new FormControl(value));
    });
  }

  addResidenceProof(value: string): void {
    this.residenceProofs.push(new FormControl(value));
  }

  removeResidenceProof(index: number): void {
    this.residenceProofs.removeAt(index);
  }

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  save(): void {
    const residenceProofs: ResidenceProof[] = this.residenceProofs.value;
    // Logic to save residenceProofs
  }
}
