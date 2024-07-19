package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.VerificationResultService;
import com.azbj.proposalde3.model.VerificationResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/verification")
public class VerificationResultController {

    @Autowired
    private VerificationResultService verificationResultService;

    @PostMapping("/save")
    public ResponseEntity<VerificationResult> saveVerificationResult(@RequestBody VerificationResult verificationResult) {
        VerificationResult savedResult = verificationResultService.saveVerificationResult(verificationResult);
        return ResponseEntity.ok(savedResult);
    }
}
