package com.azbj.proposalde3.model;

public class Address {
    private String postalCode;
    private String state;
    private String district;
    private String landmarkArea;

    // Getters and Setters
    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getLandmarkArea() {
        return landmarkArea;
    }

    public void setLandmarkArea(String landmarkArea) {
        this.landmarkArea = landmarkArea;
    }
}