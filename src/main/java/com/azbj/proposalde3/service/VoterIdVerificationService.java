package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.VoterIdVerificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoterIdVerificationService {

    @Autowired
    private VoterIdVerificationRepository voterIdVerificationRepository;

    public String verifyVoterId() {
        // Fetch age proof details for insured person and policyholder
        String ipAgeProof = voterIdVerificationRepository.fetchAgeProof("IP");
        String phAgeProof = voterIdVerificationRepository.fetchAgeProof("PH");

        // Check if age proof is 'VI' for either insured person or policyholder
        if ("VI".equals(ipAgeProof) || "VI".equals(phAgeProof)) {
            return setVoterIdVerifiedFlag();
        }

        // Navigate to 'AML' block and check for 'VI' proof type
        boolean isVoterIdInAml = voterIdVerificationRepository.checkAmlForVoterId();
        if (isVoterIdInAml) {
            return setVoterIdVerifiedFlag();
        }

        // If Voter ID is not verified, display message
        return "Voter’s ID Card Details are not selected for IP/PH";
    }

    private String setVoterIdVerifiedFlag() {
        // Gather and format details
        String ipFullName = voterIdVerificationRepository.fetchFullName("IP");
        String phFullName = voterIdVerificationRepository.fetchFullName("PH");
        String ipDob = voterIdVerificationRepository.fetchDob("IP");
        String phDob = voterIdVerificationRepository.fetchDob("PH");
        String ipAddress = voterIdVerificationRepository.fetchAddress("IP");
        String phAddress = voterIdVerificationRepository.fetchAddress("PH");
        String ipState = voterIdVerificationRepository.fetchState("IP");
        boolean isSamePerson = voterIdVerificationRepository.checkIfSamePerson();

        // Call verification form with parameters
        callVerificationForm(ipFullName, phFullName, ipDob, phDob, ipAddress, phAddress, ipState, isSamePerson);

        return "Voter ID Verified";
    }

    private void callVerificationForm(String ipFullName, String phFullName, String ipDob, String phDob, String ipAddress, String phAddress, String ipState, boolean isSamePerson) {
        // Logic to call the verification form with the provided parameters
        // This is a placeholder for the actual implementation
    }
}
