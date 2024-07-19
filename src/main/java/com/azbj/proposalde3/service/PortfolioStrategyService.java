package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.PortfolioStrategyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PortfolioStrategyService {

    @Autowired
    private PortfolioStrategyRepository portfolioStrategyRepository;

    public String validatePortfolioStrategy(String portfolioStrategy, String frequency, String productDefinition, int productCode, String packageCode) {
        if ("AT".equals(portfolioStrategy) && "12".equals(frequency)) {
            return "Auto Transfer Portfolio is not applicable for Monthly Mode";
        }

        if ("MONEY_SECURE_PLAN".equals(productDefinition)) {
            portfolioStrategy = "IS";
        } else if ("PRINCIPAL_GAIN".equals(productDefinition)) {
            portfolioStrategy = "WL";
        }

        if (portfolioStrategy != null && !"SO".equals(portfolioStrategy)) {
            // Navigate to AZBJ_SSO_FUND_DETAILS block and clear it
            portfolioStrategyRepository.clearAZBJSSOFundDetails();
            // Disable fields
            portfolioStrategyRepository.disableFields("CORRECT_FUNDLIST", "CORRECT_APPORT", "CORRECT_FUND_ID");
        }

        if ("SO".equals(portfolioStrategy)) {
            // Enable fields
            portfolioStrategyRepository.enableFields("CORRECT_FUNDLIST", "CORRECT_APPORT");
        }

        if (isProductCodeInList(productCode, 307, 316, 331, 351, 353) && isPortfolioStrategyInList(portfolioStrategy, "TB", "AT")) {
            // Navigate and clear blocks
            portfolioStrategyRepository.clearBlockWithoutValidation("UL_AT_PORTFOL");
            portfolioStrategyRepository.clearBlockWithoutValidation("UL_AT_PORTFOL_2");
            portfolioStrategyRepository.enableFieldForAllRecords("AZBJ_FUND_DETAILS", "APPORTIONMENT");
        }

        if (isProductCodeInList(productCode, 307, 316, 331) && isPortfolioStrategyInList(portfolioStrategy, "TB", "WL", "CP")) {
            portfolioStrategyRepository.disableField("CMD_FUND_VAL");
        } else {
            portfolioStrategyRepository.enableField("CMD_FUND_VAL");
        }

        if (productCode == 311 && "SO".equals(portfolioStrategy) && !packageCode.contains("SINGLE")) {
            portfolioStrategy = null;
            return "SSO Option is applicable only for Single premium";
        }

        // Call procedure to populate fund details
        portfolioStrategyRepository.callAZBJWOLFundPopulateProcedure(portfolioStrategy);

        return "Validation and update completed successfully";
    }

    private boolean isProductCodeInList(int productCode, int... codes) {
        for (int code : codes) {
            if (productCode == code) {
                return true;
            }
        }
        return false;
    }

    private boolean isPortfolioStrategyInList(String portfolioStrategy, String... strategies) {
        for (String strategy : strategies) {
            if (strategy.equals(portfolioStrategy)) {
                return true;
            }
        }
        return false;
    }
}
