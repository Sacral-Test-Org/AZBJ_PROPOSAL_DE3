import { Component, OnInit } from '@angular/core';
import { ICCommissionDetailsService } from './ic-commission-details.service';

@Component({
  selector: 'app-ic-commission-details',
  templateUrl: './ic-commission-details.component.html',
  styleUrls: ['./ic-commission-details.component.css']
})
export class ICCommissionDetailsComponent implements OnInit {
  icCommissionDetails: any;

  constructor(private icCommissionDetailsService: ICCommissionDetailsService) { }

  ngOnInit(): void {
    this.fetchICCommissionDetails();
  }

  fetchICCommissionDetails(): void {
    this.icCommissionDetailsService.getICCommissionDetails().subscribe(
      (data) => {
        this.icCommissionDetails = data;
      },
      (error) => {
        console.error('Error fetching IC Commission Details', error);
      }
    );
  }
}
