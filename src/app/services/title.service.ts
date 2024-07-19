import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titles: string[] = ['Mr', 'Mrs', 'IP', 'MOTHER', 'SON'];
  private defaultTitle: string = 'Mrs';

  constructor() {}

  getTitleOptions(): string[] {
    return this.titles;
  }

  getDefaultTitle(): string {
    return this.defaultTitle;
  }
}