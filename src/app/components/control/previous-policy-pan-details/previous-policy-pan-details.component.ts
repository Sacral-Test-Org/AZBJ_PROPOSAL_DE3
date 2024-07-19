import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-previous-policy-pan-details',
  templateUrl: './previous-policy-pan-details.component.html',
  styleUrls: ['./previous-policy-pan-details.component.css']
})
export class PreviousPolicyPanDetailsComponent implements OnInit {
  v_pan_pol_validate: string = 'N';
  ph_part_id: string = '';
  PH_PAN_CARD_NO: string = '';
  PH_NAME: string = '';
  PH_DOB: string = '';

  constructor(private controlService: ControlService) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onPreviousPolicyPanDetailsClick(): void {
    if (this.controlService.parameterListExists('Param1')) {
      this.controlService.destroyParameterList('Param1');
    }
    this.controlService.createParameterList('Param1');
    this.controlService.addParameter('Param1', 'PAR_PH_PART_ID', this.ph_part_id);
    this.controlService.addParameter('Param1', 'PAR_PAN_CARD_NO', this.PH_PAN_CARD_NO);
    this.controlService.addParameter('Param1', 'PAR_PAN_PH_NAME', this.PH_NAME);
    this.controlService.addParameter('Param1', 'PAR_PAN_PH_DOB', this.PH_DOB);
    this.controlService.addParameter('Param1', 'PAR_MODULE', 'DEQC');
    this.controlService.callForm('AZBJ_OLD_POLICY_DTLS', 'Param1');
    this.v_pan_pol_validate = 'Y';
  }
}
