import { Component, OnInit } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-industry-description-list',
  templateUrl: './industry-description-list.component.html',
  styleUrls: ['./industry-description-list.component.css']
})
export class IndustryDescriptionListComponent implements OnInit {
  industryValues: any[] = [];

  constructor(private correctValueService: CorrectValueService, private logger: LoggerService) {}

  ngOnInit(): void {
    this.fetchIndustryValues();
  }

  fetchIndustryValues(): void {
    this.correctValueService.fetchIndustryValues().subscribe(
      (data: any[]) => {
        this.industryValues = data;
        this.logger.debug('Industry values fetched successfully', data);
      },
      (error: any) => {
        this.logger.error('Error fetching industry values', error);
      }
    );
  }
}
