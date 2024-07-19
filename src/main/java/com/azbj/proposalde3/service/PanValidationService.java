package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.PanValidationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PanValidationService {

    @Autowired
    private PanValidationRepository panValidationRepository;

    public boolean validatePanCard(String panCardNumber) {
        // Validate PAN format
        if (!panCardNumber.matches("^[A-Z]{3}[C,P,H,F,A,T,B,L,J,G][A-Z][0-9]{4}[A-Z]$")) {
            return false;
        }

        // Check if PAN exists and meets criteria
        boolean isValidPan = panValidationRepository.validatePanCard(panCardNumber);
        return isValidPan;
    }

    public boolean validatePan(String ageProofID) {
        // Perform PAN validation logic
        return validatePanCard(ageProofID);
    }

    public boolean validatePAN(String panNumber) {
        // Validate PAN against business rules
        return validatePanCard(panNumber);
    }

    public boolean validatePAN(String panID) {
        // Perform PAN validation logic
        return validatePanCard(panID);
    }
}
