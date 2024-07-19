import { Component, OnInit } from '@angular/core';
import { CorrectValueService } from 'src/app/services/correct-value.service';

@Component({
  selector: 'app-city-district-lov',
  templateUrl: './city-district-lov.component.html',
  styleUrls: ['./city-district-lov.component.css']
})
export class CityDistrictLovComponent implements OnInit {
  cityDistrictValues: string[] = [];

  constructor(private correctValueService: CorrectValueService) { }

  ngOnInit(): void {
    this.fetchCityDistrictValues();
  }

  fetchCityDistrictValues(): void {
    this.correctValueService.getCityDistrictValues().subscribe(
      (values: string[]) => {
        this.cityDistrictValues = values;
      },
      (error: any) => {
        console.error('Error fetching city/district values', error);
      }
    );
  }
}
