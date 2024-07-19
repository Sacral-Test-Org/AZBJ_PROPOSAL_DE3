import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-pin-code-lov',
  templateUrl: './pin-code-lov.component.html',
  styleUrls: ['./pin-code-lov.component.css']
})
export class PinCodeLovComponent {
  pinCodes: any[] = [];
  countryName: string = 'INDIA';
  pinCodeField: string = '';

  constructor(private http: HttpClient, private logger: LoggerService) {
    this.logger.setCustomHttpHeaders({ 'Content-Type': 'application/json' });
    this.logger.setCustomHttpParams({ level: NgxLoggerLevel.DEBUG });
  }

  displayLov(): void {
    if (this.countryName === 'INDIA' && this.pinCodeField === '') {
      this.fetchPinCodes().subscribe(
        (data: any) => {
          this.pinCodes = data;
          this.logger.debug('Pin codes fetched successfully', data);
          // Logic to display the LOV with the fetched pin codes, states, and districts
          // This can be a modal or a dropdown based on your UI framework
        },
        (error: any) => {
          this.logger.error('Error fetching pin codes', error);
        }
      );
    }
  }

  fetchPinCodes(): Observable<any> {
    const url = '/api/pin-codes'; // Replace with your actual API endpoint
    return this.http.get<any>(url);
  }
}
