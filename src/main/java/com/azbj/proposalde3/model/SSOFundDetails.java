package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class SSOFundDetails {

    @Id
    private String fundId;

    @Column(nullable = false)
    private String fundName;

    @Column(nullable = false)
    private Double apportionment;

    @Column(nullable = false)
    private Double totalFundValue;

    @Column(nullable = true)
    private Double correctApportionment;

    @Column(nullable = true)
    private String fundDetails;

    // Getters and Setters

    public String getFundId() {
        return fundId;
    }

    public void setFundId(String fundId) {
        this.fundId = fundId;
    }

    public String getFundName() {
        return fundName;
    }

    public void setFundName(String fundName) {
        this.fundName = fundName;
    }

    public Double getApportionment() {
        return apportionment;
    }

    public void setApportionment(Double apportionment) {
        this.apportionment = apportionment;
    }

    public Double getTotalFundValue() {
        return totalFundValue;
    }

    public void setTotalFundValue(Double totalFundValue) {
        this.totalFundValue = totalFundValue;
    }

    public Double getCorrectApportionment() {
        return correctApportionment;
    }

    public void setCorrectApportionment(Double correctApportionment) {
        this.correctApportionment = correctApportionment;
    }

    public String getFundDetails() {
        return fundDetails;
    }

    public void setFundDetails(String fundDetails) {
        this.fundDetails = fundDetails;
    }
}
