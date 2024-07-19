package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.PartnerDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartnerDetailsService {

    @Autowired
    private PartnerDetailsRepository partnerDetailsRepository;

    public boolean validateMerge() {
        // Execute the validation logic for the merging process.
        int validationResult = partnerDetailsRepository.validateMerge();

        // Check if the validation result count is zero for a specific reason.
        if (validationResult == 0) {
            // Return false indicating validation failed.
            return false;
        }

        // Return true indicating validation passed.
        return true;
    }

    public boolean mergePartners(List<String> partners) {
        // Validate the list of partners to be merged.
        if (partners == null || partners.isEmpty()) {
            return false;
        }

        // Perform the merging operation.
        boolean mergeResult = partnerDetailsRepository.mergePartners(partners);

        // Return the result of the merging operation.
        return mergeResult;
    }

    public boolean deleteRecords(String applicationNo, String partnerType) {
        // Delete records from the azbj_cp_merging_reason table based on the application number and partner type.
        boolean deleteResult = partnerDetailsRepository.deleteRecords(applicationNo, partnerType);

        // Return the result of the deletion operation.
        return deleteResult;
    }
}