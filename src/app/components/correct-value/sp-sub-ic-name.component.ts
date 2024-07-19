import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sp-sub-ic-name',
  templateUrl: './sp-sub-ic-name.component.html',
  styleUrls: ['./sp-sub-ic-name.component.css']
})
export class SpSubIcNameComponent implements OnInit {
  spSubIcNameForm: FormGroup;
  listOfValues: string[] = ['5', '8', 'LA'];

  constructor(public dialog: MatDialog) {
    this.spSubIcNameForm = new FormGroup({
      spSubIcName: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.spSubIcNameForm.get('spSubIcName').valueChanges.subscribe(value => {
      this.spSubIcNameForm.get('spSubIcName').setValue(value.toUpperCase(), { emitEvent: false });
    });
  }

  openListOfValues(): void {
    const dialogRef = this.dialog.open(ListOfValuesDialog, {
      width: '250px',
      data: { values: this.listOfValues }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.spSubIcNameForm.get('spSubIcName').setValue(result);
      }
    });
  }
}

@Component({
  selector: 'list-of-values-dialog',
  template: `
    <h1 mat-dialog-title>Choose a value</h1>
    <div mat-dialog-content>
      <mat-list>
        <mat-list-item *ngFor="let value of data.values" (click)="selectValue(value)">{{ value }}</mat-list-item>
      </mat-list>
    </div>
  `
})
export class ListOfValuesDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ListOfValuesDialog>) {}

  selectValue(value: string): void {
    this.dialogRef.close(value);
  }
}