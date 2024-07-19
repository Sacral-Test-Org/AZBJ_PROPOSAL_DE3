import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-phone-number-tooltip',
  template: `
    <input
      type="text"
      id="phone-number"
      (focus)="showTooltip()"
      placeholder="Please Enter Phone Number in format: [STD CODE][NUMBER]"
      style="text-transform: uppercase;"
      readonly
    />
    <div *ngIf="tooltipVisible" class="tooltip">
      Please Enter Phone Number in format: [STD CODE][NUMBER]
    </div>
  `,
  styles: [
    `
      .tooltip {
        position: absolute;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        padding: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
      }
    `,
  ],
})
export class PhoneNumberTooltipComponent {
  tooltipVisible = false;

  @HostListener('focus', ['$event.target'])
  showTooltip() {
    this.tooltipVisible = true;
  }

  @HostListener('blur', ['$event.target'])
  hideTooltip() {
    this.tooltipVisible = false;
  }
}
