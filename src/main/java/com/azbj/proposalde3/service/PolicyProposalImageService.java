package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.PolicyProposalImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PolicyProposalImageService {
    @Autowired
    private PolicyProposalImageRepository policyProposalImageRepository;

    public byte[] fetchImageData(int stripNumber) {
        return policyProposalImageRepository.fetchImageData(stripNumber);
    }
}