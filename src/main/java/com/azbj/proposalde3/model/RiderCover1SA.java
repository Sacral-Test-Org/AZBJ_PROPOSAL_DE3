package com.azbj.proposalde3.model;

public class RiderCover1SA {
    private double riderCover1SA;
    private String currentBlock;
    private String currentItem;
    private String proposalType;

    public RiderCover1SA(double riderCover1SA, String currentBlock, String currentItem, String proposalType) {
        this.riderCover1SA = riderCover1SA;
        this.currentBlock = currentBlock;
        this.currentItem = currentItem;
        this.proposalType = proposalType;
    }

    public double getRiderCover1SA() {
        return riderCover1SA;
    }

    public void setRiderCover1SA(double riderCover1SA) {
        this.riderCover1SA = riderCover1SA;
    }

    public String getCurrentBlock() {
        return currentBlock;
    }

    public void setCurrentBlock(String currentBlock) {
        this.currentBlock = currentBlock;
    }

    public String getCurrentItem() {
        return currentItem;
    }

    public void setCurrentItem(String currentItem) {
        this.currentItem = currentItem;
    }

    public String getProposalType() {
        return proposalType;
    }

    public void setProposalType(String proposalType) {
        this.proposalType = proposalType;
    }

    public void loadDataFromImage() {
        // Logic to load data from image based on current context and item
    }

    public void navigateToPreviousItem() {
        // Logic to navigate to the previous item (CORRECT field)
    }

    public void navigateToNextItem(String productDefinition) {
        // Logic to navigate to the next item based on product definition
        if (productDefinition.equals("ISECURE_LOAN") || productDefinition.equals("ISECURE_MORE")) {
            // Navigate to BENEFIT_TERM field
        } else {
            // Navigate to CV_CHK_DEL field
        }
    }

    public void updateVisualAttributes() {
        // Logic to update visual attributes based on the current block context
    }

    public boolean validateDataType() {
        // Validate that the data type is a number
        return true;
    }
}