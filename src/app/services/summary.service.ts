import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor() { }

  getGenderOptions(): string[] {
    return ["IP", "5", "8", "10", "LA", "No", "Other"];
  }
}
