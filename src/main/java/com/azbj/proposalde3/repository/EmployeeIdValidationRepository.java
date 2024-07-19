package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.EmployeeIdValidation;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

@Repository
public class EmployeeIdValidationRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public String validateEmployeeId(String employeeId, String fscCode) {
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
        return "Valid Employee ID.";
    }
}
