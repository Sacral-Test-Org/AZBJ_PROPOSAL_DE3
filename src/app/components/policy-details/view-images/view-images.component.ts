import { Component, OnInit } from '@angular/core';
import { ViewImagesService } from 'src/app/services/view-images.service';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-view-images',
  templateUrl: './view-images.component.html',
  styleUrls: ['./view-images.component.css']
})
export class ViewImagesComponent implements OnInit {
  policyImages: any[] = [];
  globalImageViewCounter: number = 0;
  phImageViewCounter: number = 0;
  policyType: string = 'PH'; // This should be dynamically set based on actual policy type
  insuredCheck: boolean = true; // This should be dynamically set based on actual insured check

  constructor(private viewImagesService: ViewImagesService, private logger: LoggerService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.viewImagesService.getImages().subscribe(
      (images) => {
        this.policyImages = images;
      },
      (error) => {
        this.logger.error('Error fetching images', error);
      }
    );
  }

  onViewImages(): void {
    this.globalImageViewCounter++;
    if (this.insuredCheck && this.policyType === 'PH') {
      this.phImageViewCounter++;
    }

    this.viewImagesService.viewImages().subscribe(
      (response) => {
        if (response.url) {
          window.open(response.url, '_blank');
        } else {
          this.logger.error('Error: URL not generated');
          alert('Error: URL not generated');
        }
      },
      (error) => {
        this.logger.error('Error generating URL', error);
        alert('Error generating URL');
      }
    );
  }
}
