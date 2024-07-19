package com.azbj.proposalde3.model;

import java.util.Date;

public class SIPControl {
    private Date insuredPersonDOB;
    private Date policyholderDOB;
    private Date policyDate;
    private int calculatedEntryAge;
    private String proofType;
    private String fieldValue;

    // Getters and Setters
    public Date getInsuredPersonDOB() {
        return insuredPersonDOB;
    }

    public void setInsuredPersonDOB(Date insuredPersonDOB) {
        this.insuredPersonDOB = insuredPersonDOB;
    }

    public Date getPolicyholderDOB() {
        return policyholderDOB;
    }

    public void setPolicyholderDOB(Date policyholderDOB) {
        this.policyholderDOB = policyholderDOB;
    }

    public Date getPolicyDate() {
        return policyDate;
    }

    public void setPolicyDate(Date policyDate) {
        this.policyDate = policyDate;
    }

    public int getCalculatedEntryAge() {
        return calculatedEntryAge;
    }

    public void setCalculatedEntryAge(int calculatedEntryAge) {
        this.calculatedEntryAge = calculatedEntryAge;
    }

    public String getProofType() {
        return proofType;
    }

    public void setProofType(String proofType) {
        this.proofType = proofType;
    }

    public String getFieldValue() {
        return fieldValue;
    }

    public void setFieldValue(String fieldValue) {
        this.fieldValue = fieldValue;
    }

    // Method to calculate entry age
    public void calculateEntryAge() {
        try {
            int insuredPersonAge = calculateAge(insuredPersonDOB, policyDate);
            int policyholderAge = calculateAge(policyholderDOB, policyDate);

            if (insuredPersonAge < 18) {
                this.calculatedEntryAge = policyholderAge;
            } else {
                this.calculatedEntryAge = insuredPersonAge;
            }

            deriveSurrogateValue(this.calculatedEntryAge, this.proofType, this.fieldValue);
        } catch (Exception e) {
            // Handle exception gracefully
            System.err.println("Error calculating entry age: " + e.getMessage());
        }
    }

    // Helper method to calculate age
    private int calculateAge(Date dob, Date policyDate) {
        long timeDifference = policyDate.getTime() - dob.getTime();
        return (int) (timeDifference / (1000L * 60 * 60 * 24 * 365));
    }

    // Stub for deriving surrogate value
    private void deriveSurrogateValue(int age, String proofType, String fieldValue) {
        // Logic to derive surrogate value
        System.out.println("Deriving surrogate value with age: " + age + ", proofType: " + proofType + ", fieldValue: " + fieldValue);
    }
}
