import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { ControlModel } from 'src/app/models/control.model';

@Component({
  selector: 'app-employer-name',
  templateUrl: './employer-name.component.html',
  styleUrls: ['./employer-name.component.css']
})
export class EmployerNameComponent implements OnInit {
  employerNameValues: string[] = [];
  occupation: string;
  productCode: number;
  isEmployerNameVisible: boolean = false;
  isEmployerNameEnabled: boolean = false;

  constructor(private controlService: ControlService) {}

  ngOnInit(): void {
    this.checkConditions();
  }

  checkConditions(): void {
    if ((this.occupation === 'SG' || this.occupation === 'SN') && [297, 315, 345].includes(this.productCode)) {
      this.isEmployerNameVisible = true;
      this.isEmployerNameEnabled = true;
      this.getEmployerNameValues();
    } else {
      this.isEmployerNameVisible = false;
      this.isEmployerNameEnabled = false;
    }
  }

  getEmployerNameValues(): void {
    this.controlService.getEmployerNameValues().subscribe((values: string[]) => {
      this.employerNameValues = values;
    });
  }
}
