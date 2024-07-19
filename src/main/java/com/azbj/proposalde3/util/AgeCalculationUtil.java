package com.azbj.proposalde3.util;

import java.time.LocalDate;
import java.time.Period;

public class AgeCalculationUtil {

    public static int calculateEntryAge(LocalDate dateOfBirth, LocalDate policyDate) {
        try {
            if (dateOfBirth == null || policyDate == null) {
                throw new IllegalArgumentException("Date of birth and policy date must not be null");
            }
            return Period.between(dateOfBirth, policyDate).getYears();
        } catch (Exception e) {
            // Handle exception gracefully
            System.err.println("Error calculating entry age: " + e.getMessage());
            return -1; // Indicate an error condition
        }
    }

    public static String deriveSurrogateValue(int calculatedAge, String proofType, String fieldValue) {
        try {
            if (calculatedAge < 0 || proofType == null || fieldValue == null) {
                throw new IllegalArgumentException("Invalid input parameters");
            }
            // Example logic for deriving surrogate value
            return proofType + "-" + fieldValue + "-" + calculatedAge;
        } catch (Exception e) {
            // Handle exception gracefully
            System.err.println("Error deriving surrogate value: " + e.getMessage());
            return null; // Indicate an error condition
        }
    }
}
