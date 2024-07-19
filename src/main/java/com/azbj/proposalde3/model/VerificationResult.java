package com.azbj.proposalde3.model;

public class VerificationResult {
    private boolean desktopFlag;
    private String contractId;
    private String vIpNo;
    private boolean mandatoryFlag;
    private boolean passportProofFlag;
    private String nationality;
    private String ipNationality;
    private String propertyType;
    private String message;

    // Getters and Setters
    public boolean isDesktopFlag() {
        return desktopFlag;
    }

    public void setDesktopFlag(boolean desktopFlag) {
        this.desktopFlag = desktopFlag;
    }

    public String getContractId() {
        return contractId;
    }

    public void setContractId(String contractId) {
        this.contractId = contractId;
    }

    public String getVIpNo() {
        return vIpNo;
    }

    public void setVIpNo(String vIpNo) {
        this.vIpNo = vIpNo;
    }

    public boolean isMandatoryFlag() {
        return mandatoryFlag;
    }

    public void setMandatoryFlag(boolean mandatoryFlag) {
        this.mandatoryFlag = mandatoryFlag;
    }

    public boolean isPassportProofFlag() {
        return passportProofFlag;
    }

    public void setPassportProofFlag(boolean passportProofFlag) {
        this.passportProofFlag = passportProofFlag;
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

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}