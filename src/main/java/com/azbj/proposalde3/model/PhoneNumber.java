package com.azbj.proposalde3.model;

public class PhoneNumber {
    private String phoneNumber;
    private String currentItem;
    private String currentBlock;
    private String proposalType;

    // Constructor
    public PhoneNumber(String phoneNumber, String currentItem, String currentBlock, String proposalType) {
        this.phoneNumber = phoneNumber;
        this.currentItem = currentItem;
        this.currentBlock = currentBlock;
        this.proposalType = proposalType;
    }

    // Getters and Setters
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

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
}