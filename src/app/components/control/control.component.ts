import { Component } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  commissionFieldVisible: boolean = false;
  commissionFieldEnabled: boolean = false;

  constructor(private controlService: ControlService) {}

  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.commissionFieldVisible = true;
      this.commissionFieldEnabled = true;
    } else {
      this.commissionFieldVisible = false;
      this.commissionFieldEnabled = false;
    }
  }

  isCommissionFieldVisible(): boolean {
    return this.commissionFieldVisible;
  }

  isCommissionFieldEnabled(): boolean {
    return this.commissionFieldEnabled;
  }

  handlePolicyTypeChange(event: any): void {
    const policyType = event.target.value;
    this.controlService.getImage(policyType).subscribe(image => {
      // Logic to display the image
    });
  }

  ngOnInit(): void {
    this.controlService.getReceiptDetails().subscribe(details => {
      // Logic to store receipt details
    });
  }

  calculateTotalAmount(): number {
    // Logic to calculate total amount
    return 0;
  }

  onSelectReceipt(receipt: any): void {
    // Logic to highlight and display receipt details
  }

  handleProceedButtonClick(): void {
    this.controlService.enableAgentTab();
    this.controlService.navigateToCorrectValuePropType();
  }

  handleCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      // Logic to update policy holder details
    } else {
      this.clearPolicyHolderDetails();
    }
  }

  clearPolicyHolderDetails(): void {
    // Logic to clear policy holder details
  }

  handleSupervisorApproval(): void {
    this.controlService.approvePanDetails().subscribe(response => {
      // Logic to handle supervisor approval
    });
  }

  handleExit(): void {
    // Logic to navigate away from the current screen
  }

  validateEmployeeId(employeeId: string, fscCode: string): void {
    this.controlService.validateEmployeeId(employeeId, fscCode).subscribe(response => {
      // Logic to handle validation response
    });
  }

  loadStatusImage(): void {
    this.controlService.loadImage().subscribe(image => {
      // Logic to display the image
    });
  }

  copyAddressFields(): void {
    // Logic to copy residence address fields to mailing address fields
  }

  clearAddressFields(): void {
    // Logic to clear mailing address fields
  }

  manageAssignmentFlag(): void {
    // Logic to manage assignment flag
  }

  checkEIA(): void {
    // Logic to check EIA details
  }

  onICCommissionDetClick(): void {
    this.controlService.checkAndCreateParamList('Param1', 'agentCode');
    this.controlService.openForm('AZBJ_IC_COMMISSION_DTLS', 'Param1');
  }

  handleAadhaarDetailsButton(): void {
    this.controlService.getAadhaarDetails().subscribe(details => {
      // Logic to handle Aadhaar details
    });
  }

  onRCUReasonsClick(): void {
    this.controlService.checkAndCreateParamList('Param1');
    this.controlService.callForm('AZBJ_RCU_COMMENTS', 'Param1');
  }

  handleAMLInformation(): void {
    // Logic to handle AML information input and update
  }

  fetchProofDescription(proofType: string): void {
    this.controlService.getProofDescription(proofType).subscribe(description => {
      // Logic to display proof description
    });
  }

  navigateToNextItem(oldPolicyReference: string): void {
    this.controlService.navigateToField('Agents.bi_no');
  }

  onEnrichmentDetailsClick(): void {
    // Logic to handle enrichment details button click
  }

  handleMWPActCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      // Logic to handle MWP Act checkbox checked
    } else {
      // Logic to handle MWP Act checkbox unchecked
    }
  }

  validateDocumentId(documentId: string): void {
    // Logic to validate document ID
  }

  onPreviousPolicyPanDetailsClick(): void {
    this.controlService.createParameterList('Param1');
    this.controlService.callForm('AZBJ_OLD_POLICY_DTLS', 'Param1');
  }

  handleEiaDetailsClick(): void {
    // Logic to handle EIA details button click
  }

  handleDoubleClick(): void {
    this.controlService.fetchLOVData().subscribe(data => {
      // Logic to display LOV data
    });
  }

  fetchSearchResults(): void {
    this.controlService.getSearchResults().subscribe(results => {
      // Logic to handle search results
    });
  }

  ngOnInit(): void {
    this.controlService.getReceiptDetails().subscribe(details => {
      // Logic to store receipt details
    });
  }

  onMHRChange(event: Event): void {
    // Logic to handle MHR change
  }

  onDocumentDEButtonClick(): void {
    this.controlService.createParameterList('Param1');
    this.controlService.callForm('AZBJ_FINANCIAL_DOCUMENT', 'Param1');
  }

  handlePassportDetailsButtonClick(): void {
    this.controlService.getPassportDetails().subscribe(details => {
      // Logic to handle passport details
    });
  }

  handleSameBankDtlsClick(): void {
    // Logic to handle Same Bank Dtls button click
  }

  handleDrivingLicenseDetButtonPress(): void {
    this.controlService.getDrivingLicenseDetails().subscribe(details => {
      // Logic to handle driving license details
    });
  }

  handlePartnerTypeChange(selectedPartnerType: string): void {
    // Logic to handle partner type change
  }

  navigateToControl(): void {
    // Logic to navigate to control screen
  }

  clearFields(): void {
    // Logic to clear specific fields
  }

  handleVoterIdVerification(): void {
    this.controlService.verifyVoterId().subscribe(response => {
      // Logic to handle voter ID verification
    });
  }

  handlePanVerificationStatusChange(status: string): void {
    this.controlService.verifyPanStatus(status).subscribe(response => {
      // Logic to handle PAN verification status change
    });
  }

  validateBIDate(biDate: string, proposalSignDate: string): boolean {
    // Logic to validate BI Date
    return true;
  }

  validateBINumber(): void {
    this.controlService.populateCarequote().subscribe(response => {
      // Logic to handle BI number validation
    });
  }

  validatePanCard(panCardNumber: string): void {
    this.controlService.validatePanCard(panCardNumber).subscribe(response => {
      // Logic to handle PAN card validation
    });
  }

  saveDuplicateContactDetails(): void {
    this.controlService.saveDuplicateContactDetails().subscribe(response => {
      // Logic to handle save duplicate contact details
    });
  }

  handleFormSelection(selectedFormType: string): void {
    // Logic to handle form selection
  }

  handleFreshProposalNumberInput(event: KeyboardEvent): void {
    // Logic to handle fresh proposal number input
  }

  handleAccountTypeSelection(selectedAccountType: string): void {
    // Logic to handle account type selection
  }

  navigateNext(): void {
    this.controlService.navigateToProposalSignDate();
  }

  navigatePrevious(): void {
    this.controlService.navigateToIFSCCode();
  }

  cancelOperation(): void {
    if (confirm('Do you want to Cancel?')) {
      // Logic to clear the form and navigate to the main form
    } else {
      // Logic to set focus on the Save button
    }
  }

  navigateToPanDetails(): void {
    this.controlService.navigateToPanDetails();
  }

  handleDateInput(event: Event): void {
    // Logic to handle date input
  }

  navigateToNextField(): void {
    // Logic to navigate to the next field
  }

  validateBIReceivedDate(biReceivedDate: string, biDate: string, instab: string, proptype: string, fscCode: string, productCode: string): void {
    // Logic to validate BI Received Date
  }

  handleConsentSelection(selectedOption: string): void {
    // Logic to handle consent selection
  }

  triggerSaveShortcut(): void {
    this.controlService.saveData().subscribe(response => {
      // Logic to handle save shortcut
    });
  }

  navigateToViewAllImages(): void {
    this.controlService.navigateToViewAllImages();
  }

  navigateToSection(ageProofType: string): void {
    // Logic to navigate to the appropriate section
  }

  handleSelectionChange(selectedOption: string): void {
    // Logic to handle selection change
  }

  displayMessage(message: string): void {
    alert(message);
  }

  onDecisionSelect(selectedDecision: string): void {
    // Logic to handle decision selection
  }

  handlePartnerTypeSelection(selectedPartnerType: string): void {
    this.controlService.navigateToPanValidation(selectedPartnerType);
  }

  validateAmount(amount: number): void {
    // Logic to validate amount
  }

  calculateNomineeAge(nomineeDOB: Date): number {
    // Logic to calculate nominee age
    return 0;
  }

  navigateToRiderDetails(): void {
    // Logic to navigate to rider details
  }

  handleDropdownChange(event: Event): void {
    // Logic to handle dropdown change
  }

  submitForm(): void {
    this.controlService.saveSelectedOption().subscribe(response => {
      // Logic to handle form submission
    });
  }

  navigateBasedOnAgeProofType(ageProofType: string): void {
    // Logic to navigate based on age proof type
  }

  handleMultipleNomineeButtonPress(): void {
    this.controlService.getNomineeDetails().subscribe(details => {
      // Logic to handle multiple nominee button press
    });
  }

  handleSolutionNameChange(solutionName: string, productCode: string): void {
    this.controlService.validateProductCode(productCode).subscribe(response => {
      // Logic to handle solution name change
    });
  }

  handleEKYCButtonClick(): void {
    this.controlService.verifyEKYC().subscribe(response => {
      // Logic to handle E-KYC button click
    });
  }

  handleKeyboardNavigation(): void {
    this.controlService.navigateToNextItem();
  }

  handleExitButtonClick(): void {
    this.controlService.checkSignatureDecision().subscribe(response => {
      // Logic to handle exit button click
    });
  }

  handleSelection(selectedOption: string): void {
    // Logic to handle selection
  }

  getSelectedOption(): string {
    // Logic to get selected option
    return '';
  }

  handlePHAadharChange(event: Event): void {
    // Logic to handle PH Aadhar change
  }

  checkPolicySelection(): boolean {
    // Logic to check policy selection
    return true;
  }

  promptSupervisorAuthentication(): boolean {
    // Logic to prompt supervisor authentication
    return true;
  }

  enableSaveButton(): void {
    // Logic to enable save button
  }

  handleCRPFDefenceQuestionsClick(): void {
    this.controlService.fetchCRPFDefenceQuestions().subscribe(questions => {
      // Logic to handle CRPF/Defence Questions button click
    });
  }

  openCrpfDefenceQuestions(): void {
    this.controlService.fetchQuestions().subscribe(questions => {
      // Logic to open CRPF/Defence questions
    });
  }

  handleHomeLoanTypeDropdown(): void {
    // Logic to handle home loan type dropdown
  }

  enableAadharField(): void {
    // Logic to enable Aadhar field
  }

  verifyAadharCard(): void {
    this.controlService.verifyAadharCard().subscribe(response => {
      // Logic to verify Aadhar card
    });
  }

  handleButtonClick(): void {
    this.controlService.callFormWithParams().subscribe(response => {
      // Logic to handle button click
    });
  }

  toggleDropdownVisibility(): void {
    // Logic to toggle dropdown visibility
  }

  getDropdownOptions(): string[] {
    // Logic to get dropdown options
    return [];
  }

  onAadharVerifyClick(): void {
    this.controlService.verifyAadhar().subscribe(response => {
      // Logic to handle Aadhar verify click
    });
  }

  closeWindow(): void {
    this.controlService.setFocus('professionDescription');
  }

  onExitButtonClick(): void {
    this.controlService.navigateToIncomeProof();
  }

  handleSPWFlagChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      // Logic to enable SPW Percentage field
    } else {
      // Logic to disable SPW Percentage field
    }
  }

  handleSPWFreqChange(event: Event): void {
    // Logic to handle SPW Freq change
  }

  generateBIReport(): void {
    this.controlService.generateBIReport().subscribe(response => {
      // Logic to handle BI report generation
    });
  }

  onSaveButtonClick(): void {
    this.controlService.saveApplicationDetails().subscribe(response => {
      // Logic to handle save button click
    });
  }
}