import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-control-image',
  templateUrl: './control-image.component.html',
  styleUrls: ['./control-image.component.css']
})
export class ControlImageComponent implements OnChanges {
  @Input() imageUrl: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imageUrl'] && changes['imageUrl'].currentValue) {
      this.displayImage(changes['imageUrl'].currentValue);
    }
  }

  displayImage(imageUrl: string): void {
    const imageElement = document.getElementById('controlImage') as HTMLImageElement;
    if (imageElement) {
      imageElement.src = imageUrl;
    }
  }
}
