import { Component, OnInit, Input } from '@angular/core';
import { FamilyDetailsService } from '../../services/family-details.service';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-family-details-image',
  templateUrl: './family-details-image.component.html',
  styleUrls: ['./family-details-image.component.css']
})
export class FamilyDetailsImageComponent implements OnInit {
  @Input() proposalType: string;
  @Input() currentItem: string;
  imageSrc: string;

  constructor(private familyDetailsService: FamilyDetailsService, private logger: LoggerService) {}

  ngOnInit(): void {
    this.loadImage();
  }

  loadImage(): void {
    this.familyDetailsService.fetchImage(this.proposalType, this.currentItem).subscribe(
      (imageFileName: string) => {
        this.displayImage(imageFileName);
      },
      (error) => {
        this.logger.error('Error fetching image:', error);
      }
    );
  }

  displayImage(imageFileName: string): void {
    this.familyDetailsService.fetchImageDetails(imageFileName).subscribe(
      (imageData: any) => {
        this.imageSrc = imageData;
      },
      (error) => {
        this.logger.error('Error displaying image:', error);
      }
    );
  }
}