import { Component, Output, EventEmitter } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { CorrectValue } from 'src/app/models/correct-value.model';

@Component({
  selector: 'app-age-proof-list',
  templateUrl: './age-proof-list.component.html',
  styleUrls: ['./age-proof-list.component.css']
})
export class AgeProofListComponent {
  @Output() ageProofTypeSelected = new EventEmitter<string>();
  ageProofTypes: string[] = ['IP', '5', '8', '10', 'N', '1', 'SL'];
  selectedAgeProofType: string;

  constructor(private correctValueService: CorrectValueService) {}

  handleAgeProofList(): void {
    // Logic to handle the 'IP Age Proof' list item
    this.correctValueService.getAgeProofTypes().subscribe((data: CorrectValue[]) => {
      this.ageProofTypes = data.map(item => item.value);
    });
  }

  selectAgeProofType(ageProofType: string): void {
    this.selectedAgeProofType = ageProofType;
    this.ageProofTypeSelected.emit(this.selectedAgeProofType);
  }
}
