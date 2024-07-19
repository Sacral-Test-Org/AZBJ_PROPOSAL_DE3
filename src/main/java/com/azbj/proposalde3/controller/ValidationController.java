package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ValidationService;
import com.azbj.proposalde3.model.ProposalForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/validation")
public class ValidationController {

    @Autowired
    private ValidationService validationService;

    @PostMapping("/validateProposalForm")
    public ResponseEntity<?> validateProposalForm(@RequestBody ProposalForm proposalForm) {
        try {
            return ResponseEntity.ok(validationService.validateProposalForm(proposalForm));
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Validation failed: " + e.getMessage());
        }
    }

    @PostMapping("/validateMerge")
    public ResponseEntity<?> validateMerge() {
        try {
            return ResponseEntity.ok(validationService.validateMerge());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Validation failed: " + e.getMessage());
        }
    }
}