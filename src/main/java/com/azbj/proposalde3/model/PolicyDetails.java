package com.azbj.proposalde3.model;

import java.util.Date;

public class PolicyDetails {
    private String partnerId;
    private String policyRef;
    private String contractStatus;
    private String roleType;
    private double sumAssured;
    private Date startDate;
    private Date riskDate;
    private String productId;
    private String ratedUp;
    private String reason;
    private String value;
    private double mlPerc;
    private double ocPerc;
    private double nriPerc;
    private double srPerc;

    // Getters and Setters
    public String getPartnerId() {
        return partnerId;
    }

    public void setPartnerId(String partnerId) {
        this.partnerId = partnerId;
    }

    public String getPolicyRef() {
        return policyRef;
    }

    public void setPolicyRef(String policyRef) {
        this.policyRef = policyRef;
    }

    public String getContractStatus() {
        return contractStatus;
    }

    public void setContractStatus(String contractStatus) {
        this.contractStatus = contractStatus;
    }

    public String getRoleType() {
        return roleType;
    }

    public void setRoleType(String roleType) {
        this.roleType = roleType;
    }

    public double getSumAssured() {
        return sumAssured;
    }

    public void setSumAssured(double sumAssured) {
        this.sumAssured = sumAssured;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getRiskDate() {
        return riskDate;
    }

    public void setRiskDate(Date riskDate) {
        this.riskDate = riskDate;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getRatedUp() {
        return ratedUp;
    }

    public void setRatedUp(String ratedUp) {
        this.ratedUp = ratedUp;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public double getMlPerc() {
        return mlPerc;
    }

    public void setMlPerc(double mlPerc) {
        this.mlPerc = mlPerc;
    }

    public double getOcPerc() {
        return ocPerc;
    }

    public void setOcPerc(double ocPerc) {
        this.ocPerc = ocPerc;
    }

    public double getNriPerc() {
        return nriPerc;
    }

    public void setNriPerc(double nriPerc) {
        this.nriPerc = nriPerc;
    }

    public double getSrPerc() {
        return srPerc;
    }

    public void setSrPerc(double srPerc) {
        this.srPerc = srPerc;
    }
}