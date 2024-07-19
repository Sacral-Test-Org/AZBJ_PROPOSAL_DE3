package com.azbj.proposalde3.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FundDetailsValidationService {

    @Autowired
    private FundDetailsValidationRepository fundDetailsValidationRepository;

    public String validateApportionmentPercentage(double percentage) {
        if (percentage < 0 || percentage > 100) {
            return "Apportionment percentage should be between 0 and 100";
        }
        return "";
    }

    public double sumApportionmentPercentages() {
        // Assuming we have a method to get all apportionment percentages
        List<Double> percentages = fundDetailsValidationRepository.getAllApportionmentPercentages();
        return percentages.stream().mapToDouble(Double::doubleValue).sum();
    }

    public void performActionsBasedOnTotal(double totalPercentage) {
        if (totalPercentage == 100) {
            // Enable specific fields based on product code and product definition
            enableSpecificFields();
        } else {
            // Navigate to the next record and set focus on a specific field
            navigateToNextRecordAndSetFocus();
        }
    }

    private void enableSpecificFields() {
        // Logic to enable specific fields
    }

    private void navigateToNextRecordAndSetFocus() {
        // Logic to navigate to the next record and set focus on a specific field
    }

    public String validateFundDetails(FundDetails fundDetails) {
        boolean isValid = fundDetailsValidationRepository.findByFundIdAndFundName(fundDetails.getFundId(), fundDetails.getFundName());
        if (!isValid) {
            return "Invalid fund details";
        }
        return "";
    }

    public String validatePercentage(double apportionmentPercentage) {
        if (apportionmentPercentage < 0 || apportionmentPercentage > 100) {
            return "Apportionment percentage should be between 0 and 100";
        }
        return "";
    }

    public String validateFundId(String fundId) {
        Fund fund = fundDetailsValidationRepository.findFundById(fundId);
        if (fund == null) {
            return "Invalid fund ID";
        }
        return fund.getFundName();
    }

    public String validateCorrectValue(int correctValue) {
        boolean isValid = fundDetailsValidationRepository.findByCorrectValue(correctValue);
        if (!isValid) {
            return "Invalid correct value";
        }
        return "";
    }

    public String updateFundDetails(FundDetails fundDetails) {
        fundDetailsValidationRepository.save(fundDetails);
        return "Fund details updated successfully";
    }

    public String validateFundDetails(int correctFieldValue, List<String> fundList1, List<String> fundList2) {
        boolean isValid = fundDetailsValidationRepository.findByCorrectFieldValue(correctFieldValue);
        if (!isValid) {
            return "Invalid correct field value";
        }
        // Additional validation logic based on fund lists
        return "";
    }
}
