import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PreviousPolicyDetailsService } from 'src/app/services/previous-policy-details.service';
import { ngxLogger } from 'ngx-logger';

@Component({
  selector: 'app-previous-policy-details-image',
  templateUrl: './previous-policy-details-image.component.html',
  styleUrls: ['./previous-policy-details-image.component.css']
})
export class PreviousPolicyDetailsImageComponent implements OnInit {
  currentBlock: string;
  currentItem: string;
  proposalType: string;
  imageData: any;

  constructor(private http: HttpClient, private previousPolicyDetailsService: PreviousPolicyDetailsService, private logger: ngxLogger) {}

  ngOnInit(): void {
    this.loadImage(this.currentBlock, this.currentItem, this.proposalType);
  }

  loadImage(block: string, item: string, proposalType: string): void {
    this.previousPolicyDetailsService.getImage(block, item, proposalType).subscribe(
      data => {
        this.imageData = data;
        this.displayImage(this.imageData);
      },
      error => {
        this.logger.error('Error loading image', error);
      }
    );
  }

  fetchImage(currentBlock: string, currentItem: string): void {
    this.http.get(`/api/images?block=${currentBlock}&item=${currentItem}`).subscribe(
      data => {
        this.imageData = data;
        this.displayImage(this.imageData);
      },
      error => {
        this.logger.error('Error fetching image', error);
      }
    );
  }

  displayImage(imageData: any): void {
    const imageElement = document.getElementById('previous-policy-image');
    if (imageElement) {
      imageElement.setAttribute('src', imageData);
    }
  }
}