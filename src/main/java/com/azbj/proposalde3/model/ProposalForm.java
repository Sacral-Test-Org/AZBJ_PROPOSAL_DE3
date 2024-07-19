package com.azbj.proposalde3.model;

import java.util.Date;
import java.util.List;

public class ProposalForm {
    private String applicationNumber;
    private String callFormName;
    private String requestId;
    private Date proposalModifDate;
    private String proposalModifUser;
    private String lockingFlag;
    private String POPULATE_DE1_RECORDS;
    private String proposalType;
    private String productCode;
    private Date saDateRecd;
    private List<FundDetails> fundDetails;
    private List<RiderDetails> riderDetails;
    private Image imageData;
    private int stripNumber;
    private PersonalDetails personalDetails;
    private PolicyDetails policyDetails;
    private VerificationDetails verificationDetails;
    private AdditionalDetails additionalDetails;
    private Statuses statuses;
    private PreviousPolicyDetails previousPolicyDetails;
    private ProposalRecord proposalRecord;

    // Getters and Setters
    public String getApplicationNumber() {
        return applicationNumber;
    }

    public void setApplicationNumber(String applicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    public String getCallFormName() {
        return callFormName;
    }

    public void setCallFormName(String callFormName) {
        this.callFormName = callFormName;
    }

    public String getRequestId() {
        return requestId;
    }

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    public Date getProposalModifDate() {
        return proposalModifDate;
    }

    public void setProposalModifDate(Date proposalModifDate) {
        this.proposalModifDate = proposalModifDate;
    }

    public String getProposalModifUser() {
        return proposalModifUser;
    }

    public void setProposalModifUser(String proposalModifUser) {
        this.proposalModifUser = proposalModifUser;
    }

    public String getLockingFlag() {
        return lockingFlag;
    }

    public void setLockingFlag(String lockingFlag) {
        this.lockingFlag = lockingFlag;
    }

    public String getPOPULATE_DE1_RECORDS() {
        return POPULATE_DE1_RECORDS;
    }

    public void setPOPULATE_DE1_RECORDS(String POPULATE_DE1_RECORDS) {
        this.POPULATE_DE1_RECORDS = POPULATE_DE1_RECORDS;
    }

    public String getProposalType() {
        return proposalType;
    }

    public void setProposalType(String proposalType) {
        this.proposalType = proposalType;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public Date getSaDateRecd() {
        return saDateRecd;
    }

    public void setSaDateRecd(Date saDateRecd) {
        this.saDateRecd = saDateRecd;
    }

    public List<FundDetails> getFundDetails() {
        return fundDetails;
    }

    public void setFundDetails(List<FundDetails> fundDetails) {
        this.fundDetails = fundDetails;
    }

    public List<RiderDetails> getRiderDetails() {
        return riderDetails;
    }

    public void setRiderDetails(List<RiderDetails> riderDetails) {
        this.riderDetails = riderDetails;
    }

    public Image getImageData() {
        return imageData;
    }

    public void setImageData(Image imageData) {
        this.imageData = imageData;
    }

    public int getStripNumber() {
        return stripNumber;
    }

    public void setStripNumber(int stripNumber) {
        this.stripNumber = stripNumber;
    }

    public PersonalDetails getPersonalDetails() {
        return personalDetails;
    }

    public void setPersonalDetails(PersonalDetails personalDetails) {
        this.personalDetails = personalDetails;
    }

    public PolicyDetails getPolicyDetails() {
        return policyDetails;
    }

    public void setPolicyDetails(PolicyDetails policyDetails) {
        this.policyDetails = policyDetails;
    }

    public VerificationDetails getVerificationDetails() {
        return verificationDetails;
    }

    public void setVerificationDetails(VerificationDetails verificationDetails) {
        this.verificationDetails = verificationDetails;
    }

    public AdditionalDetails getAdditionalDetails() {
        return additionalDetails;
    }

    public void setAdditionalDetails(AdditionalDetails additionalDetails) {
        this.additionalDetails = additionalDetails;
    }

    public Statuses getStatuses() {
        return statuses;
    }

    public void setStatuses(Statuses statuses) {
        this.statuses = statuses;
    }

    public PreviousPolicyDetails getPreviousPolicyDetails() {
        return previousPolicyDetails;
    }

    public void setPreviousPolicyDetails(PreviousPolicyDetails previousPolicyDetails) {
        this.previousPolicyDetails = previousPolicyDetails;
    }

    public ProposalRecord getProposalRecord() {
        return proposalRecord;
    }

    public void setProposalRecord(ProposalRecord proposalRecord) {
        this.proposalRecord = proposalRecord;
    }

    // Inner Classes for nested properties
    public static class PersonalDetails {
        private String name;
        private String occupation;
        private String contactInfo;

        // Getters and Setters
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getOccupation() {
            return occupation;
        }

        public void setOccupation(String occupation) {
            this.occupation = occupation;
        }

        public String getContactInfo() {
            return contactInfo;
        }

        public void setContactInfo(String contactInfo) {
            this.contactInfo = contactInfo;
        }
    }

    public static class PolicyDetails {
        private String policyNumber;
        private Date policyDate;
        private String policyStatus;

        // Getters and Setters
        public String getPolicyNumber() {
            return policyNumber;
        }

        public void setPolicyNumber(String policyNumber) {
            this.policyNumber = policyNumber;
        }

        public Date getPolicyDate() {
            return policyDate;
        }

        public void setPolicyDate(Date policyDate) {
            this.policyDate = policyDate;
        }

        public String getPolicyStatus() {
            return policyStatus;
        }

        public void setPolicyStatus(String policyStatus) {
            this.policyStatus = policyStatus;
        }
    }

    public static class VerificationDetails {
        private String panCard;
        private String aadharCard;

        // Getters and Setters
        public String getPanCard() {
            return panCard;
        }

        public void setPanCard(String panCard) {
            this.panCard = panCard;
        }

        public String getAadharCard() {
            return aadharCard;
        }

        public void setAadharCard(String aadharCard) {
            this.aadharCard = aadharCard;
        }
    }

    public static class AdditionalDetails {
        private String financialDocuments;
        private String consentInformation;
        private String relationshipDetails;

        // Getters and Setters
        public String getFinancialDocuments() {
            return financialDocuments;
        }

        public void setFinancialDocuments(String financialDocuments) {
            this.financialDocuments = financialDocuments;
        }

        public String getConsentInformation() {
            return consentInformation;
        }

        public void setConsentInformation(String consentInformation) {
            this.consentInformation = consentInformation;
        }

        public String getRelationshipDetails() {
            return relationshipDetails;
        }

        public void setRelationshipDetails(String relationshipDetails) {
            this.relationshipDetails = relationshipDetails;
        }
    }

    public static class Statuses {
        private boolean eligibilityFlags;
        private int riskScores;
        private boolean verificationStatuses;

        // Getters and Setters
        public boolean isEligibilityFlags() {
            return eligibilityFlags;
        }

        public void setEligibilityFlags(boolean eligibilityFlags) {
            this.eligibilityFlags = eligibilityFlags;
        }

        public int getRiskScores() {
            return riskScores;
        }

        public void setRiskScores(int riskScores) {
            this.riskScores = riskScores;
        }

        public boolean isVerificationStatuses() {
            return verificationStatuses;
        }

        public void setVerificationStatuses(boolean verificationStatuses) {
            this.verificationStatuses = verificationStatuses;
        }
    }

    public static class PreviousPolicyDetails {
        private String policyNumber;
        private String insuranceCompany;
        private double amountOfInsurance;
        private String status;
        private String ipType;

        // Getters and Setters
        public String getPolicyNumber() {
            return policyNumber;
        }

        public void setPolicyNumber(String policyNumber) {
            this.policyNumber = policyNumber;
        }

        public String getInsuranceCompany() {
            return insuranceCompany;
        }

        public void setInsuranceCompany(String insuranceCompany) {
            this.insuranceCompany = insuranceCompany;
        }

        public double getAmountOfInsurance() {
            return amountOfInsurance;
        }

        public void setAmountOfInsurance(double amountOfInsurance) {
            this.amountOfInsurance = amountOfInsurance;
        }

        public String getStatus() {
            return status;
        }

        public void setStatus(String status) {
            this.status = status;
        }

        public String getIpType() {
            return ipType;
        }

        public void setIpType(String ipType) {
            this.ipType = ipType;
        }
    }

    public static class ProposalRecord {
        private String proposalFormField;
        private String comments;
        private String detailsReceived;
        private boolean deleteRow;
        private long proposalRecordId;

        // Getters and Setters
        public String getProposalFormField() {
            return proposalFormField;
        }

        public void setProposalFormField(String proposalFormField) {
            this.proposalFormField = proposalFormField;
        }

        public String getComments() {
            return comments;
        }

        public void setComments(String comments) {
            this.comments = comments;
        }

        public String getDetailsReceived() {
            return detailsReceived;
        }

        public void setDetailsReceived(String detailsReceived) {
            this.detailsReceived = detailsReceived;
        }

        public boolean isDeleteRow() {
            return deleteRow;
        }

        public void setDeleteRow(boolean deleteRow) {
            this.deleteRow = deleteRow;
        }

        public long getProposalRecordId() {
            return proposalRecordId;
        }

        public void setProposalRecordId(long proposalRecordId) {
            this.proposalRecordId = proposalRecordId;
        }
    }

    public static class Image {
        private byte[] imageData;
        private String imageType;

        // Getters and Setters
        public byte[] getImageData() {
            return imageData;
        }

        public void setImageData(byte[] imageData) {
            this.imageData = imageData;
        }

        public String getImageType() {
            return imageType;
        }

        public void setImageType(String imageType) {
            this.imageType = imageType;
        }
    }
}
