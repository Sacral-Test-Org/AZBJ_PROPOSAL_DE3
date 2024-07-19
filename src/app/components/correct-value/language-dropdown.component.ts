import { Component, OnInit } from '@angular/core';
import { CorrectValueService } from '../../services/correct-value.service';
import { Language } from '../../models/correct-value.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-dropdown',
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.css']
})
export class LanguageDropdownComponent implements OnInit {
  languages: Language[] = [];
  selectedLanguage: string = '';

  constructor(private correctValueService: CorrectValueService, private router: Router) {}

  ngOnInit(): void {
    this.fetchLanguages();
  }

  fetchLanguages(): void {
    this.correctValueService.getLanguages().subscribe(
      (data: Language[]) => {
        this.languages = data;
      },
      (error) => {
        console.error('Error fetching languages', error);
      }
    );
  }

  storeSelectedLanguage(): void {
    if (this.languages.some(lang => lang.languageName === this.selectedLanguage)) {
      this.correctValueService.saveLanguage(this.selectedLanguage).subscribe(
        () => {
          this.router.navigate(['next-item']);
        },
        (error) => {
          console.error('Error saving selected language', error);
        }
      );
    } else {
      console.error('Selected language is not in the predefined list');
    }
  }
}
