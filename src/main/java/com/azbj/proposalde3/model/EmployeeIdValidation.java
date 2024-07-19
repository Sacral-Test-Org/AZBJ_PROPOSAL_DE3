package com.azbj.proposalde3.model;

public class EmployeeIdValidation {
    private String employeeId;
    private String fscCode;
    private String validationResult;

    public EmployeeIdValidation(String employeeId, String fscCode) {
        this.employeeId = employeeId;
        this.fscCode = fscCode;
        this.validationResult = validateEmployeeId();
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        this.validationResult = validateEmployeeId();
    }

    public String getFscCode() {
        return fscCode;
    }

    public void setFscCode(String fscCode) {
        this.fscCode = fscCode;
        this.validationResult = validateEmployeeId();
    }

    public String getValidationResult() {
        return validationResult;
    }

    private String validateEmployeeId() {
        if (employeeId == null || employeeId.isEmpty()) {
            return "Employee ID cannot be null or empty.";
        }

        if (!employeeId.matches("\d{4,6}")) {
            if (employeeId.length() < 4 && fscCode.matches("59C|59D|59S|5X9|52S|59L")) {
                return "Employee Id should not be less than 4 digits.";
            }
            if (employeeId.length() > 6 && fscCode.matches("59C|59S|5X9|59L")) {
                return "Employee Id should not be greater than 6 digits.";
            }
            if (employeeId.matches(".*[a-zA-Z].*")) {
                return "Alphabetic characters are not allowed.";
            }
            if (employeeId.matches(".*[^a-zA-Z0-9].*")) {
                return "Special characters are not allowed.";
            }
        }

        return "Valid Employee ID.";
    }
}