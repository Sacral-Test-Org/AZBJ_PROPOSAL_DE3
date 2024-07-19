import { Injectable } from '@angular/core';
import { FamilyDetailsService } from 'src/app/services/family-details.service';

@Injectable({
  providedIn: 'root'
})
export class AgePrepopulateService {
  constructor(private familyDetailsService: FamilyDetailsService) {}

  prepopulateAge(imageData: string): void {
    this.familyDetailsService.fetchAgeFromImage(imageData).subscribe(
      (age: number) => {
        if (age >= 0 && age <= 999) {
          // Assuming there's a method to set the age in the component
          // This should be replaced with actual implementation
          this.setAgeField(age);
        } else {
          console.error('Invalid age fetched from image');
        }
      },
      (error) => {
        console.error('Error fetching age from image', error);
      }
    );
  }

  private setAgeField(age: number): void {
    // Logic to set the age field in the component
    // This should be replaced with actual implementation
    console.log('Age prepopulated:', age);
  }
}
