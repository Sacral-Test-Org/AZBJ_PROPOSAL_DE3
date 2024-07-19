import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-same-bank-details',
  templateUrl: './same-bank-details.component.html',
  styleUrls: ['./same-bank-details.component.css']
})
export class SameBankDetailsComponent implements OnInit {
  bankAccountNumber: string = '';
  ifscCode: string = '';
  bankDetails: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.bankAccountNumber = params['bankAccountNumber'];
      this.ifscCode = params['ifscCode'];
      if (this.bankAccountNumber && this.ifscCode) {
        this.fetchBankDetails();
      } else {
        this.logger.warn('Bank account number or IFSC code is missing.');
        alert('Please enter the Account No and IFSC Code.!');
        this.router.navigate(['/previous-page']); // Navigate to the previous page or a default page
      }
    });
  }

  fetchBankDetails(): void {
    const apiUrl = `your-api-endpoint?accountNo=${this.bankAccountNumber}&ifscCode=${this.ifscCode}`;
    this.http.get(apiUrl).subscribe(
      data => {
        this.bankDetails = data;
      },
      error => {
        this.logger.error('Error fetching bank details:', error);
        alert('An error occurred while fetching bank details. Please try again later.');
      }
    );
  }
}