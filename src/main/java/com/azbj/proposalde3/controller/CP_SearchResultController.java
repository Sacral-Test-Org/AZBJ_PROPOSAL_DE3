package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.model.CP_SearchResult;
import com.azbj.proposalde3.service.CP_SearchResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CP_SearchResultController {

    @Autowired
    private CP_SearchResultService cpSearchResultService;

    @GetMapping("/policy-details")
    public ResponseEntity<CP_SearchResult> getPolicyDetails(@RequestParam Long partnerId) {
        CP_SearchResult policyDetails = cpSearchResultService.getPolicyDetails(partnerId);
        return ResponseEntity.ok(policyDetails);
    }

    @PostMapping("/search-customer-profiles")
    public ResponseEntity<?> searchCustomerProfiles(@RequestBody Object searchCriteria) {
        Object searchResults = cpSearchResultService.searchCustomerProfiles(searchCriteria);
        return ResponseEntity.ok(searchResults);
    }

    @PostMapping("/update-customer-profile")
    public ResponseEntity<?> updateCustomerProfile(@RequestBody Object updateFields) {
        Object updatedProfile = cpSearchResultService.updateCustomerProfile(updateFields);
        return ResponseEntity.ok(updatedProfile);
    }

    @PostMapping("/reset-to-chk-field")
    public ResponseEntity<?> resetToChkField(@RequestParam String option) {
        cpSearchResultService.resetToChkField(option);
        return ResponseEntity.ok().build();
    }
}
