package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.PanValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PanValidationController {

    @Autowired
    private PanValidationService panValidationService;

    @GetMapping("/validatePanCard")
    public ResponseEntity<?> validatePanCard(@RequestParam String panCardNumber) {
        try {
            boolean isValid = panValidationService.validatePanCard(panCardNumber);
            return ResponseEntity.ok(isValid);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error validating PAN card number");
        }
    }

    @GetMapping("/validatePan")
    public ResponseEntity<?> validatePan(@RequestParam String ageProofID) {
        try {
            boolean isValid = panValidationService.validatePan(ageProofID);
            return ResponseEntity.ok(isValid);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error validating PAN");
        }
    }

    @GetMapping("/validatePAN")
    public ResponseEntity<?> validatePAN(@RequestParam String panNumber) {
        try {
            boolean isValid = panValidationService.validatePAN(panNumber);
            return ResponseEntity.ok(isValid);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error validating PAN number");
        }
    }
}