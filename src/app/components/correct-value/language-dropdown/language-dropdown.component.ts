import { Component, OnInit } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { Language } from 'src/app/models/correct-value.model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-language-dropdown',
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.css']
})
export class LanguageDropdownComponent implements OnInit {
  languages: Language[] = [];
  selectedLanguage: string = '';

  constructor(private correctValueService: CorrectValueService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.fetchLanguages();
  }

  fetchLanguages(): void {
    this.correctValueService.fetchLanguages().subscribe(
      (data: Language[]) => {
        this.languages = data;
        this.logger.info('Languages fetched successfully');
      },
      (error) => {
        this.logger.error('Error fetching languages', error);
      }
    );
  }

  saveSelectedLanguage(): void {
    if (!this.selectedLanguage) {
      this.logger.warn('No language selected');
      return;
    }
    this.correctValueService.saveSelectedLanguage(this.selectedLanguage).subscribe(
      () => {
        this.logger.info('Selected language saved successfully');
      },
      (error) => {
        this.logger.error('Error saving selected language', error);
      }
    );
  }
}
