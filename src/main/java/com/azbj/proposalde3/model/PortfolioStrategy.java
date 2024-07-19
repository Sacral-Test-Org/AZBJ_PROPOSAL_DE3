package com.azbj.proposalde3.model;

public class PortfolioStrategy {
    private String portfolioStrategy;
    private int frequency;
    private String productDefinition;
    private int productCode;
    private String packageCode;

    // Getters and Setters
    public String getPortfolioStrategy() {
        return portfolioStrategy;
    }

    public void setPortfolioStrategy(String portfolioStrategy) {
        this.portfolioStrategy = portfolioStrategy;
    }

    public int getFrequency() {
        return frequency;
    }

    public void setFrequency(int frequency) {
        this.frequency = frequency;
    }

    public String getProductDefinition() {
        return productDefinition;
    }

    public void setProductDefinition(String productDefinition) {
        this.productDefinition = productDefinition;
    }

    public int getProductCode() {
        return productCode;
    }

    public void setProductCode(int productCode) {
        this.productCode = productCode;
    }

    public String getPackageCode() {
        return packageCode;
    }

    public void setPackageCode(String packageCode) {
        this.packageCode = packageCode;
    }
}