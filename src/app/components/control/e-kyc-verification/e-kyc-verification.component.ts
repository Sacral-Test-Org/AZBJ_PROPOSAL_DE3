import { Component } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-e-kyc-verification',
  templateUrl: './e-kyc-verification.component.html',
  styleUrls: ['./e-kyc-verification.component.css']
})
export class EKYCVerificationComponent {
  aadhaarCount: number = 0;

  constructor(private controlService: ControlService) {}

  initiateEKYCVerification(aadhaarNumber: string, moduleName: string = 'DEQC'): void {
    let paramList = this.controlService.getParameterList('Param1');
    if (paramList) {
      this.controlService.destroyParameterList('Param1');
    }
    paramList = this.controlService.createParameterList('Param1');
    paramList.addParameter('AADHAAR_NUMBER', aadhaarNumber);
    paramList.addParameter('MODULE_NAME', moduleName);
    this.aadhaarCount += 1;
    this.controlService.callForm('AZBJ_ADHAAR_KYC', paramList);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Tab') {
      const nextElement = document.getElementById('CORRECT_VALUE.AGENT_NEXT_TAB');
      if (nextElement) {
        nextElement.focus();
      }
    }
  }
}
