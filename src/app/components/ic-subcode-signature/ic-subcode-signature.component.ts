import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/models/image.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ic-subcode-signature',
  templateUrl: './ic-subcode-signature.component.html',
  styleUrls: ['./ic-subcode-signature.component.css']
})
export class ICSubcodeSignatureComponent implements OnInit {
  public showRadioButtonNA: boolean = false;
  public signatureImage: string | null = null;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.initializeSignatureArea();
  }

  private initializeSignatureArea(): void {
    this.showRadioButtonNA = false;
  }

  public toggleRadioButton(): void {
    this.showRadioButtonNA = !this.showRadioButtonNA;
  }

  public onSPICSignClick(ICCode: string, SubICCode: string): void {
    if (ICCode.startsWith('200%')) {
      this.imageService.getSignature(ICCode, SubICCode).subscribe(
        (image: Image) => {
          if (image) {
            this.signatureImage = image.url;
          } else {
            alert('Signature not available.');
          }
        },
        (error: HttpErrorResponse) => {
          alert('Error retrieving signature: ' + error.message);
        }
      );
    } else if (ICCode.startsWith('1%')) {
      this.imageService.checkExternalSignature(ICCode).subscribe(
        (exists: boolean) => {
          if (exists) {
            const url = this.imageService.generateSignatureURL(ICCode);
            window.open(url, '_blank');
          } else {
            this.imageService.getApplicationNumber(ICCode).subscribe(
              (appNumber: string) => {
                if (appNumber) {
                  this.imageService.getAgentSignature(appNumber).subscribe(
                    (agentImage: Image) => {
                      this.signatureImage = agentImage.url;
                    },
                    (error: HttpErrorResponse) => {
                      alert('Error retrieving agent signature: ' + error.message);
                    }
                  );
                } else {
                  alert('Application number not found.');
                }
              },
              (error: HttpErrorResponse) => {
                alert('Error retrieving application number: ' + error.message);
              }
            );
          }
        },
        (error: HttpErrorResponse) => {
          alert('Error checking external signature: ' + error.message);
        }
      );
    }
  }
}
