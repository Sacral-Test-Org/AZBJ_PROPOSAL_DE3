import { Component } from '@angular/core';
import { PolicyMemberService } from '../../../services/policy-member.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-member-button',
  templateUrl: './add-member-button.component.html',
  styleUrls: ['./add-member-button.component.css']
})
export class AddMemberButtonComponent {
  constructor(private policyMemberService: PolicyMemberService, private dialog: MatDialog) {}

  handleButtonClick(): void {
    this.policyMemberService.navigateToLastRecord().subscribe(() => {
      this.policyMemberService.createNewRecord().subscribe(() => {
        this.policyMemberService.setFocusToMemberNameField();
      });
    });
  }

  handleNextItemNavigation(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: 'Do you wish to add more members?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.policyMemberService.moveToNextRecord().subscribe(() => {
          this.policyMemberService.setFocusToMemberRelationField();
        });
      } else {
        this.policyMemberService.populateMemberQuestionnaire().subscribe(() => {
          this.policyMemberService.setFocusToCorrectFieldInQuestionnaire();
        });
      }
    });
  }
}

@Component({
  selector: 'confirm-dialog',
  template: `
    <h1 mat-dialog-title>Confirm</h1>
    <div mat-dialog-content>
      <p>{{data.message}}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No</button>
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}