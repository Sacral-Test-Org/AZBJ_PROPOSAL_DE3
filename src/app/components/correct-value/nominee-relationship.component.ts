import { Component } from '@angular/core';
import { CorrectValueService } from '../../services/correct-value.service';
import { CorrectValue } from '../../models/correct-value.model';

@Component({
  selector: 'app-nominee-relationship',
  templateUrl: './nominee-relationship.component.html',
  styleUrls: ['./nominee-relationship.component.css']
})
export class NomineeRelationshipComponent {
  relationshipOptions: string[] = ['IP', '8', 'NO', 'LA', 'SL'];
  selectedRelationship: string = '';

  constructor(private correctValueService: CorrectValueService) {}

  handleDropdownChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedRelationship = target.value.toUpperCase();
    this.correctValueService.saveSelectedValue(this.selectedRelationship);
  }
}
