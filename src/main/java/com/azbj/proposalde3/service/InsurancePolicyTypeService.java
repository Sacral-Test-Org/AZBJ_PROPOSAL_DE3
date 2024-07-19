package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.InsurancePolicyTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InsurancePolicyTypeService {

    @Autowired
    private InsurancePolicyTypeRepository insurancePolicyTypeRepository;

    public String fetchFieldData(String selectedPolicyType) {
        if (selectedPolicyType == null || selectedPolicyType.isEmpty()) {
            throw new IllegalArgumentException("Selected policy type cannot be null or empty");
        }
        return insurancePolicyTypeRepository.findFieldData(selectedPolicyType);
    }
}
