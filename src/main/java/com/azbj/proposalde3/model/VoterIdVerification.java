package com.azbj.proposalde3.model;

public class VoterIdVerification {
    private boolean voterIdVerified;
    private PersonDetails insuredPersonDetails;
    private PersonDetails policyholderDetails;

    public VoterIdVerification() {}

    public VoterIdVerification(boolean voterIdVerified, PersonDetails insuredPersonDetails, PersonDetails policyholderDetails) {
        this.voterIdVerified = voterIdVerified;
        this.insuredPersonDetails = insuredPersonDetails;
        this.policyholderDetails = policyholderDetails;
    }

    public boolean isVoterIdVerified() {
        return voterIdVerified;
    }

    public void setVoterIdVerified(boolean voterIdVerified) {
        this.voterIdVerified = voterIdVerified;
    }

    public PersonDetails getInsuredPersonDetails() {
        return insuredPersonDetails;
    }

    public void setInsuredPersonDetails(PersonDetails insuredPersonDetails) {
        this.insuredPersonDetails = insuredPersonDetails;
    }

    public PersonDetails getPolicyholderDetails() {
        return policyholderDetails;
    }

    public void setPolicyholderDetails(PersonDetails policyholderDetails) {
        this.policyholderDetails = policyholderDetails;
    }
}

class PersonDetails {
    private String fullName;
    private String dateOfBirth;
    private String address;
    private String state;
    private boolean sameAsInsuredPerson;

    public PersonDetails() {}

    public PersonDetails(String fullName, String dateOfBirth, String address, String state, boolean sameAsInsuredPerson) {
        this.fullName = fullName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.state = state;
        this.sameAsInsuredPerson = sameAsInsuredPerson;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public boolean isSameAsInsuredPerson() {
        return sameAsInsuredPerson;
    }

    public void setSameAsInsuredPerson(boolean sameAsInsuredPerson) {
        this.sameAsInsuredPerson = sameAsInsuredPerson;
    }
}
