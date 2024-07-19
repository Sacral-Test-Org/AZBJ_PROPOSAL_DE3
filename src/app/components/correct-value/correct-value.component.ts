import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { FieldValidationService } from 'src/app/services/field-validation.service';
import { CorrectValueService } from 'src/app/services/correct-value.service';

@Component({
  selector: 'app-correct-value',
  templateUrl: './correct-value.component.html',
  styleUrls: ['./correct-value.component.css']
})
export class CorrectValueComponent implements OnInit {
  currentItem: string;
  currentBlock: string;
  proposalType: string;
  selectedImagePath: string;
  dropdownOptions: string[] = ['IP', 'SON', '5', '8', 'SL'];
  agentTypeOptions: string[] = ['8', '10', 'SL (No)'];
  genderOptions: string[] = ['M', 'F', 'O'];
  annuityOptions: string[] = ['5', '8', 'SL'];
  titleOptions: string[] = ['Mr', 'Mrs', 'IP', 'MOTHER', 'SON'];
  accountTypeOptions: string[] = ['SON', '5', '8', '1 (LA)', 'SL (No)'];
  moneyBackOptions: string[] = ['5', '8', '10', 'Self', 'Other'];
  assesseeTypes: string[] = ['PH', '5', '8', 'SL'];
  subICPanOptions: string[] = ['5', '8', 'LA', 'No'];
  dispatchModeOptions: string[] = ['SON', '5', '8', '10', '1', 'SL', 'Other'];
  nationalityOptions: string[] = ['IP', 'PH', '5', '8', 'LA', 'SL'];
  educationLevels: string[] = ['IP', '5', '8', 'SL', 'EDUCATION'];

  constructor(
    private imageService: ImageService,
    private navigationService: NavigationService,
    private fieldValidationService: FieldValidationService,
    private correctValueService: CorrectValueService
  ) {}

  ngOnInit(): void {
    this.initializeDropdowns();
  }

  initializeDropdowns(): void {
    this.selectedImagePath = '';
  }

  applyVisualAttributes(currentItem: string, currentBlock: string): void {
    if (currentBlock === 'PROPOSALFORM' || currentBlock === 'CORRECT_VALUE') {
      // Apply specific visual attributes
    }
  }

  navigateToPreviousItem(): void {
    if (this.currentBlock === 'CORRECT_VALUE') {
      this.navigationService.navigateToPreviousItem();
    } else {
      this.navigationService.navigateToPreviousItem();
    }
  }

  navigateToNextItem(): void {
    this.fieldValidationService.validateCurrentItem();
    this.navigationService.navigateToNextItem();
  }

  onTextItemFocus(): void {
    this.imageService.loadFieldFromImage();
  }

  onMouseClick(): void {
    this.navigationService.navigateToClickedItem();
  }

  onError(): void {
    this.fieldValidationService.suppressErrorMessages();
  }

  handleDropdownSelection(selectedOption: string): void {
    // Handle dropdown selection logic
  }

  onSelectImagePath(imagePath: string): void {
    this.selectedImagePath = imagePath;
  }

  handleDoubleClick(): void {
    this.correctValueService.fetchEmployeeIdList();
  }

  onAgentTypeChange(event: Event): void {
    // Handle agent type change logic
  }

  validateMultiplePolicyCount(): void {
    // Validate multiple policy count logic
  }

  handleSubICCodeInput(event: KeyboardEvent): void {
    // Handle Sub IC Code input logic
  }

  displayValidValues(): void {
    // Display valid values logic
  }

  handleScrutinyFailure(): void {
    // Handle scrutiny failure logic
  }

  onLeadByDoubleClick(): void {
    this.correctValueService.fetchAgents();
  }

  handleBrokerModelDropdown(): void {
    // Handle broker model dropdown logic
  }

  handleReferralCodeInput(event: MouseEvent): void {
    this.correctValueService.fetchLOVData();
  }

  validateReferralCode(referralCode: string): void {
    // Validate referral code logic
  }

  onFscCodeChange(fscCode: string): void {
    this.correctValueService.fetchAgentInfo(fscCode);
  }

  validateBackdatedPolicyDate(backdatedPolicyDate: string, currentDate: Date, dateOfBirth: Date): void {
    this.correctValueService.validateDate(backdatedPolicyDate, currentDate, dateOfBirth);
    this.correctValueService.calculateAge(dateOfBirth, backdatedPolicyDate);
  }

  handleNationalityField(): void {
    // Handle nationality field logic
  }

  nextTabButtonClickHandler(): void {
    this.navigationService.validateNextTab();
  }

  handleTitleDropdown(): void {
    // Handle title dropdown logic
  }

