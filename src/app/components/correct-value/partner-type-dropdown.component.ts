import { Component, EventEmitter, Output } from '@angular/core';
import { CorrectValueComponent } from './correct-value.component';

@Component({
  selector: 'app-partner-type-dropdown',
  templateUrl: './partner-type-dropdown.component.html',
  styleUrls: ['./partner-type-dropdown.component.css']
})
export class PartnerTypeDropdownComponent {
  @Output() partnerTypeChange = new EventEmitter<string>();

  constructor(private correctValueComponent: CorrectValueComponent) {}

  onPartnerTypeChange(event: Event): void {
    const selectedPartnerType = (event.target as HTMLSelectElement).value;
    this.partnerTypeChange.emit(selectedPartnerType);
    this.correctValueComponent.handlePartnerTypeChange(selectedPartnerType);
  }
}
