import { Component, OnInit, Input } from '@angular/core';
import { FamilyDetailsService } from 'src/app/services/family-details.service';
import { Image } from 'src/app/models/image.model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-age-died-image',
  templateUrl: './age-died-image.component.html',
  styleUrls: ['./age-died-image.component.css']
})
export class AgeDiedImageComponent implements OnInit {
  @Input() currentItem: string;
  @Input() currentBlock: string;
  imageUrl: string;

  constructor(private familyDetailsService: FamilyDetailsService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.loadImage({ currentItem: this.currentItem, currentBlock: this.currentBlock });
  }

  loadImage(context: { currentItem: string; currentBlock: string }): void {
    this.familyDetailsService.getImageData(context.currentItem, context.currentBlock)
      .subscribe(
        (image: Image) => this.displayImage(image.url),
        (error: any) => this.handleError(error)
      );
  }

  displayImage(imageUrl: string): void {
    this.imageUrl = imageUrl;
  }

  handleError(error: any): void {
    this.logger.error('Error loading image:', error);
  }
}
