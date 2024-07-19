package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.IncompleteProposalDetailsRepository;
import com.azbj.proposalde3.model.IncompleteProposalDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IncompleteProposalDetailsService {

    @Autowired
    private IncompleteProposalDetailsRepository incompleteProposalDetailsRepository;

    public void deleteIncompleteProposalDetails(String recordId) {
        try {
            incompleteProposalDetailsRepository.deleteById(recordId);
        } catch (Exception e) {
            // Handle exception (e.g., log it)
            throw new RuntimeException("Failed to delete record with ID: " + recordId, e);
        }
    }

    public void saveIncompleteDetails(IncompleteProposalDetails details) {
        try {
            details.setVRecheck("Y");
            details.setVStpFlg("Y");
            incompleteProposalDetailsRepository.save(details);
        } catch (Exception e) {
            // Handle exception (e.g., log it)
            throw new RuntimeException("Failed to save incomplete proposal details", e);
        }
    }
}
