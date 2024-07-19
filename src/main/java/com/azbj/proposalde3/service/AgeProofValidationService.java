package com.azbj.proposalde3.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.azbj.proposalde3.repository.AgeProofValidationRepository;

@Service
public class AgeProofValidationService {

    @Autowired
    private AgeProofValidationRepository ageProofValidationRepository;

    public void validateAgeProof(int globalViewImageCount, String partnerId, String signatureCheck, String ageProofCheck, String addressProofCheck) {
        if (globalViewImageCount == 0 && partnerId != null) {
            ageProofCheck = "NA";
            navigateToPolicyDetails();
            displayErrorMessage("Please check the policy details at least once.");
        } else if (checkAllProofs(signatureCheck, ageProofCheck, addressProofCheck)) {
            // All checks are marked as 'Y', no further action required
        } else {
            displayErrorMessage("Please select all required questions.");
        }
    }

    private boolean checkAllProofs(String signatureCheck, String ageProofCheck, String addressProofCheck) {
        return "Y".equals(signatureCheck) && "Y".equals(ageProofCheck) && "Y".equals(addressProofCheck);
    }

    private void navigateToPolicyDetails() {
        // Logic to navigate to policy details section
    }

    private void displayErrorMessage(String message) {
        // Logic to display error message
    }
}
