import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CorrectValueService } from 'src/app/services/correct-value.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-address-line3-dropdown',
  templateUrl: './address-line3-dropdown.component.html',
  styleUrls: ['./address-line3-dropdown.component.css']
})
export class AddressLine3DropdownComponent implements OnInit {
  addressLine3Control = new FormControl('');
  filteredPlaces: Observable<string[]>;
  places: string[] = [];

  constructor(private correctValueService: CorrectValueService) {}

  ngOnInit() {
    this.addressLine3Control.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value || ''))
      )
      .subscribe();
  }

  fetchPlaces(district: string) {
    this.correctValueService.fetchUniquePlaces(district).subscribe(
      (data: any) => {
        this.places = data.map((item: any) => item.place);
        if (this.places.length === 0) {
          this.places.push('NOT FOUND');
        }
      },
      (error: any) => {
        this.places = ['NOT FOUND'];
      }
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toUpperCase();
    return this.places.filter(option => option.toUpperCase().includes(filterValue));
  }

  onDoubleClick() {
    const district = this.getDistrictFromAddressLine4();
    this.fetchPlaces(district);
  }

  private getDistrictFromAddressLine4(): string {
    // Logic to get the district from Address Line 4 field
    // This is a placeholder and should be replaced with actual implementation
    return 'some-district';
  }
}
