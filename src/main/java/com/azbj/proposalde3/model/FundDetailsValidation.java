package com.azbj.proposalde3.model;

public class FundDetailsValidation {
    private double apportionmentPercentage;
    private boolean validationResult;
    private String fundId;
    private String fundName;
    private boolean isValid;
    private int correctValue;
    private Object fundDetails1;
    private Object fundDetails2;

    // Getters and Setters
    public double getApportionmentPercentage() {
        return apportionmentPercentage;
    }

    public void setApportionmentPercentage(double apportionmentPercentage) {
        this.apportionmentPercentage = apportionmentPercentage;
    }

    public boolean isValidationResult() {
        return validationResult;
    }

    public void setValidationResult(boolean validationResult) {
        this.validationResult = validationResult;
    }

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

    public boolean isValid() {
        return isValid;
    }

    public void setValid(boolean isValid) {
        this.isValid = isValid;
    }

    public int getCorrectValue() {
        return correctValue;
    }

    public void setCorrectValue(int correctValue) {
        this.correctValue = correctValue;
    }

    public Object getFundDetails1() {
        return fundDetails1;
    }

    public void setFundDetails1(Object fundDetails1) {
        this.fundDetails1 = fundDetails1;
    }

    public Object getFundDetails2() {
        return fundDetails2;
    }

    public void setFundDetails2(Object fundDetails2) {
        this.fundDetails2 = fundDetails2;
    }
}