import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-insurance-company-image',
  templateUrl: './insurance-company-image.component.html',
  styleUrls: ['./insurance-company-image.component.css']
})
export class InsuranceCompanyImageComponent implements OnChanges {
  @Input() imageData: string;
  @Input() imageType: string;
  imageSrc: string;
  imageAlt: string;

  constructor(private logger: NGXLogger) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.imageData || changes.imageType) {
      this.displayImage();
    }
  }

  displayImage(): void {
    if (this.imageData && this.imageType) {
      this.imageSrc = this.imageData;
      this.imageAlt = `Insurance Company Image of type ${this.imageType}`;
    } else {
      this.logger.error('Image data or type is missing.');
    }
  }
}
