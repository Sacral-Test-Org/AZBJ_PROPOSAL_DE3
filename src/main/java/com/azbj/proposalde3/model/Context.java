package com.azbj.proposalde3.model;

public class Context {
    private String currentBlock;
    private String currentItem;
    private String proposalType;

    public Context() {}

    public Context(String currentBlock, String currentItem, String proposalType) {
        this.currentBlock = currentBlock;
        this.currentItem = currentItem;
        this.proposalType = proposalType;
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
}