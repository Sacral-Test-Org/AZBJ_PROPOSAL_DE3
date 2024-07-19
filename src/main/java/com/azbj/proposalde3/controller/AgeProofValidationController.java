package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.AgeProofValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/age-proof")
public class AgeProofValidationController {

    @Autowired
    private AgeProofValidationService ageProofValidationService;

    @GetMapping("/validate")
    public ResponseEntity<String> validateAgeProof() {
        boolean isValid = ageProofValidationService.validateAgeProof();
        if (isValid) {
            return ResponseEntity.ok("Age proof validation successful.");
        } else {
            return ResponseEntity.badRequest().body("Error: Please check the policy details at least once.");
        }
    }

    @GetMapping("/check-all-proofs")
    public ResponseEntity<String> checkAllProofs() {
        boolean allProofsValid = ageProofValidationService.checkAllProofs();
        if (allProofsValid) {
            return ResponseEntity.ok("All proofs are valid.");
        } else {
            return ResponseEntity.badRequest().body("Error: Please select all required questions.");
        }
    }
}
