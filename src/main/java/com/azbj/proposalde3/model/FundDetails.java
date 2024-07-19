package com.azbj.proposalde3.model;

public class FundDetails {
    private String fundId;
    private String fundName;
    private double apportionmentPercentage;
    private boolean isMarkedForDeletion;

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

    public double getApportionmentPercentage() {
        return apportionmentPercentage;
    }

    public void setApportionmentPercentage(double apportionmentPercentage) {
        this.apportionmentPercentage = apportionmentPercentage;
    }

    public boolean isMarkedForDeletion() {
        return isMarkedForDeletion;
    }

    public void setMarkedForDeletion(boolean markedForDeletion) {
        isMarkedForDeletion = markedForDeletion;
    }
}