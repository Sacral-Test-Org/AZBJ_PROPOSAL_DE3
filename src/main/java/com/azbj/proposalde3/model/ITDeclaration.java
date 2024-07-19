package com.azbj.proposalde3.model;

public class ITDeclaration {
    private String applicationNumber;
    private String insuredPersonNumber;
    private String contractID;
    private String mandatoryStatus;
    private String passportProof;
    private String nationality;
    private String ipNationality;
    private String propertyType;

    // Getters and Setters
    public String getApplicationNumber() {
        return applicationNumber;
    }

    public void setApplicationNumber(String applicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    public String getInsuredPersonNumber() {
        return insuredPersonNumber;
    }

    public void setInsuredPersonNumber(String insuredPersonNumber) {
        this.insuredPersonNumber = insuredPersonNumber;
    }

    public String getContractID() {
        return contractID;
    }

    public void setContractID(String contractID) {
        this.contractID = contractID;
    }

    public String getMandatoryStatus() {
        return mandatoryStatus;
    }

    public void setMandatoryStatus(String mandatoryStatus) {
        this.mandatoryStatus = mandatoryStatus;
    }

    public String getPassportProof() {
        return passportProof;
    }

    public void setPassportProof(String passportProof) {
        this.passportProof = passportProof;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getIpNationality() {
        return ipNationality;
    }

    public void setIpNationality(String ipNationality) {
        this.ipNationality = ipNationality;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }
}