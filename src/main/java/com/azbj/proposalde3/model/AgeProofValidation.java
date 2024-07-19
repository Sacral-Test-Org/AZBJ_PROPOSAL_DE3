package com.azbj.proposalde3.model;

public class AgeProofValidation {
    private int globalViewImageCount;
    private String partnerId;
    private String ageProofCheck;
    private String signatureCheck;
    private String addressProofCheck;

    // Getters and Setters
    public int getGlobalViewImageCount() {
        return globalViewImageCount;
    }

    public void setGlobalViewImageCount(int globalViewImageCount) {
        this.globalViewImageCount = globalViewImageCount;
    }

    public String getPartnerId() {
        return partnerId;
    }

    public void setPartnerId(String partnerId) {
        this.partnerId = partnerId;
    }

    public String getAgeProofCheck() {
        return ageProofCheck;
    }

    public void setAgeProofCheck(String ageProofCheck) {
        this.ageProofCheck = ageProofCheck;
    }

    public String getSignatureCheck() {
        return signatureCheck;
    }

    public void setSignatureCheck(String signatureCheck) {
        this.signatureCheck = signatureCheck;
    }

    public String getAddressProofCheck() {
        return addressProofCheck;
    }

    public void setAddressProofCheck(String addressProofCheck) {
        this.addressProofCheck = addressProofCheck;
    }

    // Business Logic Methods
    public void validateAgeProof() {
        if (globalViewImageCount == 0 && partnerId != null) {
            ageProofCheck = "NA";
            navigateToPolicyDetails();
            displayErrorMessage("Please check the policy details at least once.");
        } else if ("Y".equals(signatureCheck) && "Y".equals(ageProofCheck) && "Y".equals(addressProofCheck)) {
            // All checks are marked as 'Y', no further action required
        } else {
            displayErrorMessage("Please select all required questions.");
        }
    }

    private void navigateToPolicyDetails() {
        // Logic to navigate to policy details section
    }

    private void displayErrorMessage(String message) {
        // Logic to display error message
    }
}