  handlePanValidation(ageProofType: string, ageProofID: string): void {
    this.correctValueService.validatePan(ageProofType, ageProofID);
  }

  handleGenderSelection(): void {
    // Handle gender selection logic
  }

  displayLOV(): void {
    this.correctValueService.getPinCodes();
  }

  validatePinCode(pinCode: string): void {
    // Validate pin code logic
  }

  handleMaritalStatusChange(maritalStatus: string): void {
    this.correctValueService.validateTitleGenderMaritalStatus(maritalStatus);
  }

  onDoubleClick(): void {
    this.correctValueService.fetchPredefinedValues();
  }

  validateValue(selectedValue: string): void {
    this.correctValueService.validateValue(selectedValue);
  }

  insertOrUpdateValue(newValue: string): void {
    // Insert or update value logic
  }

  fetchStates(): void {
    this.correctValueService.getStates();
  }

  handleAgeProofField(): void {
    // Handle age proof field logic
  }

  displayCityDistrictList(country: string): void {
    this.correctValueService.getCityDistrictList(country);
  }

  handleIPAreaChange(event: Event): void {
    this.correctValueService.getRequestStatus('applicationNo');
  }

  getRequestStatus(applicationNo: string): void {
    this.correctValueService.getRequestStatus(applicationNo);
  }

  handleInputChange(event: Event): void {
    // Handle input change logic
  }

  handleFocusShift(event: Event): void {
    // Handle focus shift logic
  }

  displayTooltip(): void {
    // Display tooltip logic
  }

  handleResidenceProofTypeSelection(selectedProofType: string): void {
    this.correctValueService.saveResidenceProofType(selectedProofType);
  }

  fetchPlaces(district: string): void {
    this.correctValueService.getPlacesByDistrict(district);
  }

  onPinCodeFieldNavigate(): void {
    this.correctValueService.fetchValidPinCodes();
  }

  onPinCodeFieldDoubleClick(): void {
    this.correctValueService.fetchValidPinCodes();
  }

  handleCheckboxChange(event: Event): void {
    // Handle checkbox change logic
  }

  moveToNextItem(): void {
    // Move to next item logic
  }

  navigateBasedOnMaritalStatus(fathersName: string, maritalStatus: string): void {
    this.correctValueService.checkMaritalStatus(maritalStatus);
  }

  openAddAreaPincodeForm(): void {
    // Open add area/pincode form logic
  }

  fetchLanguages(): void {
    this.correctValueService.fetchLanguages();
  }

  storeSelectedLanguage(selectedLanguage: string): void {
    this.correctValueService.saveLanguage(selectedLanguage);
  }

  handleCityDistrictInput(event: Event): void {
    // Handle city/district input logic
  }

  triggerListOfValues(): void {
    // Trigger list of values logic
  }

  checkPHAreaStatus(): void {
    this.correctValueService.fetchLatestRequestStatus('applicationNo', 'PH');
  }

  handleWitnessDateInput(date: string): void {
    this.correctValueService.navigateToConsentInfo();
  }

  onPhSignatureButtonClick(): void {
    this.correctValueService.incrementPhSignatureCount();
  }

  fetchBankDetails(ifscCode: string): void {
    this.correctValueService.getBankDetails(ifscCode);
  }

  handleLAStudyStandardChange(selectedOption: string): void {
    this.correctValueService.navigateToMLRelation();
  }

  handleProductIdSelection(productId: string): void {
    this.correctValueService.validateProductId(productId);
  }

  integrateNextTabButton(): void {
    this.correctValueService.handleNextTabClick();
  }

  handleMoneyBackOptionSelection(selectedValue: string): void {
    this.correctValueService.saveMoneyBackOption(selectedValue);
  }

  navigateToSignatureConfidence(): void {
    this.correctValueService.getSignatureConfidenceDetails('applicationNumber');
  }

  validateMobileNumber(mobileNumber: string): void {
    // Validate mobile number logic
  }

  handlePhoneNumberField(): void {
    this.correctValueService.fetchPreviousItem();
    this.correctValueService.loadFieldData();
  }

  handlePhoneNumberInput(event: Event): void {
    this.correctValueService.validatePhoneNumber();
    this.correctValueService.navigateToPreviousItem();
    this.correctValueService.navigateToNextItem();
  }

  handleTitleSelection(event: Event): void {
    // Handle title selection logic
  }

  handleGenderDropdown(event: Event): void {
    // Handle gender dropdown logic
  }

  fetchRateDetails(applicationNumber: string, topIndicator: string): void {
    this.correctValueService.getRateDetails(applicationNumber, topIndicator);
  }
}