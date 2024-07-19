package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.VerificationResultRepository;
import com.azbj.proposalde3.model.VerificationResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VerificationResultService {

    @Autowired
    private VerificationResultRepository verificationResultRepository;

    public VerificationResult saveVerificationResult(VerificationResult verificationResult) {
        return verificationResultRepository.save(verificationResult);
    }
}
