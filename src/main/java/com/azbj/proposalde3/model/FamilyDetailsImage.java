package com.azbj.proposalde3.model;

public class FamilyDetailsImage {
    private String currentItem;
    private String currentBlock;
    private String proposalType;
    private String imageFilePath;
    private String visualAttributes;
    private String decodedFamilyDetails;

    // Constructor
    public FamilyDetailsImage(String currentItem, String currentBlock, String proposalType, String imageFilePath, String visualAttributes, String decodedFamilyDetails) {
        this.currentItem = currentItem;
        this.currentBlock = currentBlock;
        this.proposalType = proposalType;
        this.imageFilePath = imageFilePath;
        this.visualAttributes = visualAttributes;
        this.decodedFamilyDetails = decodedFamilyDetails;
    }

    // Getters and Setters
    public String getCurrentItem() {
        return currentItem;
    }

    public void setCurrentItem(String currentItem) {
        this.currentItem = currentItem;
    }

    public String getCurrentBlock() {
        return currentBlock;
    }

    public void setCurrentBlock(String currentBlock) {
        this.currentBlock = currentBlock;
    }

    public String getProposalType() {
        return proposalType;
    }

    public void setProposalType(String proposalType) {
        this.proposalType = proposalType;
    }

    public String getImageFilePath() {
        return imageFilePath;
    }

    public void setImageFilePath(String imageFilePath) {
        this.imageFilePath = imageFilePath;
    }

    public String getVisualAttributes() {
        return visualAttributes;
    }

    public void setVisualAttributes(String visualAttributes) {
        this.visualAttributes = visualAttributes;
    }

    public String getDecodedFamilyDetails() {
        return decodedFamilyDetails;
    }

    public void setDecodedFamilyDetails(String decodedFamilyDetails) {
        this.decodedFamilyDetails = decodedFamilyDetails;
    }
}