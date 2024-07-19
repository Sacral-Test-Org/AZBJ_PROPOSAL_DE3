import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-gender-field',
  templateUrl: './gender-field.component.html',
  styleUrls: ['./gender-field.component.css']
})
export class GenderFieldComponent implements OnInit {
  genderForm: FormGroup;
  genderOptions: string[] = ['M', 'F', 'O'];

  constructor(private router: Router, private http: HttpClient, private logger: NGXLogger) {
    this.genderForm = new FormGroup({
      gender: new FormControl({ value: '', disabled: true })
    });
  }

  ngOnInit(): void {
    this.loadGenderOptions();
  }

  loadGenderOptions(): void {
    this.genderForm.get('gender')?.setValue(this.genderOptions[0]);
  }

  navigateToNextField(): void {
    // Logic to navigate to the next field based on the current field and block
    this.router.navigate(['next-field']);
  }

  navigateToPreviousField(): void {
    // Logic to navigate to the previous field based on the current field and block
    this.router.navigate(['previous-field']);
  }

  loadImageData(): void {
    // Logic to load relevant data from an image file based on the current field and block
    this.http.get('path/to/image/data').subscribe(data => {
      this.logger.log('Image data loaded', data);
    });
  }

  updateVisualAttributes(): void {
    // Logic to update the visual attributes of the field based on the current block and item
    this.logger.log('Visual attributes updated');
  }
}
