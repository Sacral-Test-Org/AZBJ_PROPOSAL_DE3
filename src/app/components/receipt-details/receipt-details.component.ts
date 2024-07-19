import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/models/receipt.model';

@Component({
  selector: 'app-receipt-details',
  templateUrl: './receipt-details.component.html',
  styleUrls: ['./receipt-details.component.css']
})
export class ReceiptDetailsComponent implements OnInit {
  receipts: Receipt[] = [];
  selectedReceipt: Receipt | null = null;
  totalAmount: number = 0;

  ngOnInit(): void {
    // Initialize the component and fetch receipt details if necessary.
    this.fetchReceipts();
    this.calculateTotalAmount();
  }

  fetchReceipts(): void {
    // Mock data for receipts
    this.receipts = [
      { receiptNumber: '001', amount: 100, dateReceived: new Date(), chequeStatus: 'Cleared', premiumPayer: 'John Doe', branchCode: '001', branchName: 'Main Branch', branchState: 'CA' },
      { receiptNumber: '002', amount: 200, dateReceived: new Date(), chequeStatus: 'Pending', premiumPayer: 'Jane Smith', branchCode: '002', branchName: 'Second Branch', branchState: 'NY' }
    ];
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.receipts.reduce((sum, receipt) => sum + receipt.amount, 0);
  }

  onSelectReceipt(receipt: Receipt): void {
    this.selectedReceipt = receipt;
  }
}