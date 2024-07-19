package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.ProductIdValidationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductIdValidationService {

    @Autowired
    private ProductIdValidationRepository productIdValidationRepository;

    public ValidationResult validateProductId(String productId, int entryAge, String solutionName) {
        ValidationResult result = new ValidationResult();

        // Check if the product ID exists in the product master table
        boolean productExists = productIdValidationRepository.findProductById(productId);
        if (!productExists) {
            result.setValid(false);
            return result;
        }

        // Populate the package code field
        String packageCode = productIdValidationRepository.findPackageCodeByProductId(productId);
        result.setPackageCode(packageCode);

        // Navigate to the premium field and then to the portfolio strategy field, clearing the portfolio strategy field
        result.setPortfolioStrategy("");

        // Calculate the benefit term based on product definition
        String productDefinition = productIdValidationRepository.findProductDefinitionByProductId(productId);
        int benefitTerm = 0;
        if ("LIFELONG_ASSURE".equals(productDefinition) || "LIFE_SECURE".equals(productDefinition)) {
            benefitTerm = 100 - entryAge;
        } else if ("LONGLIFE_GOAL".equals(productDefinition)) {
            benefitTerm = 99 - entryAge;
        }
        result.setBenefitTerm(benefitTerm);

        // Check if the product ID exists in the solution configuration master table with a product type of 'M'
        boolean solutionExists = productIdValidationRepository.findSolutionByProductIdAndType(productId, 'M');
        if (solutionExists && solutionName.length() < 3) {
            result.setSolutionNameEnabled(true);
        } else {
            result.setSolutionNameEnabled(false);
        }

        // Set the unit link flag and portfolio strategy based on the product code
        String unitLinkFlag = productIdValidationRepository.findUnitLinkFlagByProductId(productId);
        result.setUnitLinkFlag(unitLinkFlag);
        if ("Y".equals(unitLinkFlag) || "P".equals(unitLinkFlag)) {
            result.setUnitLinkTabEnabled(true);
        } else {
            result.setUnitLinkTabEnabled(false);
        }

        return result;
    }

    public void handleNewItemInstance(String unitLinkFlag, String premium) {
        if (!"Y".equals(unitLinkFlag) && !"P".equals(unitLinkFlag) && premium != null) {
            // Disable the insert and update properties of the IP area free text field
            // Assuming there's a method to handle this in the repository or another service
            productIdValidationRepository.disableIpAreaFreeTextField();
        }
    }

    public static class ValidationResult {
        private boolean isValid;
        private String packageCode;
        private String portfolioStrategy;
        private int benefitTerm;
        private boolean solutionNameEnabled;
        private String unitLinkFlag;
        private boolean unitLinkTabEnabled;

        // Getters and Setters

        public boolean isValid() {
            return isValid;
        }

        public void setValid(boolean valid) {
            isValid = valid;
        }

        public String getPackageCode() {
            return packageCode;
        }

        public void setPackageCode(String packageCode) {
            this.packageCode = packageCode;
        }

        public String getPortfolioStrategy() {
            return portfolioStrategy;
        }

        public void setPortfolioStrategy(String portfolioStrategy) {
            this.portfolioStrategy = portfolioStrategy;
        }

        public int getBenefitTerm() {
            return benefitTerm;
        }

        public void setBenefitTerm(int benefitTerm) {
            this.benefitTerm = benefitTerm;
        }

        public boolean isSolutionNameEnabled() {
            return solutionNameEnabled;
        }

        public void setSolutionNameEnabled(boolean solutionNameEnabled) {
            this.solutionNameEnabled = solutionNameEnabled;
        }

        public String getUnitLinkFlag() {
            return unitLinkFlag;
        }

        public void setUnitLinkFlag(String unitLinkFlag) {
            this.unitLinkFlag = unitLinkFlag;
        }

        public boolean isUnitLinkTabEnabled() {
            return unitLinkTabEnabled;
        }

        public void setUnitLinkTabEnabled(boolean unitLinkTabEnabled) {
            this.unitLinkTabEnabled = unitLinkTabEnabled;
        }
    }
}
