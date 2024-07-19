package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "rider_details")
public class RiderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long riderId;

    private String coverCode;
    private String coverDescription;
    private Double sumAssured;
    private Integer premiumTerm;
    private Integer benefitTerm;
    private Integer entryAge;
    private String riderPartner;
    private String deleteCheckFlag;
    private Double totalRiderInvest;
    private Double correctValueSumAssured;
    private String riderCoverCode;
    private Double riderCoverAmount;

    // Getters and Setters

    public Long getRiderId() {
        return riderId;
    }

    public void setRiderId(Long riderId) {
        this.riderId = riderId;
    }

    public String getCoverCode() {
        return coverCode;
    }

    public void setCoverCode(String coverCode) {
        this.coverCode = coverCode;
    }

    public String getCoverDescription() {
        return coverDescription;
    }

    public void setCoverDescription(String coverDescription) {
        this.coverDescription = coverDescription;
    }

    public Double getSumAssured() {
        return sumAssured;
    }

    public void setSumAssured(Double sumAssured) {
        this.sumAssured = sumAssured;
    }

    public Integer getPremiumTerm() {
        return premiumTerm;
    }

    public void setPremiumTerm(Integer premiumTerm) {
        this.premiumTerm = premiumTerm;
    }

    public Integer getBenefitTerm() {
        return benefitTerm;
    }

    public void setBenefitTerm(Integer benefitTerm) {
        this.benefitTerm = benefitTerm;
    }

    public Integer getEntryAge() {
        return entryAge;
    }

    public void setEntryAge(Integer entryAge) {
        this.entryAge = entryAge;
    }

    public String getRiderPartner() {
        return riderPartner;
    }

    public void setRiderPartner(String riderPartner) {
        this.riderPartner = riderPartner;
    }

    public String getDeleteCheckFlag() {
        return deleteCheckFlag;
    }

    public void setDeleteCheckFlag(String deleteCheckFlag) {
        this.deleteCheckFlag = deleteCheckFlag;
    }

    public Double getTotalRiderInvest() {
        return totalRiderInvest;
    }

    public void setTotalRiderInvest(Double totalRiderInvest) {
        this.totalRiderInvest = totalRiderInvest;
    }

    public Double getCorrectValueSumAssured() {
        return correctValueSumAssured;
    }

    public void setCorrectValueSumAssured(Double correctValueSumAssured) {
        this.correctValueSumAssured = correctValueSumAssured;
    }

    public String getRiderCoverCode() {
        return riderCoverCode;
    }

    public void setRiderCoverCode(String riderCoverCode) {
        this.riderCoverCode = riderCoverCode;
    }

    public Double getRiderCoverAmount() {
        return riderCoverAmount;
    }

    public void setRiderCoverAmount(Double riderCoverAmount) {
        this.riderCoverAmount = riderCoverAmount;
    }
}