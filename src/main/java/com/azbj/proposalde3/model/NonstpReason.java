package com.azbj.proposalde3.model;

public class NonstpReason {
    private String nonstpReason;
    private String recheckFlag;
    private String stopFlag;
    private String applicationNumber;
    private Object previousPolicyDetails;
    private Object scrutinyPartnerFormDetails;

    // Getters and Setters
    public String getNonstpReason() {
        return nonstpReason;
    }

    public void setNonstpReason(String nonstpReason) {
        this.nonstpReason = nonstpReason;
    }

    public String getRecheckFlag() {
        return recheckFlag;
    }

    public void setRecheckFlag(String recheckFlag) {
        this.recheckFlag = recheckFlag;
    }

    public String getStopFlag() {
        return stopFlag;
    }

    public void setStopFlag(String stopFlag) {
        this.stopFlag = stopFlag;
    }

    public String getApplicationNumber() {
        return applicationNumber;
    }

    public void setApplicationNumber(String applicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    public Object getPreviousPolicyDetails() {
        return previousPolicyDetails;
    }

    public void setPreviousPolicyDetails(Object previousPolicyDetails) {
        this.previousPolicyDetails = previousPolicyDetails;
    }

    public Object getScrutinyPartnerFormDetails() {
        return scrutinyPartnerFormDetails;
    }

    public void setScrutinyPartnerFormDetails(Object scrutinyPartnerFormDetails) {
        this.scrutinyPartnerFormDetails = scrutinyPartnerFormDetails;
    }
}