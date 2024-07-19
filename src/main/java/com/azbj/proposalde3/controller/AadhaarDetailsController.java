package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.AadhaarDetailsService;
import com.azbj.proposalde3.model.AadhaarDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AadhaarDetailsController {

    @Autowired
    private AadhaarDetailsService aadhaarDetailsService;

    @GetMapping("/verifyAadhar")
    public ResponseEntity<String> verifyAadhar(@RequestParam String aadharNumber) {
        // Call the AadhaarDetailsService to verify the Aadhar card details
        String verificationResult = aadhaarDetailsService.verifyAadhar(aadharNumber);
        return ResponseEntity.ok(verificationResult);
    }
}
