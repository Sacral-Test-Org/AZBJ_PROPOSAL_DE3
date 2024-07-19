import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { AML } from 'src/app/models/control.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aml-information',
  templateUrl: './aml-information.component.html',
  styleUrls: ['./aml-information.component.css']
})
export class AMLInformationComponent implements OnInit {
  amlForm: FormGroup;
  proofDescriptions: any[] = [];
  controlFlag: string;

  constructor(private fb: FormBuilder, private controlService: ControlService) { }

  ngOnInit(): void {
    this.amlForm = this.fb.group({
      documentType: ['', Validators.required],
      requestCode: ['', Validators.required],
      documentDescription: ['', Validators.required],
      information: ['', Validators.required],
      proofType: ['', Validators.required],
      documentId: ['', Validators.required],
      documentDate: ['', Validators.required],
      oldPolicyReference: [''],
      proofDescription: [''],
      documentRemarks: ['', [Validators.maxLength(300)]]
    });
  }

  handleAMLInformation() {
    if (this.amlForm.valid) {
      const amlInfo: AML = this.amlForm.value;
      this.controlService.saveAMLInformation(amlInfo).subscribe(
        response => {
          alert('AML Information saved successfully');
        },
        error => {
          this.handleError(error);
        }
      );
    }
  }

  fetchProofDescription(proofType: string) {
    this.controlService.getProofDescription(proofType).subscribe(
      response => {
        this.proofDescriptions = response;
        const selectedProof = this.proofDescriptions.find(proof => proof.proof_type === proofType);
        if (selectedProof) {
          this.amlForm.patchValue({ proofDescription: selectedProof.proof_desc });
        }
      },
      error => {
        this.handleError(error);
      }
    );
  }

  handleDocumentRemarksInput(event: KeyboardEvent) {
    const maxLength = 300;
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLength) {
      input.value = input.value.substring(0, maxLength);
    }
    if (event.key === 'Enter') {
      const biNoField = document.getElementById('bi_no');
      if (biNoField) {
        biNoField.focus();
      }
    }
  }

  checkValueFieldEditability(documentType: string) {
    const nonEditableTypes = [
      'LEGAL_NAME', 'PERMANENT_ADDRESS', 'CURRENT_ADDRESS', 'SOURCE_OF_FUNDS3',
      'COMPANY_NAME', 'COMPANY_ADDRESS', 'PARTNERSHIP_FIRM_NAME',
      'PARTNERSHIP_FIRM_ADDRESS', 'TRUSTEES_NAME', 'TRUSTEES_ADDRESSES'
    ];

    this.controlService.getControlFlag().subscribe(
      flag => {
        this.controlFlag = flag;
        const valueField = document.getElementById('value_field') as HTMLInputElement;
        if (nonEditableTypes.includes(documentType)) {
          valueField.readOnly = true;
        } else if (this.controlFlag === 'Y') {
          valueField.readOnly = false;
        } else {
          valueField.readOnly = true;
        }
      },
      error => {
        this.handleError(error);
      }
    );
  }

  private handleError(error: any) {
    const errorCode = error.status;
    let errorMessage = 'An error occurred';
    switch (errorCode) {
      case 40212:
        errorMessage = 'Specific error message for 40212';
        break;
      case 40102:
        errorMessage = 'Specific error message for 40102';
        break;
      case 41058:
        errorMessage = 'Specific error message for 41058';
        break;
      default:
        errorMessage = 'An unexpected error occurred';
    }
    alert(errorMessage);
  }
}
