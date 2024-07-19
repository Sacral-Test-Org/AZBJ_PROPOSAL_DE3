package com.azbj.proposalde3.model;

public class ViewImages {
    private String policyId;
    private boolean insuredCheck;
    private String policyType;
    private String url;
    private String errorMessage;

    // Constructor
    public ViewImages(String policyId, boolean insuredCheck, String policyType, String url, String errorMessage) {
        this.policyId = policyId;
        this.insuredCheck = insuredCheck;
        this.policyType = policyType;
        this.url = url;
        this.errorMessage = errorMessage;
    }

    // Getters and Setters
    public String getPolicyId() {
        return policyId;
    }

    public void setPolicyId(String policyId) {
        this.policyId = policyId;
    }

    public boolean isInsuredCheck() {
        return insuredCheck;
    }

    public void setInsuredCheck(boolean insuredCheck) {
        this.insuredCheck = insuredCheck;
    }

    public String getPolicyType() {
        return policyType;
    }

    public void setPolicyType(String policyType) {
        this.policyType = policyType;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}