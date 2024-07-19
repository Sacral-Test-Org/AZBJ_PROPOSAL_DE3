package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.FieldValidationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FieldValidationService {

    @Autowired
    private FieldValidationRepository fieldValidationRepository;

    public void validateCurrentItem() {
        // Perform all necessary validations on the current item
        fieldValidationRepository.getCurrentItemData();
        // Add validation logic here
    }

    public List<String> fetchEmployeeIdList() {
        // Fetch the list of values for Employee ID from the repository
        return fieldValidationRepository.fetchEmployeeIdList();
    }

    public String validateNomineeRelationship(String gender, String nomineeRelationship) {
        // Fetch the nominee details from the database
        List<String> nomineeDetails = fieldValidationRepository.fetchNomineeDetails();

        // Validate the nominee relationship based on the gender of the insured person
        if ("Male".equalsIgnoreCase(gender) && "Husband".equalsIgnoreCase(nomineeRelationship)) {
            return "Gender of LA is Male, NOMINEE RELATION TO LA cannot be equal to HUSBAND";
        } else if ("Female".equalsIgnoreCase(gender) && "Wife".equalsIgnoreCase(nomineeRelationship)) {
            return "Gender of LA is Female, NOMINEE RELATION TO LA cannot be equal to WIFE";
        }

        // Return validation result
        return "Valid";
    }
}