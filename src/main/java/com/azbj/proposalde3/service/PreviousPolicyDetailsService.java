package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.PreviousPolicyDetailsRepository;
import com.azbj.proposalde3.model.PreviousPolicyDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PreviousPolicyDetailsService {

    @Autowired
    private PreviousPolicyDetailsRepository previousPolicyDetailsRepository;

    public void deletePreviousPolicyRecord(String policyId) {
        previousPolicyDetailsRepository.deleteById(policyId);
    }

    public List<PreviousPolicyDetails> getPreviousPolicyDetails() {
        return previousPolicyDetailsRepository.findAll();
    }

    public PreviousPolicyDetails updatePreviousPolicyDetails(PreviousPolicyDetails previousPolicyDetails) {
        return previousPolicyDetailsRepository.save(previousPolicyDetails);
    }

    public byte[] getImage(String block, String item, String proposalType) {
        return previousPolicyDetailsRepository.findImage(block, item, proposalType);
    }

    public PreviousPolicyDetails fetchPreviousInsuranceCompanyInfo(String currentBlock, String currentItem) {
        return previousPolicyDetailsRepository.findByBlockAndItem(currentBlock, currentItem);
    }

    public PreviousPolicyDetails updatePreviousInsuranceCompanyInfo(String currentBlock, String currentItem, String newValue) {
        PreviousPolicyDetails details = previousPolicyDetailsRepository.findByBlockAndItem(currentBlock, currentItem);
        details.setInsuranceCompany(newValue);
        return previousPolicyDetailsRepository.save(details);
    }

    public String promptUser() {
        // Logic to prompt user with a question
        // This is a placeholder for actual implementation
        return "Do you wish to add more Policies?";
    }

    public PreviousPolicyDetails updateStatus(String status) {
        PreviousPolicyDetails details = new PreviousPolicyDetails();
        details.setStatus(status);
        return previousPolicyDetailsRepository.save(details);
    }
}