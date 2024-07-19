import { Component } from '@angular/core';
import { TableFieldMappingService } from '../../services/table-field-mapping.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-view-nominee-details',
  templateUrl: './view-nominee-details.component.html',
  styleUrls: ['./view-nominee-details.component.css']
})
export class ViewNomineeDetailsComponent {
  constructor(private tableFieldMappingService: TableFieldMappingService, private logger: NGXLogger) {}

  displayNomineeDetails(proposalType: string, numberOfPages: number, formVersion: string, imagePath: string, fileName: string): void {
    let para_x = 0;
    let para_y = 0;
    let imageFileName = '';
    let loadedPage = 0;

    if (proposalType === 'N') {
      if (numberOfPages === 19) {
        imageFileName = `${imagePath}${fileName}_12.TIF`;
        loadedPage = 12;
      } else if (numberOfPages === 50) {
        imageFileName = `${imagePath}${fileName}_25.TIF`;
        loadedPage = 1;
      }
    } else if (proposalType === 'O') {
      if (numberOfPages === 14) {
        imageFileName = `${imagePath}${fileName}_6.TIF`;
        loadedPage = 6;
      } else if (numberOfPages === 27) {
        imageFileName = `${imagePath}${fileName}_11.TIF`;
        loadedPage = 6;
      }
    }

    this.tableFieldMappingService.fetchImageDetails(imageFileName, formVersion).subscribe(
      (response) => {
        if (formVersion.startsWith('10.')) {
          // Display the image in the designated image area
          this.logger.info('Displaying image in the designated area');
          // Logic to display image
        } else {
          // Ensure the image area is not visible
          this.logger.info('Image area is not visible, adjusting image file path');
          // Logic to hide image area and adjust image file path
        }
        this.logger.info(`Loaded page set to ${loadedPage}`);
      },
      (error) => {
        this.logger.error('Error fetching image details', error);
      }
    );
  }
}
