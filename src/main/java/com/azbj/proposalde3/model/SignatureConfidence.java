package com.azbj.proposalde3.model;

public class SignatureConfidence {
    private String signatureName;
    private double totalConfidence;

    public SignatureConfidence() {}

    public SignatureConfidence(String signatureName, double totalConfidence) {
        this.signatureName = signatureName;
        this.totalConfidence = totalConfidence;
    }

    public String getSignatureName() {
        return signatureName;
    }

    public void setSignatureName(String signatureName) {
        this.signatureName = signatureName;
    }

    public double getTotalConfidence() {
        return totalConfidence;
    }

    public void setTotalConfidence(double totalConfidence) {
        this.totalConfidence = totalConfidence;
    }
}
