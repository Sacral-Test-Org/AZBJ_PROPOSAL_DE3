import { Injectable } from '@angular/core';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationLevels: string[] = [
    'PH',
    '5',
    '8',
    'SL',
    'EDUCATION'
  ];

  constructor() {}

  getEducationLevels(): string[] {
    return this.educationLevels;
  }
}
