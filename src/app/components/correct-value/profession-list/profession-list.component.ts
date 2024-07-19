import { Component, OnInit } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { Profession } from 'src/app/models/profession.model';

@Component({
  selector: 'app-profession-list',
  templateUrl: './profession-list.component.html',
  styleUrls: ['./profession-list.component.css']
})
export class ProfessionListComponent implements OnInit {
  professions: Profession[] = [];
  selectedProfession: Profession | null = null;

  constructor(private correctValueService: CorrectValueService) {}

  ngOnInit(): void {
    this.getProfessions();
  }

  getProfessions(): void {
    this.correctValueService.getProfessions().subscribe((data: Profession[]) => {
      this.professions = data;
    });
  }

  selectProfession(profession: Profession): void {
    this.selectedProfession = profession;
  }
}
