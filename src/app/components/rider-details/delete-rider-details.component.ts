import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RiderDetailsService } from 'src/app/services/rider-details.service';

@Component({
  selector: 'app-delete-rider-details',
  templateUrl: './delete-rider-details.component.html',
  styleUrls: ['./delete-rider-details.component.css']
})
export class DeleteRiderDetailsComponent {
  constructor(private riderDetailsService: RiderDetailsService, private router: Router) {}

  confirmDelete(riderId: string): void {
    if (confirm('Are you sure you want to delete this rider detail?')) {
      this.riderDetailsService.deleteRiderDetails(riderId).subscribe(
        () => {
          alert('Rider detail deleted successfully.');
          this.router.navigate(['/azbj-rider-details2']);
        },
        (error) => {
          alert('An error occurred while deleting the rider detail.');
          console.error(error);
        }
      );
    }
  }
}
