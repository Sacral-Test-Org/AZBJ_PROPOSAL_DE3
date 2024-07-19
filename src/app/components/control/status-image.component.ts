import { Component, OnInit } from '@angular/core';
import { ControlService } from '../../services/control.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-status-image',
  templateUrl: './status-image.component.html',
  styleUrls: ['./status-image.component.css']
})
export class StatusImageComponent implements OnInit {
  constructor(private controlService: ControlService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.loadImage();
  }

  private loadImage(): void {
    this.controlService.loadImage().subscribe(
      (imageData) => {
        // Logic to display the image in the Status field
        this.displayImage(imageData);
      },
      (error) => {
        // Handle the error gracefully and log the error details
        this.logger.error('Error loading image:', error);
      }
    );
  }

  private displayImage(imageData: any): void {
    // Logic to display the image in the Status field
    const statusField = document.getElementById('status-field');
    if (statusField) {
      statusField.setAttribute('src', imageData);
    }
  }
}
