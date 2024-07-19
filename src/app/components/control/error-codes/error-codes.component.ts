import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-codes',
  templateUrl: './error-codes.component.html',
  styleUrls: ['./error-codes.component.css']
})
export class ErrorCodesComponent {
  errorCodes = [
    { code: 'ERR001', description: 'Invalid input' },
    { code: 'ERR002', description: 'Connection timeout' },
    { code: 'ERR003', description: 'Data not found' }
  ];

  hiddenErrorDescriptions = [
    'Additional info for ERR001',
    'Additional info for ERR002',
    'Additional info for ERR003'
  ];

  constructor(private router: Router) {}

  navigateToItem(item: any) {
    // Logic to navigate to the item
    console.log('Navigating to item:', item);
  }

  exitSection() {
    this.router.navigate(['/']);
  }
}
