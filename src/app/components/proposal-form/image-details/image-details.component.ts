import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent {
  proposalNumber: string;
  applicationNumber: string;
  imageType: string;
  scanTime: string;
  imageSize: number;
  imagePath: string;
  numberOfPages: number;

  constructor(private router: Router) {}

  handleViewImage(): void {
    // Logic to view the image
    window.open(this.imagePath, '_blank');
  }

  handleHideImage(): void {
    // Logic to hide the image details
    this.proposalNumber = '';
    this.applicationNumber = '';
    this.imageType = '';
    this.scanTime = '';
    this.imageSize = null;
    this.imagePath = '';
    this.numberOfPages = null;
  }

  onHideButtonClick(): void {
    // Logic to navigate to the "CORRECT_VALUE.PROPTYPE" field
    this.router.navigate(['/correct-value', { field: 'PROPTYPE' }]);
  }
}
