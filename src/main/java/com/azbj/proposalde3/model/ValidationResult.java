package com.azbj.proposalde3.model;

public class ValidationResult {
    private boolean isValid;
    private String message;
    private String errorCode;
    private String field;

    public ValidationResult() {}

    public ValidationResult(boolean isValid, String message, String errorCode, String field) {
        this.isValid = isValid;
        this.message = message;
        this.errorCode = errorCode;
        this.field = field;
    }

    public boolean isValid() {
        return isValid;
    }

    public void setValid(boolean isValid) {
        this.isValid = isValid;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }
}