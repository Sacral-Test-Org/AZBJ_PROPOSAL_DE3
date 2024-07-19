package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.AutoBBURepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AutoBBUService {

    @Autowired
    private AutoBBURepository autoBBURepository;

    public String logEvent(String applicationNumber, String transactionId) {
        autoBBURepository.logEvent(applicationNumber, transactionId);
        return "Event logged successfully";
    }

    public int determineNextEventNumber(String contractId) {
        return autoBBURepository.getNextEventNumber(contractId);
    }

    public String validateFrequencyAndRider(boolean frequencyChecked, boolean riderChecked) {
        if (!frequencyChecked || !riderChecked) {
            throw new IllegalArgumentException("Please check the frequency and rider fields.");
        }
        return "Validation successful";
    }

    public String validateManualUnderwriting(boolean manualUnderwriting, String reason, String comments) {
        if (manualUnderwriting && (reason == null || reason.isEmpty() || comments == null || comments.isEmpty())) {
            throw new IllegalArgumentException("Reason and comments are required for manual underwriting.");
        }
        return "Validation successful";
    }

    public String insertUWComments(int eventNumber, String contractId, String policyReference, String userComments) {
        autoBBURepository.insertUWComments(eventNumber, contractId, policyReference, userComments);
        return "UW Comments inserted successfully";
    }

    public String insertAutoBBULog(String applicationNumber, String policyReference, Object otherDetails) {
        autoBBURepository.insertAutoBBULog(applicationNumber, policyReference, otherDetails);
        return "Auto BBU Log inserted successfully";
    }

    public String updatePhubTracker(String applicationNumber) {
        autoBBURepository.updatePhubTracker(applicationNumber);
        return "Phub Tracker updated successfully";
    }

    public String insertAutoIssuanceGrp(String contractId, String policyReference, String applicationNumber, String productCode) {
        autoBBURepository.insertAutoIssuanceGrp(contractId, policyReference, applicationNumber, productCode);
        return "Auto Issuance Group inserted successfully";
    }
}
