package com.azbj.proposalde3.model;

public class Navigation {
    private String currentItem;
    private String currentBlock;
    private String proposalType;
    private String previousItem;
    private Integer stripNumber;

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

    public String getPreviousItem() {
        return previousItem;
    }

    public void setPreviousItem(String previousItem) {
        this.previousItem = previousItem;
    }

    public Integer getStripNumber() {
        return stripNumber;
    }

    public void setStripNumber(Integer stripNumber) {
        this.stripNumber = stripNumber;
    }
}