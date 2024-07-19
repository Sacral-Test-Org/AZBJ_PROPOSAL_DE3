package com.azbj.proposalde3.model;

public class AadhaarValidation {
    private String aadhaarNumber;
    private boolean validationFlag;
    private String applicationNumber;
    private String mobileNumber;
    private String name;
    private String middleName;
    private String surname;
    private String dateOfBirth;
    private String gender;
    private String ageProofType;
    private String ageProofID;

    // Getters and Setters
    public String getAadhaarNumber() {
        return aadhaarNumber;
    }

    public void setAadhaarNumber(String aadhaarNumber) {
        this.aadhaarNumber = aadhaarNumber;
    }

    public boolean isValidationFlag() {
        return validationFlag;
    }

    public void setValidationFlag(boolean validationFlag) {
        this.validationFlag = validationFlag;
    }

    public String getApplicationNumber() {
        return applicationNumber;
    }

    public void setApplicationNumber(String applicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
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

    public String getAgeProofType() {
        return ageProofType;
    }

    public void setAgeProofType(String ageProofType) {
        this.ageProofType = ageProofType;
    }

    public String getAgeProofID() {
        return ageProofID;
    }

    public void setAgeProofID(String ageProofID) {
        this.ageProofID = ageProofID;
    }
}