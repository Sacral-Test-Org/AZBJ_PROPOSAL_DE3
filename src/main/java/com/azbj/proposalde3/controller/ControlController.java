package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ControlService;
import com.azbj.proposalde3.model.Control;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/control")
public class ControlController {

    @Autowired
    private ControlService controlService;

    @GetMapping("/getImage")
    public ResponseEntity<byte[]> getImage(@RequestParam String policyType) {
        byte[] imageData = controlService.getImage(policyType);
        return ResponseEntity.ok(imageData);
    }

    @PostMapping("/updatePolicyHolderDetails")
    public ResponseEntity<String> updatePolicyHolderDetails(@RequestBody Control policyHolderDetails) {
        controlService.updatePolicyHolderDetails(policyHolderDetails);
        return ResponseEntity.ok("Policy holder details updated successfully.");
    }

    @PostMapping("/clearPolicyHolderDetails")
    public ResponseEntity<String> clearPolicyHolderDetails() {
        controlService.clearDetails();
        return ResponseEntity.ok("Policy holder details cleared successfully.");
    }

    @PostMapping("/approvePanDetails")
    public ResponseEntity<String> approvePanDetails(@RequestBody Control panApprovalDetails) {
        controlService.approvePanDetails(panApprovalDetails);
        return ResponseEntity.ok("PAN details approved successfully.");
    }

