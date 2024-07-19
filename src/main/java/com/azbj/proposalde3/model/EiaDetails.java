package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class EiaDetails {

    @Id
    @Column(name = "application_no")
    private String applicationNo;

    @Column(name = "top_indicator")
    private String topIndicator;

    @Column(name = "eia_account_type")
    private String eiaAccountType;

    // Getters and Setters

    public String getApplicationNo() {
        return applicationNo;
    }

    public void setApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
    }

    public String getTopIndicator() {
        return topIndicator;
    }

    public void setTopIndicator(String topIndicator) {
        this.topIndicator = topIndicator;
    }

    public String getEiaAccountType() {
        return eiaAccountType;
    }

    public void setEiaAccountType(String eiaAccountType) {
        this.eiaAccountType = eiaAccountType;
    }
}