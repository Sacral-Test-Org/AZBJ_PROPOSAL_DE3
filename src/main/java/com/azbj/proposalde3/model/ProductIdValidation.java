package com.azbj.proposalde3.model;

public class ProductIdValidation {
    private String productId;
    private String packageCode;
    private Double premium;
    private String portfolioStrategy;
    private String solutionName;
    private String unitLinkFlag;

    // Getters and Setters
    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getPackageCode() {
        return packageCode;
    }

    public void setPackageCode(String packageCode) {
        this.packageCode = packageCode;
    }

    public Double getPremium() {
        return premium;
    }

    public void setPremium(Double premium) {
        this.premium = premium;
    }

    public String getPortfolioStrategy() {
        return portfolioStrategy;
    }

    public void setPortfolioStrategy(String portfolioStrategy) {
        this.portfolioStrategy = portfolioStrategy;
    }

    public String getSolutionName() {
        return solutionName;
    }

    public void setSolutionName(String solutionName) {
        this.solutionName = solutionName;
    }

    public String getUnitLinkFlag() {
        return unitLinkFlag;
    }

    public void setUnitLinkFlag(String unitLinkFlag) {
        this.unitLinkFlag = unitLinkFlag;
    }
}