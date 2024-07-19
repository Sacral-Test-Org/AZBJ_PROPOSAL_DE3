package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.VoterIdVerificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/voter-id")
public class VoterIdVerificationController {

    @Autowired
    private VoterIdVerificationService voterIdVerificationService;

    @PostMapping("/verify")
    public ResponseEntity<String> verifyVoterId() {
        boolean isVerified = voterIdVerificationService.verifyVoterId();
        if (isVerified) {
            return ResponseEntity.ok("Voter ID verified successfully.");
        } else {
            return ResponseEntity.status(400).body("Voter’s ID Card Details are not selected for IP/PH.");
        }
    }
}
