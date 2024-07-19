package com.azbj.proposalde3.model;

public class SaveApply {
    private String applicationNumber;
    private String partnerType;
    private String mergeStatus;
    private String selectedCPs;
    private String previousPolicyNumbers;
    private String controlFlags;
    private String rcuValidationResult;

    // Getters and Setters
    public String getApplicationNumber() {
        return applicationNumber;
    }

    public void setApplicationNumber(String applicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    public String getPartnerType() {
        return partnerType;
    }

    public void setPartnerType(String partnerType) {
        this.partnerType = partnerType;
    }

    public String getMergeStatus() {
        return mergeStatus;
    }

    public void setMergeStatus(String mergeStatus) {
        this.mergeStatus = mergeStatus;
    }

    public String getSelectedCPs() {
        return selectedCPs;
    }

    public void setSelectedCPs(String selectedCPs) {
        this.selectedCPs = selectedCPs;
    }

    public String getPreviousPolicyNumbers() {
        return previousPolicyNumbers;
    }

    public void setPreviousPolicyNumbers(String previousPolicyNumbers) {
        this.previousPolicyNumbers = previousPolicyNumbers;
    }

    public String getControlFlags() {
        return controlFlags;
    }

    public void setControlFlags(String controlFlags) {
        this.controlFlags = controlFlags;
    }

    public String getRcuValidationResult() {
        return rcuValidationResult;
    }

    public void setRcuValidationResult(String rcuValidationResult) {
        this.rcuValidationResult = rcuValidationResult;
    }
}