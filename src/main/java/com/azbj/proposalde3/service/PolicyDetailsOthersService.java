package com.azbj.proposalde3.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.azbj.proposalde3.repository.PolicyDetailsOthersRepository;

@Service
public class PolicyDetailsOthersService {

    @Autowired
    private PolicyDetailsOthersRepository policyDetailsOthersRepository;

    public boolean checkGlobalViewImageCount(String currentWindow, String policyReference) {
        // Logic to check if the global view image count is zero for the given window and policy reference
        int globalViewImageCount = policyDetailsOthersRepository.getGlobalViewImageCount(currentWindow, policyReference);
        return globalViewImageCount == 0;
    }

    public boolean checkInsuredCheck(String currentWindow, String policyReference) {
        // Logic to check if the insured check is '1' and the global view image count for 'PH' is zero for the given window and policy reference
        boolean insuredCheck = policyDetailsOthersRepository.getInsuredCheck(currentWindow, policyReference);
        int globalViewImageCountPH = policyDetailsOthersRepository.getGlobalViewImageCount("PH", policyReference);
        return insuredCheck && globalViewImageCountPH == 0;
    }

    public void hideCurrentView() {
        // Logic to hide the current view and window
        policyDetailsOthersRepository.hideCurrentView();
    }

    public void navigateToPolicyDetails(String currentWindow) {
        // Logic to navigate to the appropriate policy details section based on the current window
        if ("PH".equals(currentWindow)) {
            policyDetailsOthersRepository.navigateToSection("CP_SEARCH_RESULT_PH");
        } else {
            policyDetailsOthersRepository.navigateToSection("CP_SEARCH_RESULT");
        }
    }

    public void resetCurrentWindowIndicator() {
        // Logic to reset the current window indicator to 'N'
        policyDetailsOthersRepository.resetCurrentWindowIndicator();
    }
}
