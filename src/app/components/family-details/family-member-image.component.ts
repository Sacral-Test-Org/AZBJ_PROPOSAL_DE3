import { Component, OnInit } from '@angular/core';
import { FamilyDetailsService } from '../../services/family-details.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-family-member-image',
  templateUrl: './family-member-image.component.html',
  styleUrls: ['./family-member-image.component.css']
})
export class FamilyMemberImageComponent implements OnInit {
  imageUrl: string;
  
  constructor(private familyDetailsService: FamilyDetailsService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.displayImage();
  }

  displayImage(): void {
    this.familyDetailsService.fetchFamilyMemberImage().subscribe(
      (data: any) => {
        this.imageUrl = data.imageUrl;
      },
      (error: any) => {
        this.logger.error('Error fetching family member image', error);
        // Handle the exception gracefully
        this.imageUrl = 'assets/images/default-image.png';
      }
    );
  }
}
