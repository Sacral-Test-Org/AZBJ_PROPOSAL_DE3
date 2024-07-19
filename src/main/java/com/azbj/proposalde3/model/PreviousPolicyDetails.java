package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class PreviousPolicyDetails {

    @Id
    private String policyId;

    @Column(length = 50)
    private String previousPolicyNumber;

    @Column(length = 50)
    private String previousInsuranceCompanyInfo;

    private String block;
    private String item;
    private String proposalType;
    private String image;
    private String previousPolicyStatus;
    private String nomineeNextTab;

    // Getters and Setters

    public String getPolicyId() {
        return policyId;
    }

    public void setPolicyId(String policyId) {
        this.policyId = policyId;
    }

    public String getPreviousPolicyNumber() {
        return previousPolicyNumber;
    }

    public void setPreviousPolicyNumber(String previousPolicyNumber) {
        this.previousPolicyNumber = previousPolicyNumber;
    }

    public String getPreviousInsuranceCompanyInfo() {
        return previousInsuranceCompanyInfo;
    }

    public void setPreviousInsuranceCompanyInfo(String previousInsuranceCompanyInfo) {
        this.previousInsuranceCompanyInfo = previousInsuranceCompanyInfo;
    }

    public String getBlock() {
        return block;
    }

    public void setBlock(String block) {
        this.block = block;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public String getProposalType() {
        return proposalType;
    }

    public void setProposalType(String proposalType) {
        this.proposalType = proposalType;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getPreviousPolicyStatus() {
        return previousPolicyStatus;
    }

    public void setPreviousPolicyStatus(String previousPolicyStatus) {
        this.previousPolicyStatus = previousPolicyStatus;
    }

    public String getNomineeNextTab() {
        return nomineeNextTab;
    }

    public void setNomineeNextTab(String nomineeNextTab) {
        this.nomineeNextTab = nomineeNextTab;
    }
}