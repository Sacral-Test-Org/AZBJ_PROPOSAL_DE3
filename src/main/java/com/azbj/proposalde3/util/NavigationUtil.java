package com.azbj.proposalde3.util;

import com.azbj.proposalde3.model.NavigationModel;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class NavigationUtil {
    private static final Logger logger = LogManager.getLogger(NavigationUtil.class);

    public static boolean validateNavigationConditions(NavigationModel navigationModel) {
        if (navigationModel.getProductCode() == 315 && ("FAMILY_HEALTH_CARE".equals(navigationModel.getPackageCode()) || "FAMILY_HEALTH_CARE_PLUS".equals(navigationModel.getPackageCode()))) {
            navigationModel.setFamilyMembersTabEnabled(true);
            navigationModel.setNextField("POL_MEMB_NEXT_TAB");
            if (navigationModel.isSpousePresent()) {
                navigationModel.addSpouseDetails();
            } else {
                navigationModel.removeSpouseDetails();
            }
        } else if (navigationModel.getProductCode() == 316 && "Y".equals(navigationModel.getSpwFlag()) && (navigationModel.getSpwPercentage() == null || navigationModel.getSpwFrequency() == null)) {
            navigationModel.setErrorMessage("Please enter SPW percentage and frequency.");
            return false;
        } else if (navigationModel.getRiderCoverCode().startsWith("L") && (!navigationModel.getRiderSumAssured().equals(navigationModel.getMainCoverSumAssured()) || !navigationModel.getRiderBenefitTerm().equals(navigationModel.getMainCoverBenefitTerm()) || !navigationModel.getRiderPremiumTerm().equals(navigationModel.getMainCoverPremiumTerm()))) {
            navigationModel.setNextField("sum_assured");
            navigationModel.setErrorMessage("Rider details should match the main cover values.");
            return false;
        } else if (navigationModel.getSolutionName() > 0) {
            navigationModel.setNextField("SUM_ASSURED");
        } else if ("Y".equals(navigationModel.getGroupProductFlag())) {
            navigationModel.setCoversGroupTabEnabled(true);
            navigationModel.setNextField("COVER_TYPE");
        } else if ("Y".equals(navigationModel.getUnitLinkFlag()) || "P".equals(navigationModel.getUnitLinkFlag())) {
            navigationModel.setUnitLinkTabEnabled(true);
            if (navigationModel.isPortfolioStrategyEnabled()) {
                navigationModel.setNextField("PORTFOLIO_STRATEGY");
                navigationModel.executeWhenListChangedTrigger();
            } else {
                navigationModel.setNextField("CORRECT_FUNDNAME");
            }
            if (navigationModel.getProductCode() == 301) {
                navigationModel.resetAzbjSsoFundDetails();
                navigationModel.disableFieldsInAzbjSsoFundDetails1();
            }
        } else {
            navigationModel.setBankDetailsTabEnabled(true);
            if (navigationModel.isPennyDropSuccessful()) {
                navigationModel.setNextField("PROPOSAL_SIGN_DATE");
            } else {
                navigationModel.setNextField("BANK_ACCOUNT_NO");
            }
        }

        if (navigationModel.getMasterPolicy() == null && navigationModel.getInsuredPersonAge() > 18) {
            navigationModel.determineSafeDistrictFlag();
            if ("Y".equals(navigationModel.getSafeDistrictFlag())) {
                navigationModel.hideField("SUSPECTED_CASE");
                navigationModel.showField("SAFE_DISTRICT_FLAG");
                navigationModel.setSafeDistrictFlagValue("SAFE DISTRICT CASE");
            }
        }

        return true;
    }

    public static void logDebugInformation(String debugInfo) {
        logger.debug(debugInfo);
    }
}
