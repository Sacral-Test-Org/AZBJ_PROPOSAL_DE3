package com.azbj.proposalde3.model;

public class StatusImage {
    private String statusField;
    private String imageData;

    public StatusImage(String statusField, String imageData) {
        this.statusField = statusField;
        this.imageData = imageData;
    }

    public String getStatusField() {
        return statusField;
    }

    public void setStatusField(String statusField) {
        this.statusField = statusField;
    }

    public String getImageData() {
        return imageData;
    }

    public void setImageData(String imageData) {
        this.imageData = imageData;
    }
}