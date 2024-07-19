import { Component, Input, OnInit } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { Area } from 'src/app/models/correct-value.model';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
  @Input() state: string;
  @Input() district: string;
  @Input() postcode: string;
  @Input() country: string;
  areaValues: Area[] = [];
  selectedArea: Area;

  constructor(private correctValueService: CorrectValueService) {}

  ngOnInit(): void {
    this.fetchAreas();
  }

  fetchAreas(): void {
    if (this.country.toUpperCase() === 'INDIA') {
      this.correctValueService.fetchAreasByStateAndDistrict(this.state, this.district, this.postcode)
        .subscribe((areas: Area[]) => {
          this.areaValues = areas;
        });
    } else {
      this.areaValues = [];
    }
  }

  displayAreaValues(): Area[] {
    return this.areaValues;
  }

  selectAreaValue(selectedArea: Area): void {
    this.selectedArea = selectedArea;
  }
}
