package com.azbj.proposalde3.model;

public class StripNumber {
    private int stripNo;
    private String blockName;
    private String fieldName;
    private String proposalType;

    public StripNumber() {}

    public StripNumber(int stripNo, String blockName, String fieldName, String proposalType) {
        this.stripNo = stripNo;
        this.blockName = blockName;
        this.fieldName = fieldName;
        this.proposalType = proposalType;
    }

    public int getStripNo() {
        return stripNo;
    }

    public void setStripNo(int stripNo) {
        this.stripNo = stripNo;
    }

    public String getBlockName() {
        return blockName;
    }

    public void setBlockName(String blockName) {
        this.blockName = blockName;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public String getProposalType() {
        return proposalType;
    }

    public void setProposalType(String proposalType) {
        this.proposalType = proposalType;
    }
}