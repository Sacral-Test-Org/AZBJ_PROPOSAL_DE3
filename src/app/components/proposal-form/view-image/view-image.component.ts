import { Component } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent {
  constructor(private imageService: ImageService, private logger: LoggerService) {}

  displayImage(imagePath: string): void {
    this.imageService.getImagePath(imagePath).subscribe(
      (path: string) => {
        if (path.endsWith('.pdf')) {
          this.openPDF(path);
        } else {
          this.openImage(path);
        }
        this.hideViewCanvas();
      },
      (error) => {
        this.logger.log(NgxLoggerLevel.ERROR, 'Error fetching image path', error);
      }
    );
  }

  handleViewImage(): void {
    // Logic to handle view image button click
    const imagePath = 'path/to/image'; // This should be dynamically set based on the current record
    this.displayImage(imagePath);
  }

  handleHideImage(): void {
    // Logic to handle hide image button click
    const canvas = document.getElementById('viewCanvas');
    if (canvas) {
      canvas.style.display = 'none';
    }
  }

  onViewImageClick(): void {
    const proposalNumber = '12345'; // This should be dynamically set based on the current record
    const imageName = 'image.jpg'; // This should be dynamically set based on the current record
    this.imageService.getImagePath(proposalNumber, imageName).subscribe(
      (imagePath: string) => {
        this.imageService.downloadImage(imagePath).subscribe(
          (localPath: string) => {
            this.displayImage(localPath);
          },
          (error) => {
            this.logger.log(NgxLoggerLevel.ERROR, 'Error downloading image', error);
          }
        );
      },
      (error) => {
        this.logger.log(NgxLoggerLevel.ERROR, 'Error retrieving image path', error);
      }
    );
  }

  executeTriggers(): void {
    try {
      // Execute necessary triggers
    } catch (error) {
      this.logger.log(NgxLoggerLevel.ERROR, 'Error executing triggers', error);
    }
  }

  private openPDF(path: string): void {
    window.open(path, '_blank');
  }

  private openImage(path: string): void {
    const img = new Image();
    img.src = path;
    const canvas = document.getElementById('viewCanvas');
    if (canvas) {
      canvas.appendChild(img);
    }
  }

  private hideViewCanvas(): void {
    const canvas = document.getElementById('viewCanvas');
    if (canvas) {
      canvas.style.display = 'none';
    }
  }
}
