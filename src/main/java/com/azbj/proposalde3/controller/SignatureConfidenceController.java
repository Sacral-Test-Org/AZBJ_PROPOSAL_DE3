package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.SignatureConfidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignatureConfidenceController {

    @Autowired
    private SignatureConfidenceService signatureConfidenceService;

    @GetMapping("/generateSecureURL")
    public ResponseEntity<String> generateSecureURL(@RequestParam String applicationNumber) {
        String encryptedURL = signatureConfidenceService.generateSecureURL(applicationNumber);
        if (encryptedURL != null) {
            return ResponseEntity.ok(encryptedURL);
        } else {
            return ResponseEntity.status(500).body("URL generation failed");
        }
    }

    @GetMapping("/getSignatureConfidenceDetails")
    public ResponseEntity<List<SignatureConfidence>> getSignatureConfidenceDetails(@RequestParam String applicationNumber) {
        List<SignatureConfidence> details = signatureConfidenceService.getSignatureConfidenceDetails(applicationNumber);
        return ResponseEntity.ok(details);
    }
}
