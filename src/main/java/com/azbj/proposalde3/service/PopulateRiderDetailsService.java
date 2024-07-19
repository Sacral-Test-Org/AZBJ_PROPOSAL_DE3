package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.PopulateRiderDetailsRepository;
import com.azbj.proposalde3.model.RiderDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PopulateRiderDetailsService {

    @Autowired
    private PopulateRiderDetailsRepository populateRiderDetailsRepository;

    public List<RiderDetails> fetchRiderDetails(String packageCode, String productCode) {
        // Fetch rider details from the repository based on the package and product code
        List<RiderDetails> riderDetailsList = populateRiderDetailsRepository.getRiderDetails(packageCode, productCode);

        // Apply business logic to the fetched rider details
        for (RiderDetails riderDetails : riderDetailsList) {
            // Set cover code, description, sum assured, premium term, benefit term, entry age, and rider partner
            riderDetails.setCoverCode(riderDetails.getCoverCode());
            riderDetails.setCoverDescription(riderDetails.getCoverDescription());
            riderDetails.setSumAssured(riderDetails.getSumAssured());
            riderDetails.setPremiumTerm(riderDetails.getPremiumTerm());
            riderDetails.setBenefitTerm(riderDetails.getBenefitTerm());
            riderDetails.setEntryAge(riderDetails.getEntryAge());
            riderDetails.setRiderPartner(riderDetails.getRiderPartner());

            // Additional business logic based on specific conditions
            if (riderDetails.getTopUps() == 0 || ("SPECIFIC_COVER_CODE".equals(riderDetails.getCoverCode()) && "SPECIFIC_PRODUCT_CODE".equals(productCode))) {
                // Delete record logic
                riderDetailsList.remove(riderDetails);
            }

            // Adjust premium and benefit terms based on product and cover codes
            if ("SPECIFIC_PRODUCT_CODE".equals(productCode) && "SPECIFIC_COVER_CODE".equals(riderDetails.getCoverCode())) {
                riderDetails.setPremiumTerm(adjustPremiumTerm(riderDetails.getPremiumTerm()));
                riderDetails.setBenefitTerm(adjustBenefitTerm(riderDetails.getBenefitTerm()));
            }
        }

        // Refresh policy member details if the product code is 315
        if ("315".equals(productCode)) {
            refreshPolicyMemberDetails();
        }

        // Refresh child covers if the product code is 321 and the package code starts with 'SMART_CHILD_'
        if ("321".equals(productCode) && packageCode.startsWith("SMART_CHILD_")) {
            refreshChildCovers();
        }

        return riderDetailsList;
    }

    private int adjustPremiumTerm(int premiumTerm) {
        // Logic to adjust premium term
        return premiumTerm + 1; // Example logic
    }

    private int adjustBenefitTerm(int benefitTerm) {
        // Logic to adjust benefit term
        return benefitTerm + 1; // Example logic
    }

    private void refreshPolicyMemberDetails() {
        // Logic to refresh policy member details
    }

    private void refreshChildCovers() {
        // Logic to refresh child covers
    }
}