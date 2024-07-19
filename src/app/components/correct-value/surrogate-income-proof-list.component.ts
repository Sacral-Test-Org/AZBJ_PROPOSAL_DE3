import { Component, OnInit } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-surrogate-income-proof-list',
  templateUrl: './surrogate-income-proof-list.component.html',
  styleUrls: ['./surrogate-income-proof-list.component.css']
})
export class SurrogateIncomeProofListComponent implements OnInit {
  surrogateIncomeProofList: any[] = [];
  errorMessage: string = '';

  constructor(
    private correctValueService: CorrectValueService,
    private router: Router,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.fetchSurrogateIncomeProofList();
  }

  fetchSurrogateIncomeProofList(): void {
    this.correctValueService.fetchSurrogateIncomeProofList().subscribe(
      (data) => {
        this.surrogateIncomeProofList = data;
      },
      (error) => {
        this.errorMessage = 'Failed to load surrogate income proof list.';
        this.logger.error('Error fetching surrogate income proof list', error);
      }
    );
  }

  handleSelection(selectedProofType: string): void {
    try {
      const selectedProof = this.surrogateIncomeProofList.find(
        (proof) => proof.type === selectedProofType
      );
      if (selectedProof) {
        this.router.navigate(['/correct-value', selectedProofType]);
      } else {
        throw new Error('Selected proof type not found');
      }
    } catch (error) {
      this.errorMessage = 'An error occurred during selection.';
      this.logger.error('Error during surrogate income proof selection', error);
    }
  }
}
