import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-details-help',
  templateUrl: './family-details-help.component.html',
  styleUrls: ['./family-details-help.component.css']
})
export class FamilyDetailsHelpComponent implements OnInit {
  helpContent: string;

  constructor() { }

  ngOnInit(): void {
    this.loadHelpContent();
  }

  private loadHelpContent(): void {
    this.helpContent = `
      <h2>Help for Entering Family Details</h2>
      <p>Use the following format to enter family details:</p>
      <ul>
        <li>Values should be separated by commas (",").</li>
        <li>Member strings should be separated by semicolons (";").</li>
      </ul>
      <p>The format includes the following details:</p>
      <ul>
        <li>V1: Family member (e.g., M for Mother, F for Father, etc.).</li>
        <li>V2: Health status (e.g., G for Good, D for Died).</li>
        <li>V3: Age (if the person is deceased, this is the age at death; multiple ages for the same relation can be separated by a hyphen, e.g., "24-27").</li>
        <li>V4: Life status (e.g., L for LA, P for PH).</li>
        <li>V5: Cause of death (e.g., D for Diabetes, C for Cancer, etc.).</li>
      </ul>
      <p>Sample string: "F,G,56,L;SI,G,42,P;M,D,54,L,ND;B,G,24-26,P"</p>
    `;
  }
}
