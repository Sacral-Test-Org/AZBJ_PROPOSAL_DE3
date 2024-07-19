package com.azbj.proposalde3.service;

import com.azbj.proposalde3.model.PolicyDetails;
import com.azbj.proposalde3.repository.PolicyDetailsRepository;
import com.azbj.proposalde3.util.EncryptionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PolicyDetailsService {

    @Autowired
    private PolicyDetailsRepository policyDetailsRepository;

    private static int globalImageViewCounter = 0;
    private static int phImageViewCounter = 0;

    public PolicyDetails getPolicyDetails(Long partnerId) {
        return policyDetailsRepository.findPolicyDetailsByPartnerId(partnerId);
    }

    public String generateViewImagesURL(Long policyId, boolean insuredCheck, String policyType) {
        globalImageViewCounter++;
        if (insuredCheck && "PH".equals(policyType)) {
            phImageViewCounter++;
        }
        try {
            return EncryptionUtil.encrypt(policyId.toString());
        } catch (Exception e) {
            return "Error generating URL";
        }
    }

    public PolicyDetails fetchPolicyDetails(Long partnerId) {
        return policyDetailsRepository.findPolicyDetailsByPartnerId(partnerId);
    }
}
