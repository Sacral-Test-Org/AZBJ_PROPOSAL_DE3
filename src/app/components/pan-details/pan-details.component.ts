import { Component, OnInit } from '@angular/core';
import { PanApprovalService } from '../../services/pan-approval.service';
import { PanDetails } from '../../models/pan-details.model';

@Component({
  selector: 'app-pan-details',
  templateUrl: './pan-details.component.html',
  styleUrls: ['./pan-details.component.css']
})
export class PanDetailsComponent implements OnInit {
  panDetails: PanDetails[] = [];

  constructor(private panApprovalService: PanApprovalService) {}

  ngOnInit(): void {
    this.getPanDetails();
  }

  getPanDetails(): void {
    this.panApprovalService.getPanDetails().subscribe((data: PanDetails[]) => {
      this.panDetails = data;
    });
  }

  savePanDetails(): void {
    this.panApprovalService.updatePanDetails(this.panDetails).subscribe(() => {
      alert('PAN details updated successfully');
    });
  }
}
