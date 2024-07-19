import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-profession-list',
  templateUrl: './profession-list.component.html',
  styleUrls: ['./profession-list.component.css']
})
export class ProfessionListComponent implements OnInit {
  professions: any[] = [];
  selectedProfession: any;
  industryCode: number;

  constructor(private http: HttpClient, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.fetchProfessions();
  }

  fetchProfessions(): void {
    const url = `/api/professions?industryCode=${this.industryCode}`;
    this.http.get<any[]>(url).subscribe(
      data => {
        this.professions = data.filter(profession => !profession.end_date)
                               .sort((a, b) => a.occ_desc.localeCompare(b.occ_desc));
      },
      error => {
        this.logger.error('Error fetching professions', error);
      }
    );
  }

  selectProfession(profession: any): void {
    this.selectedProfession = profession;
  }

  onProfessionFieldDoubleClick(): void {
    // Logic to display the list of professions
    // This can be a modal or dropdown based on the UI framework being used
  }
}
