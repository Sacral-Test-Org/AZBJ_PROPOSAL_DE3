import { Component, OnInit } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { CorrectValue } from 'src/app/models/correct-value.model';

@Component({
  selector: 'app-money-back-option',
  templateUrl: './money-back-option.component.html',
  styleUrls: ['./money-back-option.component.css']
})
export class MoneyBackOptionComponent implements OnInit {
  moneyBackOptions: string[] = ['5', '8', '10', 'SELF', 'OTHER'];
  selectedOption: string = '';
  tooltipText: string = '[Self/Policyholder/Other]';

  constructor(private correctValueService: CorrectValueService) { }

  ngOnInit(): void {
    this.getMoneyBackOption();
  }

  handleMoneyBackOptionSelection(selectedValue: string): void {
    this.selectedOption = selectedValue.toUpperCase();
    this.saveMoneyBackOption(this.selectedOption);
  }

  saveMoneyBackOption(option: string): void {
    this.correctValueService.saveMoneyBackOption(option).subscribe();
  }

  getMoneyBackOption(): void {
    this.correctValueService.getMoneyBackOption().subscribe((option: CorrectValue) => {
      this.selectedOption = option.value;
    });
  }
}
