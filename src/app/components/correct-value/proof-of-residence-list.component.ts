import { Component } from '@angular/core';

@Component({
  selector: 'app-proof-of-residence-list',
  templateUrl: './proof-of-residence-list.component.html',
  styleUrls: ['./proof-of-residence-list.component.css']
})
export class ProofOfResidenceListComponent {
  proofOfResidenceList: string[] = [];

  constructor() {
    this.proofOfResidenceList = this.getProofOfResidenceList();
  }

  getProofOfResidenceList(): string[] {
    return ['PH', 'No'];
  }
}
