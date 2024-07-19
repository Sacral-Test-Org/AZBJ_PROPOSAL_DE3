import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-proof',
  templateUrl: './income-proof.component.html',
  styleUrls: ['./income-proof.component.css']
})
export class IncomeProofComponent {
  constructor(private router: Router) {}

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
  }

  onExit(): void {
    // Hide the details view
    const detailsView = document.getElementById('details-view');
    if (detailsView) {
      detailsView.style.display = 'none';
    }
    // Navigate to the income proof section
    this.router.navigate(['/income-proof']);
  }
}
