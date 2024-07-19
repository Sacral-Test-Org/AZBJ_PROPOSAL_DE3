import { Injectable } from '@angular/core';
import { AssesseeType } from '../models/assessee-type.model';

@Injectable({
  providedIn: 'root'
})
export class AssesseeTypeService {
  private assesseeTypes: AssesseeType[] = [
    { type: 'PH' },
    { type: '5' },
    { type: '8' },
    { type: 'SL' }
  ];

  getAssesseeTypes(): AssesseeType[] {
    return this.assesseeTypes.map(assesseeType => ({
      type: assesseeType.type.toUpperCase()
    }));
  }

  addAssesseeType(assesseeType: string): void {
    this.assesseeTypes.push({ type: assesseeType.toUpperCase() });
  }

  updateAssesseeType(index: number, assesseeType: string): void {
    if (index >= 0 && index < this.assesseeTypes.length) {
      this.assesseeTypes[index].type = assesseeType.toUpperCase();
    }
  }
}
