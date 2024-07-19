package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.ValidationResultRepository;
import com.azbj.proposalde3.model.ProposalForm;
import com.azbj.proposalde3.model.ValidationResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class ValidationService {

    @Autowired
    private ValidationResultRepository validationResultRepository;

    public ValidationResult validateProposalForm(ProposalForm proposalForm) {
        ValidationResult validationResult = new ValidationResult();

        // Log the validation attempt
        validationResult.setLogDetails("Validation attempt for proposal form: " + proposalForm.getApplicationNumber());

        // Check if the application number exists in the system
        Optional<ProposalForm> existingForm = validationResultRepository.findByApplicationNumber(proposalForm.getApplicationNumber());
        if (!existingForm.isPresent()) {
            validationResult.addError("Application number does not exist.");
        }

        // Verify if the solution name is selected and matches the product code
        if (proposalForm.getSolutionName() == null || !proposalForm.getSolutionName().equals(proposalForm.getProductCode())) {
            validationResult.addError("Solution name is not selected or does not match the product code.");
        }

        // Retrieve and validate credit card details if the renewal payment method is 'CCSI'
        if ("CCSI".equals(proposalForm.getRenewalPaymentMethod())) {
            // Logic to retrieve and validate credit card details
        }

        // Retrieve and validate bank account details if the renewal payment method is 'EMAND'
        if ("EMAND".equals(proposalForm.getRenewalPaymentMethod())) {
            // Logic to retrieve and validate bank account details
        }

        // Enable or disable PAN issuance date fields based on the age proof type
        if ("PAN".equals(proposalForm.getAgeProofType())) {
            // Logic to enable or disable PAN issuance date fields
        }

        // Ensure that the insured's age proof matches the policyholder's age proof if applicable
        if (!proposalForm.getInsuredAgeProof().equals(proposalForm.getPolicyholderAgeProof())) {
            validationResult.addError("Insured's age proof does not match policyholder's age proof.");
        }

        // Enable or disable the date of birth field based on the e-KYC status
        if (proposalForm.isEKYC()) {
            // Logic to enable or disable the date of birth field
        }

        // Validate fund details if the product is unit-linked
        if (proposalForm.isUnitLinkedProduct()) {
            // Logic to validate fund details
        }

        // Check if the solution name is correctly selected for the given product code
        if (!proposalForm.getSolutionName().equals(proposalForm.getProductCode())) {
            validationResult.addError("Solution name is not correctly selected for the given product code.");
        }

        // Validate rider details and set the entry age and partner type based on the rider cover code and other conditions
        if (proposalForm.getRiderCoverCode() != null) {
            // Logic to validate rider details
        }

        // Enable or disable nominee details based on the product code and insured status
        if (proposalForm.getProductCode() != null && proposalForm.isInsured()) {
            // Logic to enable or disable nominee details
        }

        // Ensure that the payout date is correctly calculated based on the policy's backdated status and payout frequency
        if (proposalForm.isBackdatedPolicy()) {
            // Logic to calculate payout date
        }

        // Log any errors or warnings encountered during the validation process
        validationResultRepository.save(validationResult);

        return validationResult;
    }

    public ValidationResult validateMerge() {
        ValidationResult validationResult = new ValidationResult();

        // Execute the validation logic for the merging process
        boolean isMergeChecked = true; // Assume this value is retrieved from the form
        if (isMergeChecked) {
            // Logic to execute validation process
            int validationResultCount = 0; // Assume this value is retrieved from the validation logic
            if (validationResultCount == 0) {
                validationResult.addError("No reason selected. Please select a reason.");
            }
        }

        return validationResult;
    }
}