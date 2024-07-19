import { Component } from '@angular/core';

@Component({
  selector: 'app-gender-dropdown',
  templateUrl: './gender-dropdown.component.html',
  styleUrls: ['./gender-dropdown.component.css']
})
export class GenderDropdownComponent {
  genderOptions = [
    { value: '5', label: '5' },
    { value: '8', label: '8' },
    { value: 'N', label: 'No' },
    { value: 'SL', label: 'No' }
  ];

  selectedGender: string;

  constructor() {
    this.selectedGender = this.genderOptions[0].value;
  }

  onGenderChange(event: any) {
    this.selectedGender = event.target.value;
  }
}
