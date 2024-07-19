package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.AadhaarValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/aadhaar")
public class AadhaarValidationController {

    @Autowired
    private AadhaarValidationService aadhaarValidationService;

    @PostMapping("/validate")
    public ResponseEntity<String> validateAadhaar(@RequestBody String aadhaarID) {
        // Call the service method to perform Aadhaar validation
        String validationResult = aadhaarValidationService.validateAadhaar(aadhaarID);
        return ResponseEntity.ok(validationResult);
    }
}
