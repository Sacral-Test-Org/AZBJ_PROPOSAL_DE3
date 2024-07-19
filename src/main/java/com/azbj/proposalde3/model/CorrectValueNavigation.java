package com.azbj.proposalde3.model;

public class CorrectValueNavigation {
    private String currentBlock;
    private String currentItem;
    private String proposalType;
    private String previousItem;
    private String stripNumber;

    // Getters and Setters
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

    public String getPreviousItem() {
        return previousItem;
    }

    public void setPreviousItem(String previousItem) {
        this.previousItem = previousItem;
    }

    public String getStripNumber() {
        return stripNumber;
    }

    public void setStripNumber(String stripNumber) {
        this.stripNumber = stripNumber;
    }
}
