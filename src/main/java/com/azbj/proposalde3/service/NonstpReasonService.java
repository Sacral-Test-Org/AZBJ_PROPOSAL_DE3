package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.NonstpReasonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NonstpReasonService {

    @Autowired
    private NonstpReasonRepository nonstpReasonRepository;

    public void clearNonstpReason() {
        // Clear the non-stop reason and set the recheck and stop flags to 'Y'
        nonstpReasonRepository.updateNonstpReason("", 'Y', 'Y');
    }

    public void saveNonstpReason(String nonstpReason) {
        // Save the non-stop reason in the database
        nonstpReasonRepository.save(nonstpReason);
    }

    public void updateScrutinyPartnerForm(String applicationNumber, Object previousPolicyDetails) {
        // Update the scrutiny partner form with the provided details in the database
        nonstpReasonRepository.updateScrutinyPartnerForm(applicationNumber, previousPolicyDetails);
    }
}
