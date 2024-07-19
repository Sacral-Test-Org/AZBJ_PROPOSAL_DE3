package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.PolicyDetailsOthersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PolicyDetailsOthersController {

    @Autowired
    private PolicyDetailsOthersService policyDetailsOthersService;

    @PostMapping("/handleExitButton")
    public void handleExitButton(@RequestParam String currentWindow, @RequestParam String policyReference) {
        if ("IP".equals(currentWindow) && policyReference != null && policyDetailsOthersService.checkGlobalViewImageCount() == 0) {
            // Prompt user to select 'VIEW IMAGES'
            policyDetailsOthersService.promptUserToViewImages();
            // Navigate to 'VIEW IMAGES' item in policy details section
            policyDetailsOthersService.navigateToViewImagesItem();
        } else if ("PH".equals(currentWindow) && policyReference != null && policyDetailsOthersService.checkInsuredCheck() == 1 && policyDetailsOthersService.checkGlobalViewImageCountForPH() == 0) {
            // Prompt user to select 'VIEW IMAGES'
            policyDetailsOthersService.promptUserToViewImages();
            // Navigate to 'VIEW IMAGES' item in policy details section
            policyDetailsOthersService.navigateToViewImagesItem();
        }
        // Hide current view and window
        policyDetailsOthersService.hideCurrentView();
        // Navigate based on current window
        if ("PH".equals(currentWindow)) {
            policyDetailsOthersService.navigateToPolicyDetailsInCP_SEARCH_RESULT_PH();
        } else {
            policyDetailsOthersService.navigateToPolicyDetailsInCP_SEARCH_RESULT();
        }
        // Reset current window indicator to 'N'
        policyDetailsOthersService.resetCurrentWindowIndicator();
    }
}
