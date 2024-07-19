package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.PhoneNumberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PhoneNumberController {

    @Autowired
    private PhoneNumberService phoneNumberService;

    @GetMapping("/validatePhoneNumber")
    public ResponseEntity<Boolean> validatePhoneNumber(@RequestParam String phoneNumber) {
        boolean isValid = phoneNumberService.validatePhoneNumber(phoneNumber);
        return ResponseEntity.ok(isValid);
    }

    @GetMapping("/fetchPhoneNumberData")
    public ResponseEntity<String> fetchPhoneNumberData(@RequestParam String currentItem, @RequestParam String currentBlock, @RequestParam String proposalType) {
        String phoneNumberData = phoneNumberService.fetchPhoneNumberData(currentItem, currentBlock, proposalType);
        return ResponseEntity.ok(phoneNumberData);
    }
}
