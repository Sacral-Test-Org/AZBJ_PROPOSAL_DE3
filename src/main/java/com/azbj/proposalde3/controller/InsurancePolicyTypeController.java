package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.InsurancePolicyTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InsurancePolicyTypeController {

    @Autowired
    private InsurancePolicyTypeService insurancePolicyTypeService;

    @GetMapping("/api/insurance-policy-type")
    public ResponseEntity<?> getFieldData(@RequestParam String selectedPolicyType) {
        if (selectedPolicyType == null || selectedPolicyType.isEmpty()) {
            return ResponseEntity.badRequest().body("Selected policy type cannot be null or empty");
        }
        try {
            Object fieldData = insurancePolicyTypeService.fetchFieldData(selectedPolicyType);
            return ResponseEntity.ok(fieldData);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred while fetching field data");
        }
    }
}
