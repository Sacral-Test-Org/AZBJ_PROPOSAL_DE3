import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ifsc-lov',
  templateUrl: './ifsc-lov.component.html',
  styleUrls: ['./ifsc-lov.component.css']
})
export class IfscLovComponent {
  @Output() ifscCodeSelected = new EventEmitter<string>();

  ifscCodes: string[] = [
    'IFSC001', 'IFSC002', 'IFSC003', 'IFSC004' // Example IFSC codes
  ];

  selectIfscCode(ifscCode: string) {
    this.ifscCodeSelected.emit(ifscCode);
  }
}
