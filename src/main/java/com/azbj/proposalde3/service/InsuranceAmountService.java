package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.InsuranceAmountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InsuranceAmountService {

    @Autowired
    private InsuranceAmountRepository insuranceAmountRepository;

    public int getStripNumber(String blockName, String fieldName, String proposalType) {
        return insuranceAmountRepository.getStripNumber(blockName, fieldName, proposalType);
    }

    public String getFileName(int stripNumber, String proposalType) {
        return insuranceAmountRepository.getFileName(stripNumber, proposalType);
    }
}
