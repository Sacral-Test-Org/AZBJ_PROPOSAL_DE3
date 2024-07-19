package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.CP_SearchPHRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CP_SearchPHService {

    @Autowired
    private CP_SearchPHRepository cpSearchPHRepository;

    public void validateAgeProof() {
        // Check if global view image count is zero and partner ID is not null
        if (getGlobalViewImageCount() == 0 && getPartnerId() != null) {
            setAgeProofCheck("NA");
            navigateToPolicyDetails();
            displayErrorMessage("Please check the policy details at least once.");
        }
    }

    public void checkAllProofs() {
        // Check if signature check, age proof check, and address proof check are all marked as 'Y'
        if (!isSignatureCheck() || !isAgeProofCheck() || !isAddressProofCheck()) {
            displayErrorMessage("Please select all required questions.");
        }
    }

    public void searchPartners(CP_SearchPH searchCriteria) {
        // Validate input criteria
        if (searchCriteria.getDateOfBirth() == null) {
            displayErrorMessage("Date of Birth is required.");
            return;
        }
        if (searchCriteria.getGender() == null) {
            displayErrorMessage("Gender is required.");
            return;
        }
        if (searchCriteria.getFirstName() == null && searchCriteria.getLastName() == null) {
            displayErrorMessage("First Name or Last Name is required.");
            return;
        }

        // Call repository method to search for partners
        cpSearchPHRepository.findPartners(searchCriteria);
    }

    public void clearFields() {
        // Call repository method to clear fields in the database
        cpSearchPHRepository.clearFields();
    }

    public void resetForm() {
        // Call repository method to reset the form in the database
        cpSearchPHRepository.resetForm();
    }

    private int getGlobalViewImageCount() {
        // Placeholder for actual implementation
        return 0;
    }

    private String getPartnerId() {
        // Placeholder for actual implementation
        return "partnerId";
    }

    private void setAgeProofCheck(String value) {
        // Placeholder for actual implementation
    }

    private void navigateToPolicyDetails() {
        // Placeholder for actual implementation
    }

    private void displayErrorMessage(String message) {
        // Placeholder for actual implementation
    }

    private boolean isSignatureCheck() {
        // Placeholder for actual implementation
        return true;
    }

    private boolean isAgeProofCheck() {
        // Placeholder for actual implementation
        return true;
    }

    private boolean isAddressProofCheck() {
        // Placeholder for actual implementation
        return true;
    }
}
