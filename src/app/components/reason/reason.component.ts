import { Component, OnInit } from '@angular/core';
import { ReasonService } from 'src/app/services/reason.service';
import { Reason } from 'src/app/models/reason.model';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {
  reasons: Reason[] = [];
  reasonComment: string = '';

  constructor(private reasonService: ReasonService) {}

  ngOnInit(): void {
    this.getReasons();
  }

  getReasons(): void {
    this.reasonService.getReasons().subscribe((data: Reason[]) => {
      this.reasons = data;
    });
  }

  addReason(reason: string): void {
    this.reasonService.addReason(reason).subscribe((newReason: Reason) => {
      this.reasons.push(newReason);
    });
  }

  updateReason(reason: Reason): void {
    this.reasonService.updateReason(reason).subscribe((updatedReason: Reason) => {
      const index = this.reasons.findIndex(r => r.id === updatedReason.id);
      if (index !== -1) {
        this.reasons[index] = updatedReason;
      }
    });
  }

  handleRecheck(): void {
    // Logic to review the entered reason comment
    console.log('Reviewing reason comment:', this.reasonComment);
  }

  handleProceed(): void {
    this.reasonService.saveReasonComment(this.reasonComment).subscribe(() => {
      console.log('Reason comment saved successfully');
      // Proceed with the next steps
    });
  }
}
