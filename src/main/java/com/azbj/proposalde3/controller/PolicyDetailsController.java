package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.model.PolicyDetails;
import com.azbj.proposalde3.service.PolicyDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/policy-details")
public class PolicyDetailsController {

    @Autowired
    private PolicyDetailsService policyDetailsService;

    @GetMapping("/{partnerId}")
    public ResponseEntity<PolicyDetails> getPolicyDetails(@PathVariable String partnerId) {
        PolicyDetails policyDetails = policyDetailsService.getPolicyDetails(partnerId);
        return ResponseEntity.ok(policyDetails);
    }

    @GetMapping("/view-images")
    public ResponseEntity<String> viewImages(@RequestParam String policyId, 
                                             @RequestParam boolean insuredCheck, 
                                             @RequestParam String policyType) {
        try {
            String url = policyDetailsService.generateViewImagesURL(policyId, insuredCheck, policyType);
            return ResponseEntity.ok(url);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error generating URL: " + e.getMessage());
        }
    }
}