    @GetMapping("/validateEmployeeId")
    public ResponseEntity<String> validateEmployeeId(@RequestParam String employeeId, @RequestParam String fscCode) {
        String result = controlService.validateEmployeeId(employeeId, fscCode);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/loadImage")
    public ResponseEntity<byte[]> loadImage() {
        byte[] imageData = controlService.loadImage();
        return ResponseEntity.ok(imageData);
    }

    @PostMapping("/updateAssignmentFlag")
    public ResponseEntity<String> updateAssignmentFlag(@RequestParam boolean flag) {
        controlService.updateAssignmentFlag(flag);
        return ResponseEntity.ok("Assignment flag updated successfully.");
    }

    @PostMapping("/retrieveAadhaarDetails")
    public ResponseEntity<String> retrieveAadhaarDetails(@RequestBody Control customerProfileDetails) {
        String result = controlService.verifyAadhaarDetails(customerProfileDetails);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/saveAMLInformation")
    public ResponseEntity<String> saveAMLInformation(@RequestBody Control amlInfo) {
        controlService.saveAMLInformation(amlInfo);
        return ResponseEntity.ok("AML information saved successfully.");
    }

    @GetMapping("/getProofDescription")
    public ResponseEntity<String> getProofDescription(@RequestParam String proofType) {
        String description = controlService.getProofDescription(proofType);
        return ResponseEntity.ok(description);
    }

    @GetMapping("/getEnrichmentDetails")
    public ResponseEntity<String> getEnrichmentDetails(@RequestParam String applicationNo, @RequestParam String callFormName, @RequestParam(required = false) String proposalNo, @RequestParam String laName) {
        String result = controlService.processEnrichmentDetails(applicationNo, callFormName, proposalNo, laName);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/validatePan")
    public ResponseEntity<String> validatePan(@RequestParam String documentId) {
        String result = controlService.validatePan(documentId);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/callPreviousPolicyPanDetailsForm")
    public ResponseEntity<String> callPreviousPolicyPanDetailsForm(@RequestBody Map<String, Object> params) {
        controlService.createParameterList(params);
        controlService.callForm("AZBJ_OLD_POLICY_DTLS", params);
        return ResponseEntity.ok("Previous Policy PAN Details form called successfully.");
    }

    @GetMapping("/getScrutinyNumber")
    public ResponseEntity<String> getScrutinyNumber(@RequestParam String applicationNumber) {
        String scrutinyNumber = controlService.getScrutinyNumber(applicationNumber);
        return ResponseEntity.ok(scrutinyNumber);
    }

    @GetMapping("/checkEiaDetails")
    public ResponseEntity<Boolean> checkEiaDetails(@RequestParam String applicationNumber) {
        boolean exists = controlService.checkEiaDetails(applicationNumber);
        return ResponseEntity.ok(exists);
    }

    @PostMapping("/handleDocumentDEButton")
    public ResponseEntity<String> handleDocumentDEButton(@RequestBody Map<String, Object> paramList) {
        controlService.callFinancialDocumentForm(paramList);
        return ResponseEntity.ok("Document DE form called successfully.");
    }

    @GetMapping("/getPassportDetails")
    public ResponseEntity<Control> getPassportDetails() {
        Control passportDetails = controlService.retrievePassportDetails();
        return ResponseEntity.ok(passportDetails);
    }

    @GetMapping("/openSameBankDetails")
    public ResponseEntity<String> openSameBankDetails(@RequestParam String bankAccountNumber, @RequestParam String ifscCode) {
        controlService.openSameBankDetails(bankAccountNumber, ifscCode);
        return ResponseEntity.ok("Same Bank Details form opened successfully.");
    }

    @GetMapping("/getDrivingLicenseDetails")
    public ResponseEntity<Control> getDrivingLicenseDetails() {
        Control drivingLicenseDetails = controlService.getDrivingLicenseDetails();
        return ResponseEntity.ok(drivingLicenseDetails);
    }

    @GetMapping("/verifyVoterId")
    public ResponseEntity<String> verifyVoterId() {
        String result = controlService.verifyVoterId();
        return ResponseEntity.ok(result);
    }

    @PostMapping("/verifyPanStatus")
    public ResponseEntity<String> verifyPanStatus(@RequestParam String status) {
        String result = controlService.verifyPanStatus(status);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/populateQuestions")
    public ResponseEntity<String> populateQuestions(@RequestBody Map<String, Object> partnerDetails, @RequestParam String applicationNumber) {
        String result = controlService.populateQuestions(partnerDetails, applicationNumber);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/validatePanCard")
    public ResponseEntity<String> validatePanCard(@RequestParam String panCardNumber) {
        String result = controlService.validatePanCard(panCardNumber);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/saveDuplicateContactDetails")
    public ResponseEntity<String> saveDuplicateContactDetails(@RequestBody Control controlModel) {
        controlService.saveDuplicateContactDetails(controlModel);
        return ResponseEntity.ok("Duplicate contact details saved successfully.");
    }

    @PostMapping("/validateAmount")
    public ResponseEntity<String> validateAmount(@RequestParam double amount) {
        String result = controlService.validateAmount(amount);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/calculateNomineeAge")
    public ResponseEntity<Integer> calculateNomineeAge(@RequestParam String nomineeDOB) {
        int age = controlService.calculateNomineeAge(nomineeDOB);
        return ResponseEntity.ok(age);
    }

    @PostMapping("/verifyAndInsertEiaDetails")
    public ResponseEntity<String> verifyAndInsertEiaDetails(@RequestParam String applicationNo, @RequestParam String accountType) {
        String result = controlService.verifyAndInsertEiaDetails(applicationNo, accountType);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/saveSelectedOption")
    public ResponseEntity<String> saveSelectedOption(@RequestParam String selectedOption) {
        controlService.saveSelectedOption(selectedOption);
        return ResponseEntity.ok("Selected option saved successfully.");
    }

    @GetMapping("/fetchNomineeDetails")
    public ResponseEntity<Control> fetchNomineeDetails(@RequestParam String applicationNo) {
        Control nomineeDetails = controlService.getNomineeDetails(applicationNo);
        return ResponseEntity.ok(nomineeDetails);
    }

    @GetMapping("/validateProductCode")
    public ResponseEntity<String> validateProductCode(@RequestParam String productCode) {
        String result = controlService.validateProductCode(productCode);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/verifySignatureDecision")
    public ResponseEntity<String> verifySignatureDecision(@RequestParam String applicationNumber, @RequestParam String signatureDecision) {
        String result = controlService.verifySignatureDecision(applicationNumber, signatureDecision);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/fetchEmployerNameValues")
    public ResponseEntity<List<String>> fetchEmployerNameValues() {
        List<String> values = controlService.getEmployerNameValues();
        return ResponseEntity.ok(values);
    }

    @PostMapping("/validateAadhaar")
    public ResponseEntity<String> validateAadhaar(@RequestBody Control aadhaarDetails) {
        String result = controlService.validateAadhaar(aadhaarDetails);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/saveApplicationDetails")
    public ResponseEntity<String> saveApplicationDetails(@RequestParam String applicationNo, @RequestParam String moduleFlag, @RequestParam String topIndicator, @RequestBody Control sipControlDetails) {
        controlService.saveApplicationDetails(applicationNo, moduleFlag, topIndicator, sipControlDetails);
        return ResponseEntity.ok("Application details saved successfully.");
    }

    @PostMapping("/verifyPanAadharLink")
    public ResponseEntity<String> verifyPanAadharLink(@RequestParam String applicationNumber, @RequestParam String transactionType) {
        String result = controlService.verifyPanAadharLink(applicationNumber, transactionType);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/generateBIReport")
    public ResponseEntity<String> generateBIReport() {
        String result = controlService.generateBIReport();
        return ResponseEntity.ok(result);
    }

    @PostMapping("/callFormWithParams")
    public ResponseEntity<String> callFormWithParams(@RequestBody Map<String, Object> params) {
        controlService.callFormWithParams(params);
        return ResponseEntity.ok("Form called successfully.");
    }

    @PostMapping("/verifyAadhar")
    public ResponseEntity<String> verifyAadhar(@RequestParam String aadharNumber) {
        String result = controlService.verifyAadhar(aadharNumber);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/getCRPFDefenceQuestions")
    public ResponseEntity<List<String>> getCRPFDefenceQuestions(@RequestParam String gender, @RequestParam String partId, @RequestParam String fullName) {
        List<String> questions = controlService.fetchCRPFDefenceQuestions(gender, partId, fullName);
        return ResponseEntity.ok(questions);
    }

    @PostMapping("/verifyAadharCard")
    public ResponseEntity<String> verifyAadharCard(@RequestParam String aadharNumber) {
        String result = controlService.verifyAadharCard(aadharNumber);
        return ResponseEntity.ok(result);
    }
}