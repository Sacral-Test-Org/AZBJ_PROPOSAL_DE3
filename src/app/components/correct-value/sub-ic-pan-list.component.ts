import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-ic-pan-list',
  templateUrl: './sub-ic-pan-list.component.html',
  styleUrls: ['./sub-ic-pan-list.component.css']
})
export class SubICPanListComponent {
  predefinedValues: string[] = ['5', '8', 'LA', 'No'];

  displayPredefinedValues(): void {
    alert('Predefined Values: ' + this.predefinedValues.join(', '));
  }
}
