package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.CorrectValueService;
import com.azbj.proposalde3.model.CorrectValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/correct-value")
public class CorrectValueController {

    @Autowired
    private CorrectValueService correctValueService;

    @PostMapping("/save")
    public ResponseEntity<CorrectValue> saveCorrectValue(@RequestBody CorrectValue correctValue) {
        CorrectValue savedValue = correctValueService.saveCorrectValue(correctValue);
        return ResponseEntity.ok(savedValue);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CorrectValue> getCorrectValue(@PathVariable Long id) {
        CorrectValue correctValue = correctValueService.getCorrectValue(id);
        return ResponseEntity.ok(correctValue);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCorrectValue(@PathVariable Long id) {
        correctValueService.deleteCorrectValue(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/initiate-scrutiny-failure")
    public ResponseEntity<Void> initiateScrutinyFailure(@RequestBody List<String> parameterList) {
        correctValueService.handleScrutinyFailure(parameterList);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/agents/{fscCode}")
    public ResponseEntity<List<String>> getAgents(@PathVariable String fscCode) {
        List<String> agents = correctValueService.fetchAgents(fscCode);
        return ResponseEntity.ok(agents);
    }

    @GetMapping("/lov-data")
    public ResponseEntity<List<String>> getLOVData() {
        List<String> lovData = correctValueService.fetchLOVData();
        return ResponseEntity.ok(lovData);
    }

    @PostMapping("/validate-date")
    public ResponseEntity<Boolean> validateDate(@RequestParam String backdatedPolicyDate, @RequestParam String currentDate) {
        boolean isValid = correctValueService.validateDate(backdatedPolicyDate, currentDate);
        return ResponseEntity.ok(isValid);
    }

    @PostMapping("/calculate-age")
    public ResponseEntity<Integer> calculateAge(@RequestParam String dateOfBirth, @RequestParam String backdatedPolicyDate) {
        int age = correctValueService.calculateAge(dateOfBirth, backdatedPolicyDate);
        return ResponseEntity.ok(age);
    }

    @PostMapping("/validate-pan")
    public ResponseEntity<Boolean> validatePan(@RequestParam String ageProofID) {
        boolean isValid = correctValueService.validatePan(ageProofID);
        return ResponseEntity.ok(isValid);
    }

    @PostMapping("/save-gender")
    public ResponseEntity<Void> saveGender(@RequestParam String gender) {
        correctValueService.saveGender(gender);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/query-pin-codes")
    public ResponseEntity<List<String>> queryPinCodes() {
        List<String> pinCodes = correctValueService.getDistinctPinCodes();
        return ResponseEntity.ok(pinCodes);
    }

    @GetMapping("/states")
    public ResponseEntity<List<String>> getStates() {
        List<String> states = correctValueService.fetchStates();
        return ResponseEntity.ok(states);
    }

    @GetMapping("/address-details")
    public ResponseEntity<List<String>> getAddressDetails(@RequestParam String landmarkArea) {
        List<String> addressDetails = correctValueService.fetchAddressDetails(landmarkArea);
        return ResponseEntity.ok(addressDetails);
    }

    @GetMapping("/languages")
    public ResponseEntity<List<String>> getLanguages() {
        List<String> languages = correctValueService.fetchLanguages();
        return ResponseEntity.ok(languages);
    }

    @PostMapping("/save-language")
    public ResponseEntity<Void> saveLanguage(@RequestParam String selectedLanguage) {
        correctValueService.storeLanguage(selectedLanguage);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/request-status")
    public ResponseEntity<String> getRequestStatus(@RequestParam String applicationNo) {
        String status = correctValueService.getRequestStatus(applicationNo);
        return ResponseEntity.ok(status);
    }

    @GetMapping("/places")
    public ResponseEntity<List<String>> fetchPlaces(@RequestParam String district) {
        List<String> places = correctValueService.getPlacesByDistrict(district);
        return ResponseEntity.ok(places);
    }

    @GetMapping("/valid-pin-codes")
    public ResponseEntity<List<String>> getValidPinCodes() {
        List<String> validPinCodes = correctValueService.fetchValidPinCodes();
        return ResponseEntity.ok(validPinCodes);
    }

    @GetMapping("/valid-area-values")
    public ResponseEntity<List<String>> getValidAreaValues(@RequestParam String postcode, @RequestParam String state, @RequestParam String district) {
        List<String> areaValues = correctValueService.fetchValidAreaValues(postcode, state, district);
        return ResponseEntity.ok(areaValues);
    }

    @GetMapping("/latest-request-status")
    public ResponseEntity<String> fetchLatestRequestStatus(@RequestParam String applicationNo, @RequestParam String addressType) {
        String status = correctValueService.getLatestRequestStatus(applicationNo, addressType);
        return ResponseEntity.ok(status);
    }

    @PostMapping("/update-pan-field")
    public ResponseEntity<Void> updatePanField(@RequestParam String pan) {
        correctValueService.updatePanField(pan);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/professions")
    public ResponseEntity<List<String>> fetchProfessions(@RequestParam String industryCode) {
        List<String> professions = correctValueService.getProfessions(industryCode);
        return ResponseEntity.ok(professions);
    }

    @GetMapping("/industry-values")
    public ResponseEntity<List<String>> getIndustryValues() {
        List<String> industryValues = correctValueService.fetchIndustryValues();
        return ResponseEntity.ok(industryValues);
    }

    @PostMapping("/validate-industry-description")
    public ResponseEntity<Boolean> validateIndustryDescription(@RequestParam String industryDescription, @RequestParam String appln_no) {
        boolean isValid = correctValueService.validateIndustryDescription(industryDescription, appln_no);
        return ResponseEntity.ok(isValid);
    }

    @PostMapping("/save-selected-value")
    public ResponseEntity<Void> saveSelectedValue(@RequestParam String selectedValue) {
        correctValueService.saveSelectedValue(selectedValue);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/save-loan-type")
    public ResponseEntity<Void> saveLoanType(@RequestParam String selectedLoanType) {
        correctValueService.saveLoanType(selectedLoanType);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/validate-portfolio-strategy")
    public ResponseEntity<Boolean> validatePortfolioStrategy(@RequestParam String portfolioStrategy, @RequestParam String frequency, @RequestParam String productDefinition, @RequestParam String productCode, @RequestParam String packageCode) {
        boolean isValid = correctValueService.validatePortfolioStrategy(portfolioStrategy, frequency, productDefinition, productCode, packageCode);
        return ResponseEntity.ok(isValid);
    }

    @GetMapping("/bank-details")
    public ResponseEntity<List<String>> getBankDetails(@RequestParam String ifscCode) {
        List<String> bankDetails = correctValueService.fetchBankDetails(ifscCode);
        return ResponseEntity.ok(bankDetails);
    }

    @PostMapping("/validate-product-id")
    public ResponseEntity<Boolean> validateProductId(@RequestParam String productId) {
        boolean isValid = correctValueService.validateProductId(productId);
        return ResponseEntity.ok(isValid);
    }

    @PostMapping("/save-money-back-option")
    public ResponseEntity<Void> saveMoneyBackOption(@RequestParam String value) {
        correctValueService.saveMoneyBackOption(value);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/get-money-back-option")
    public ResponseEntity<String> getMoneyBackOption() {
        String value = correctValueService.getMoneyBackOption();
        return ResponseEntity.ok(value);
    }

    @GetMapping("/signature-confidence-details")
    public ResponseEntity<List<String>> getSignatureConfidenceDetails(@RequestParam String applicationNumber) {
        List<String> details = correctValueService.getSignatureConfidenceDetails(applicationNumber);
        return ResponseEntity.ok(details);
    }

    @PostMapping("/set-mobile-number-read-only")
    public ResponseEntity<Void> setMobileNumberReadOnly() {
        correctValueService.setMobileNumberReadOnly();
        return ResponseEntity.ok().build();
    }

    @PostMapping("/validate-gmi")
    public ResponseEntity<Boolean> validateGMI(@RequestParam String gmiValue) {
        boolean isValid = correctValueService.validateGMI(gmiValue);
        return ResponseEntity.ok(isValid);
    }

    @PostMapping("/calculate-sum-assured")
    public ResponseEntity<Integer> calculateSumAssured(@RequestParam String gmiValue) {
        int sumAssured = correctValueService.calculateSumAssured(gmiValue);
        return ResponseEntity.ok(sumAssured);
    }

    @PostMapping("/fetch-previous-item")
    public ResponseEntity<String> fetchPreviousItem(@RequestParam String currentItem, @RequestParam String currentBlock, @RequestParam String proposalType) {
        String previousItem = correctValueService.fetchPreviousItem(currentItem, currentBlock, proposalType);
        return ResponseEntity.ok(previousItem);
    }

    @PostMapping("/load-field-data")
    public ResponseEntity<String> loadFieldData(@RequestParam String currentItem, @RequestParam String currentBlock, @RequestParam String proposalType) {
        String fieldData = correctValueService.loadFieldData(currentItem, currentBlock, proposalType);
        return ResponseEntity.ok(fieldData);
    }

    @PostMapping("/validate-channel")
    public ResponseEntity<Boolean> validateChannel(@RequestParam String applicationNo, @RequestParam String enteredChannel) {
        boolean isValid = correctValueService.validateChannel(applicationNo, enteredChannel);
        return ResponseEntity.ok(isValid);
    }

    @PostMapping("/validate-aadhaar")
    public ResponseEntity<Boolean> validateAadhaar(@RequestParam String aadhaarNumber, @RequestParam String otherDetails) {
        boolean isValid = correctValueService.validateAadhaar(aadhaarNumber, otherDetails);
        return ResponseEntity.ok(isValid);
    }

    @PostMapping("/validate-sub-id-code")
    public ResponseEntity<Boolean> validateSubIdCode(@RequestParam String subIdCode) {
        boolean isValid = correctValueService.validateSubIdCode(subIdCode);
        return ResponseEntity.ok(isValid);
    }

    @GetMapping("/rate-details")
    public ResponseEntity<List<String>> getRateDetails(@RequestParam String applicationNumber, @RequestParam String topIndicator) {
        List<String> rateDetails = correctValueService.fetchRateDetails(applicationNumber, topIndicator);
        return ResponseEntity.ok(rateDetails);
    }
}
