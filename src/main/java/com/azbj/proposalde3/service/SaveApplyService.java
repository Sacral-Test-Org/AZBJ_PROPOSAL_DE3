package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.SaveApplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaveApplyService {

    @Autowired
    private SaveApplyRepository saveApplyRepository;

    public String saveAndApply(CPData cpData) {
        // Step 1: Validate the input data
        if (cpData == null || cpData.getApplicationNumber() == null || cpData.getPartnerType() == null) {
            throw new IllegalArgumentException("Invalid CP data");
        }

        // Step 2: Perform necessary business logic to save and apply the CP data
        // Initialize necessary variables
        String applicationNumber = cpData.getApplicationNumber();
        String partnerType = cpData.getPartnerType();
        boolean chooseMerge = cpData.isChooseMerge();
        boolean singleCPMatched = cpData.isSingleCPMatched();
        boolean chooseForMerging = cpData.isChooseForMerging();

        // Navigate to the "Previous Policy" section and collect previous policy numbers
        List<String> previousPolicyNumbers = cpData.getPreviousPolicies().stream()
                .filter(policy -> "IP".equals(policy.getType()) || "PH".equals(policy.getType()))
                .map(PreviousPolicy::getPolicyNumber)
                .collect(Collectors.toList());

        // Clear specific fields in the "CP Search" section
        cpData.clearCPSearchFields();

        // Delete existing merge requests from the database
        saveApplyRepository.deleteMergeRequests(applicationNumber, partnerType);

        // Handle "Choose Merge" option
        if (chooseMerge) {
            if (!cpData.validatePartnerTypeAndDOB()) {
                throw new IllegalArgumentException("Invalid partner type or date of birth for merging");
            }
            // Additional logic for merging
        }

        // Handle "Single CP Matched" option
        if (singleCPMatched) {
            if (cpData.getSelectedCPs().size() != 1) {
                throw new IllegalArgumentException("Exactly one CP must be selected for single CP matched");
            }
            cpData.updateCorrectValueFields();
        }

        // Handle "Choose for Merging" option
        if (chooseForMerging) {
            if (cpData.getSelectedCPs().size() < 2) {
                throw new IllegalArgumentException("At least two CPs must be selected for merging");
            }
            saveApplyRepository.createMergeRequest(cpData);
        }

        // Update the "Control" section with the appropriate flags
        cpData.updateControlSection();

        // Validate the RCU and navigate to the appropriate item
        if (!cpData.validateRCU()) {
            throw new IllegalArgumentException("RCU validation failed");
        }

        // Step 3: Call the repository method to perform database operations
        String result = saveApplyRepository.saveAndApply(cpData);

        // Step 4: Return the result to the controller
        return result;
    }
}
