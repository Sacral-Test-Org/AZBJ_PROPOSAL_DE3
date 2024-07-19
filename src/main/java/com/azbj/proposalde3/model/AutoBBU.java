package com.azbj.proposalde3.model;

public class AutoBBU {
    private String applicationNumber;
    private String transactionId;
    private boolean frequencyChecked;
    private boolean riderChecked;
    private boolean manualUnderwriting;
    private String reason;
    private String comments;
    private int eventNumber;
    private String contractId;
    private String policyReference;
    private String userComments;
    private String otherDetails;
    private String productCode;

    // Getters and Setters
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

    public int getEventNumber() {
        return eventNumber;
    }

    public void setEventNumber(int eventNumber) {
        this.eventNumber = eventNumber;
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

    public String getUserComments() {
        return userComments;
    }

    public void setUserComments(String userComments) {
        this.userComments = userComments;
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