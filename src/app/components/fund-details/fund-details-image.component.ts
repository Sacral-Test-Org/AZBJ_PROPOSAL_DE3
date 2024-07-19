import { Component, OnInit } from '@angular/core';
import { FundDetailsService } from 'src/app/services/fund-details.service';
import { FundDetails } from 'src/app/models/fund-details.model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-fund-details-image',
  templateUrl: './fund-details-image.component.html',
  styleUrls: ['./fund-details-image.component.css']
})
export class FundDetailsImageComponent implements OnInit {
  currentItem: string;
  currentBlock: string;
  proposalType: string;
  imageData: any;

  constructor(private fundDetailsService: FundDetailsService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.loadImage();
  }

  loadImage(): void {
    this.fundDetailsService.fetchImageData(this.currentItem, this.currentBlock, this.proposalType)
      .subscribe(
        data => {
          this.imageData = data;
          this.displayImage();
        },
        error => {
          this.logger.error('Error loading image data', error);
        }
      );
  }

  displayImage(): void {
    if (this.imageData) {
      // Logic to display the image based on the fetched imageData
      // Adjust the zoom level if necessary
      const imageElement = document.getElementById('imageArea');
      if (imageElement) {
        imageElement.setAttribute('src', this.imageData.imagePath);
        if (this.proposalType === 'N' && this.imageData.pages === 50) {
          imageElement.style.zoom = '1.5'; // Example zoom level adjustment
        }
      }
    }
  }
}