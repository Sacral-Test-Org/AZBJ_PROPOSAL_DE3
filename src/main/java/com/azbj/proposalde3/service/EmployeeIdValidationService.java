package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.EmployeeIdValidationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeIdValidationService {

    @Autowired
    private EmployeeIdValidationRepository employeeIdValidationRepository;

    public String validateEmployeeId(String employeeId, String fscCode) {
        if (employeeId == null || employeeId.isEmpty()) {
            return "Employee ID cannot be null or empty.";
        }

        if (employeeId.length() < 4 || employeeId.length() > 6) {
            if (employeeId.length() > 6 && (fscCode.startsWith("59C") || fscCode.startsWith("59S") || fscCode.startsWith("5X9") || fscCode.startsWith("59L"))) {
                return "Employee Id should not be greater than 6 digits.";
            }
            if (employeeId.length() < 4 && (fscCode.startsWith("59C") || fscCode.startsWith("59D") || fscCode.startsWith("59S") || fscCode.startsWith("5X9") || fscCode.startsWith("52S") || fscCode.startsWith("59L"))) {
                return "Employee Id should not be less than 4 digits.";
            }
        }

        if (!employeeId.matches("^[0-9]+$")) {
            if (employeeId.matches(".*[a-zA-Z]+.*")) {
                return "Alphabetic characters are not allowed.";
            }
            if (employeeId.matches(".*[^a-zA-Z0-9]+.*")) {
                return "Special characters are not allowed.";
            }
        }

        // Call repository method for further validation if needed
        return employeeIdValidationRepository.validateEmployeeId(employeeId, fscCode);
    }
}
