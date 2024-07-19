import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RiderCoverDetailsNavigationService {
  constructor(private router: Router) {}

  navigateToNextItem(): void {
    // Logic to navigate to the next item in the form
    // This can be customized based on the form's structure and routing
    this.router.navigate(['next-item-route']);
  }
}
