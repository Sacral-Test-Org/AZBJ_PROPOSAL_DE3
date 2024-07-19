package com.azbj.proposalde3.model;

public class FamilyMemberImage {
    private String imageUrl;
    private boolean imageExists;
    private String altText;
    private Long familyMemberId;
    private byte[] familyMemberImage;
    private Long id;
    private String imageFileName;
    private byte[] imageData;

    // Getters and Setters
    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public boolean isImageExists() {
        return imageExists;
    }

    public void setImageExists(boolean imageExists) {
        this.imageExists = imageExists;
    }

    public String getAltText() {
        return altText;
    }

    public void setAltText(String altText) {
        this.altText = altText;
    }

    public Long getFamilyMemberId() {
        return familyMemberId;
    }

    public void setFamilyMemberId(Long familyMemberId) {
        this.familyMemberId = familyMemberId;
    }

    public byte[] getFamilyMemberImage() {
        return familyMemberImage;
    }

    public void setFamilyMemberImage(byte[] familyMemberImage) {
        this.familyMemberImage = familyMemberImage;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImageFileName() {
        return imageFileName;
    }

    public void setImageFileName(String imageFileName) {
        this.imageFileName = imageFileName;
    }

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }
}