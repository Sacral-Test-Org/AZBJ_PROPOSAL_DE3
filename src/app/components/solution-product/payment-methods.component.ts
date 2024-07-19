import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnChanges {
  @Input() frequency: string;
  @Input() fscCode: string;
  @Input() adiFlag: string;
  @Input() selectedPaymentMethod: string;
  paymentMethods: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.frequency || changes.fscCode || changes.adiFlag || changes.selectedPaymentMethod) {
      this.handlePaymentMethods();
    }
  }

  handlePaymentMethods(): void {
    if (this.frequency === '01') {
      this.paymentMethods = [];
      this.toggleRenewalPaymentField(false);
    } else {
      this.updatePaymentMethods();
      this.toggleRenewalPaymentField(
        this.selectedPaymentMethod !== 'CCSI' &&
        this.selectedPaymentMethod !== 'EMAND' &&
        this.adiFlag !== 'Y'
      );
    }
  }

  updatePaymentMethods(): void {
    if (this.frequency === '4' || this.frequency === '12' || (this.frequency === '2' && !['2000003024', '7000005464', '7000002372', '7000000702'].includes(this.fscCode))) {
      this.paymentMethods = ['NACH', 'Auto Debit Instruction (ADI)', 'EMANDATE', 'Credit Card - Standing instruction (CCSI)', 'SSS'];
    } else {
      this.paymentMethods = ['Cash/Cheque/DD', 'SSS', 'Direct Debit', 'ECS', 'Credit Card - Standing instruction (CCSI)', 'Group Cash', 'Group Cheque', 'Group Direct Credit', 'Bill Junction - ECS', 'Auto Debit Instruction (ADI)', 'BG', 'NACH', 'EMANDATE'];
    }
  }

  toggleRenewalPaymentField(enable: boolean): void {
    // Logic to enable or disable the renewal payment field
    const renewalPaymentField = document.getElementById('renewalPaymentField');
    if (renewalPaymentField) {
      renewalPaymentField.disabled = !enable;
    }
  }

  selectPaymentMethod(selectedMethod: string): void {
    this.selectedPaymentMethod = selectedMethod;
  }

  displayPaymentMethods(paymentMethods: string[]): void {
    this.paymentMethods = paymentMethods;
  }
}
