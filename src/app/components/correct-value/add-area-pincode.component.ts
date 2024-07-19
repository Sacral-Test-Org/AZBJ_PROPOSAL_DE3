import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-area-pincode',
  templateUrl: './add-area-pincode.component.html',
  styleUrls: ['./add-area-pincode.component.css']
})
export class AddAreaPincodeComponent {
  area: string = '';
  pincode: string = '';

  constructor(public dialogRef: MatDialogRef<AddAreaPincodeComponent>) {}

  onSave(): void {
    // Logic to save area and pincode details
    this.dialogRef.close({ area: this.area, pincode: this.pincode });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}