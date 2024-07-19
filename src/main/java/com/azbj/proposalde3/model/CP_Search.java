package com.azbj.proposalde3.model;

import java.util.List;

public class CP_Search {
    private String firstName;
    private String lastName;
    private String dateOfBirth;
    private String gender;
    private String fatherName;
    private String spouseName;
    private String occupation;
    private List<String> images;
    private String signatureCheckbox;
    private String ageProofCheckbox;
    private String addressProofCheckbox;
    private String signatureRadioButton;
    private String signatureCheck = "NA";
    private String ageProofCheck = "NA";
    private String addressProofCheck = "NA";
    private String additionalProofCheck;
    private String applicationNumber;
    private String partnerType;
    private String mergeOption;
    private String controlFields;
    private String policyReference;

    // Getters and Setters
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getSpouseName() {
        return spouseName;
    }

    public void setSpouseName(String spouseName) {
        this.spouseName = spouseName;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public String getSignatureCheckbox() {
        return signatureCheckbox;
    }

    public void setSignatureCheckbox(String signatureCheckbox) {
        this.signatureCheckbox = signatureCheckbox;
    }

    public String getAgeProofCheckbox() {
        return ageProofCheckbox;
    }

    public void setAgeProofCheckbox(String ageProofCheckbox) {
        this.ageProofCheckbox = ageProofCheckbox;
    }

    public String getAddressProofCheckbox() {
        return addressProofCheckbox;
    }

    public void setAddressProofCheckbox(String addressProofCheckbox) {
        this.addressProofCheckbox = addressProofCheckbox;
    }

    public String getSignatureRadioButton() {
        return signatureRadioButton;
    }

    public void setSignatureRadioButton(String signatureRadioButton) {
        this.signatureRadioButton = signatureRadioButton;
    }

    public String getSignatureCheck() {
        return signatureCheck;
    }

    public void setSignatureCheck(String signatureCheck) {
        this.signatureCheck = signatureCheck;
    }

    public String getAgeProofCheck() {
        return ageProofCheck;
    }

    public void setAgeProofCheck(String ageProofCheck) {
        this.ageProofCheck = ageProofCheck;
    }

    public String getAddressProofCheck() {
        return addressProofCheck;
    }

    public void setAddressProofCheck(String addressProofCheck) {
        this.addressProofCheck = addressProofCheck;
    }

    public String getAdditionalProofCheck() {
        return additionalProofCheck;
    }

    public void setAdditionalProofCheck(String additionalProofCheck) {
        this.additionalProofCheck = additionalProofCheck;
    }

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

    public String getMergeOption() {
        return mergeOption;
    }

    public void setMergeOption(String mergeOption) {
        this.mergeOption = mergeOption;
    }

    public String getControlFields() {
        return controlFields;
    }

    public void setControlFields(String controlFields) {
        this.controlFields = controlFields;
    }

    public String getPolicyReference() {
        return policyReference;
    }

    public void setPolicyReference(String policyReference) {
        this.policyReference = policyReference;
    }
}