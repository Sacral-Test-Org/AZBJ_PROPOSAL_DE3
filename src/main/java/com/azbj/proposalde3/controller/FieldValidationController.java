package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.FieldValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FieldValidationController {

    @Autowired
    private FieldValidationService fieldValidationService;

    @GetMapping("/validateCurrentItem")
    public ResponseEntity<String> validateCurrentItem() {
        fieldValidationService.validateCurrentItem();
        return ResponseEntity.ok("Current item validated.");
    }

    @GetMapping("/fetchEmployeeIdList")
    public ResponseEntity<List<String>> fetchEmployeeIdList() {
        List<String> employeeIdList = fieldValidationService.fetchEmployeeIdList();
        return ResponseEntity.ok(employeeIdList);
    }

    @GetMapping("/validateNomineeRelationship")
    public ResponseEntity<String> validateNomineeRelationship(@RequestParam String gender, @RequestParam String nomineeRelationship) {
        String validationResult = fieldValidationService.validateNomineeRelationship(gender, nomineeRelationship);
        return ResponseEntity.ok(validationResult);
    }
}
