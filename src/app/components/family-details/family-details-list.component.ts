import { Component, OnInit } from '@angular/core';
import { FamilyDetailsService } from '../../services/family-details.service';
import { FamilyMember } from '../../models/family-member.model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-family-details-list',
  templateUrl: './family-details-list.component.html',
  styleUrls: ['./family-details-list.component.css']
})
export class FamilyDetailsListComponent implements OnInit {
  familyMembers: FamilyMember[] = [];

  constructor(private familyDetailsService: FamilyDetailsService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.loadFamilyMembers();
  }

  private loadFamilyMembers(): void {
    this.familyDetailsService.getFamilyMembers().subscribe(
      (data: FamilyMember[]) => {
        this.familyMembers = data;
        this.logger.info('Family members loaded successfully');
      },
      (error) => {
        this.logger.error('Error loading family members', error);
      }
    );
  }
}
