package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.AutoBBUService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/autobbu")
public class AutoBBUController {

    @Autowired
    private AutoBBUService autoBBUService;

    @PostMapping("/ok")
    public ResponseEntity<String> handleOkButtonClick(@RequestBody AutoBBURequest request) {
        try {
            // Log the event
            autoBBUService.logEvent(request.getApplicationNumber(), request.getTransactionId());

            // Determine the next event number
            int eventNumber = autoBBUService.determineNextEventNumber(request.getContractId());

            // Validate frequency and rider checkboxes
            autoBBUService.validateFrequencyAndRider(request.isFrequencyChecked(), request.isRiderChecked());

            // Validate manual underwriting
            autoBBUService.validateManualUnderwriting(request.isManualUnderwriting(), request.getReason(), request.getComments());

            // Insert a new record into azbj_uw_comments
            autoBBUService.insertUWComments(eventNumber, request.getContractId(), request.getPolicyReference(), request.getComments());

            // Insert a new record into azbj_qc_autobbu_log
            autoBBUService.insertAutoBBULog(request.getApplicationNumber(), request.getPolicyReference(), request.getOtherDetails());

            // Update azbj_phub_tracker
            autoBBUService.updatePhubTracker(request.getApplicationNumber());

            // Insert a new record into azbj_auto_issuance_grp
            autoBBUService.insertAutoIssuanceGrp(request.getContractId(), request.getPolicyReference(), request.getApplicationNumber(), request.getProductCode());

            // Commit the transaction and exit the form
            return ResponseEntity.ok("Operation completed successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred: " + e.getMessage());
        }
    }
}

class AutoBBURequest {
    private String applicationNumber;
    private String transactionId;
    private boolean frequencyChecked;
    private boolean riderChecked;
    private boolean manualUnderwriting;
    private String reason;
    private String comments;
    private String contractId;
    private String policyReference;
    private String otherDetails;
    private String productCode;

    // Getters and setters

    public String getApplicationNumber() {
        return applicationNumber;
    }

    public void setApplicationNumber(String applicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public boolean isFrequencyChecked() {
        return frequencyChecked;
    }

    public void setFrequencyChecked(boolean frequencyChecked) {
        this.frequencyChecked = frequencyChecked;
    }

    public boolean isRiderChecked() {
        return riderChecked;
    }

    public void setRiderChecked(boolean riderChecked) {
        this.riderChecked = riderChecked;
    }

    public boolean isManualUnderwriting() {
        return manualUnderwriting;
    }

    public void setManualUnderwriting(boolean manualUnderwriting) {
        this.manualUnderwriting = manualUnderwriting;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getContractId() {
        return contractId;
    }

    public void setContractId(String contractId) {
        this.contractId = contractId;
    }

    public String getPolicyReference() {
        return policyReference;
    }

    public void setPolicyReference(String policyReference) {
        this.policyReference = policyReference;
    }

    public String getOtherDetails() {
        return otherDetails;
    }

    public void setOtherDetails(String otherDetails) {
        this.otherDetails = otherDetails;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }
}
