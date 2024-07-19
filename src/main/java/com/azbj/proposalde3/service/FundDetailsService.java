package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.FundDetailsRepository;
import com.azbj.proposalde3.model.FundDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FundDetailsService {

    @Autowired
    private FundDetailsRepository fundDetailsRepository;

    public List<Double> getApportionmentPercentages() {
        List<FundDetails> fundDetailsList = fundDetailsRepository.findAll();
        return fundDetailsList.stream().map(FundDetails::getApportionmentPercentage).toList();
    }

    public void performActionsBasedOnTotal(double totalPercentage) {
        if (totalPercentage == 100) {
            // Enable specific fields based on product code and product definition
            // Navigate to the appropriate block and item
        } else {
            // Navigate to the next record and set focus on a specific field
        }
    }

    public void deleteFundById(String fundId) {
        if (fundDetailsRepository.existsById(fundId)) {
            fundDetailsRepository.deleteById(fundId);
        } else {
            throw new RuntimeException("Fund not found");
        }
    }

    public List<FundDetails> getFunds() {
        return fundDetailsRepository.findAll();
    }

    public void updateFund(String fundId, double apportionmentPercentage) {
        FundDetails fundDetails = fundDetailsRepository.findById(fundId).orElseThrow(() -> new RuntimeException("Fund not found"));
        fundDetails.setApportionmentPercentage(apportionmentPercentage);
        fundDetailsRepository.save(fundDetails);
    }

    public void deleteFund(String fundId) {
        if (fundDetailsRepository.count() > 1) {
            fundDetailsRepository.deleteById(fundId);
        } else {
            throw new RuntimeException("At least one fund is required");
        }
    }

    public List<FundDetails> fetchAvailableFunds(String productCode, String saDateRecd) {
        return fundDetailsRepository.findAvailableFunds(productCode, saDateRecd);
    }

    public void validateApportionment(double percentage) {
        if (percentage < 0 || percentage > 100) {
            throw new RuntimeException("Apportionment percentage should be between 0 and 100");
        }
    }

    public void resetFundDetails() {
        // Clear all fields related to fund details and set specific fields to null
    }

    public void navigateToNext() {
        // Navigate to the next item based on conditions
    }

    public void fetchImageData(String currentBlock, String currentItem, String proposalType) {
        // Fetch the correct image data based on the current block, item, and proposal type
    }

    public void validateCorrectValue(int correctValue) {
        // Validate the correct value against the database
    }

    public void manageSolutionProductDetails(Object solutionProductDetails) {
        // Handle the business logic for managing solution product details
    }

    public void fetchFundDetails(String productCode, String dateRange) {
        // Fetch fund details from the database based on the product code and date range
    }

    public void processApportionment(double apportionmentPercentage, String fundId, String fundName) {
        validateApportionment(apportionmentPercentage);
        FundDetails fundDetails = fundDetailsRepository.findById(fundId).orElseThrow(() -> new RuntimeException("Fund not found"));
        fundDetails.setApportionmentPercentage(apportionmentPercentage);
        fundDetails.setFundName(fundName);
        fundDetailsRepository.save(fundDetails);
    }

    public void fetchFundLOV(String productCode, String coverCode) {
        // Fetch the list of fund names based on the product code and cover code
    }

    public void deleteRecords() {
        // Delete records based on the validation flag
    }

    public void deleteFundRecords() {
        // Delete fund records based on the validation flag
    }

    public void fetchFundNames(String productCode, String coverCode) {
        // Fetch the fund names based on the product code and cover code
    }

    public void fetchFundDetails(String currentBlock, String currentItem) {
        // Fetch the fund details based on the current block and item
    }

    public void fetchFundDetails(String portfolioStrategy, String productDefinition, String productCode, String frequency, String packageCode) {
        // Fetch fund details based on the input parameters
    }

    public void updateFundDetails(FundDetails fundDetails) {
        fundDetailsRepository.save(fundDetails);
    }

    public void fetchFundDetails(String fundName) {
        // Fetch the fund details based on the fund name
    }

    public void fetchFundDetails(String productCode, String dateRange) {
        // Fetch the fund details based on the product code and date range
    }

    public void validateApportionmentPercentage(double percentage) {
        if (percentage < 0 || percentage > 100) {
            throw new RuntimeException("Apportionment percentage should be between 0 and 100");
        }
    }

    public double sumApportionmentPercentages() {
        List<FundDetails> fundDetailsList = fundDetailsRepository.findAll();
        return fundDetailsList.stream().mapToDouble(FundDetails::getApportionmentPercentage).sum();
    }

    public void navigateToBlock(double totalPercentage) {
        if (totalPercentage == 100) {
            // Navigate to the appropriate block and item
        } else {
            // Navigate to the next item in the current block
        }
    }
}
