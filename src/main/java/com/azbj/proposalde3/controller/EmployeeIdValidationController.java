package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.EmployeeIdValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeIdValidationController {

    @Autowired
    private EmployeeIdValidationService employeeIdValidationService;

    @GetMapping("/validateEmployeeId")
    public ResponseEntity<String> validateEmployeeId(@RequestParam String employeeId, @RequestParam String fscCode) {
        String validationResult = employeeIdValidationService.validateEmployeeId(employeeId, fscCode);
        if (validationResult.equals("Valid")) {
            return new ResponseEntity<>(validationResult, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(validationResult, HttpStatus.BAD_REQUEST);
        }
    }
}
