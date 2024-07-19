package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.SSOFundDetailsRepository;
import com.azbj.proposalde3.model.SSOFundDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SSOFundDetailsService {

    @Autowired
    private SSOFundDetailsRepository ssoFundDetailsRepository;

    public List<SSOFundDetails> fetchSSOFundDetails(String productCode, String dateRange) {
        return ssoFundDetailsRepository.findSSOFundDetails(productCode, dateRange);
    }

    public void removeSSOFunds(List<String> selectedFundIds) {
        ssoFundDetailsRepository.deleteSSOFundsByIds(selectedFundIds);
    }

    public void processApportionment(double apportionmentValue) {
        if (apportionmentValue < 0 || apportionmentValue > 100) {
            throw new IllegalArgumentException("Apportionment percentage should be between 0 and 100");
        }
        ssoFundDetailsRepository.updateApportionment(apportionmentValue);
    }
}