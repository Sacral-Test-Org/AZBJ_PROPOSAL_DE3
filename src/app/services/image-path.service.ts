import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagePathService {
  constructor() {}

  getImagePaths(): string[] {
    return ['5', '8', 'SL'];
  }
}
