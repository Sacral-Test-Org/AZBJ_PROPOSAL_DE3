package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.SolutionProductRepository;
import com.azbj.proposalde3.model.SolutionProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SolutionProductService {

    @Autowired
    private SolutionProductRepository solutionProductRepository;

    @Autowired
    private FundDetailsService fundDetailsService;

    public SolutionProduct manageSolutionProductDetails(SolutionProduct solutionProductDetails) {
        // Business logic for managing solution product details
        // This is a placeholder for the actual logic
        return solutionProductDetails;
    }

    public List<SolutionProduct> fetchPackages(String productCode) {
        return solutionProductRepository.findByProductCode(productCode);
    }

    public List<SolutionProduct> fetchPackagesByProductId(String productCode) {
        return solutionProductRepository.findByProductId(productCode);
    }

    public List<String> fetchPayoutFrequency() {
        // Fetch the payout frequency from the repository
        return solutionProductRepository.findPayoutFrequency();
    }

    public boolean validateFSCCode(String fscCode) {
        // Validate the FSC code against predefined values
        return solutionProductRepository.isValidFSCCode(fscCode);
    }

    public double fetchSumAssured() {
        // Fetch the sum assured value from the solution product
        return solutionProductRepository.findSumAssured();
    }

    public void setPremiumTerm(int premiumTerm) {
        // Handle the business logic for setting the premium term
        fundDetailsService.setPremiumTerm(premiumTerm);
    }

    public List<String> getRenewalPaymentMethods(String frequency, String fscCode) {
        // Determine the renewal payment methods based on the frequency and FSC codes
        return solutionProductRepository.findRenewalPaymentMethods(frequency, fscCode);
    }

    public void updateBenefitTerm(int benefitTerm) {
        // Update the benefit term value in the database
        solutionProductRepository.updateBenefitTerm(benefitTerm);
    }

    public void calculateAndUpdateRiderCoverAmounts() {
        // Retrieve the records from the rider details block
        List<SolutionProduct> riderDetails = solutionProductRepository.findRiderDetails();
        for (SolutionProduct riderDetail : riderDetails) {
            if (riderDetail.getRiderCoverCode().startsWith("R")) {
                double riderCoverAmount = Math.round(riderDetail.getTotalRiderInvest() * riderDetail.getSumAssured() / (riderDetail.getSumAssured() + riderDetail.getCorrectValue().getSumAssured()) * 100.0) / 100.0;
                riderDetail.setRiderCoverAmount(riderCoverAmount);
                solutionProductRepository.saveRiderDetails(riderDetail);
            }
            if (riderDetail.getTotalRiderInvest() == 0) {
                solutionProductRepository.deleteRiderDetail(riderDetail);
            }
        }
    }

    public boolean validateProductCode(String productCode) {
        // Validate the product code
        return solutionProductRepository.validateProductCode(productCode);
    }

    public List<String> determinePaymentMethods(String frequency, String fscCode) {
        // Determine the available payment methods based on the frequency and FSC code
        return solutionProductRepository.findPaymentMethods(frequency, fscCode);
    }
}