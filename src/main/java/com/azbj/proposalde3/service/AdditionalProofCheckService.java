package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.AdditionalProofCheckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdditionalProofCheckService {

    @Autowired
    private AdditionalProofCheckRepository additionalProofCheckRepository;

    public String validateAdditionalProofCheck(String partnerId, int globalViewImageCount) {
        if (globalViewImageCount == 0 && partnerId != null) {
            additionalProofCheckRepository.updateAdditionalProofCheckStatus(partnerId, "NA");
            return "NA";
        }
        return additionalProofCheckRepository.getAdditionalProofCheckStatus(partnerId);
    }
}
