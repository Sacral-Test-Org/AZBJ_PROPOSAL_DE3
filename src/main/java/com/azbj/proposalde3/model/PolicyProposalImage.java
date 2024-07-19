package com.azbj.proposalde3.model;

public class PolicyProposalImage {
    private int stripNumber;
    private byte[] imageData;

    public PolicyProposalImage(int stripNumber, byte[] imageData) {
        this.stripNumber = stripNumber;
        this.imageData = imageData;
    }

    public int getStripNumber() {
        return stripNumber;
    }

    public void setStripNumber(int stripNumber) {
        this.stripNumber = stripNumber;
    }

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }
}
