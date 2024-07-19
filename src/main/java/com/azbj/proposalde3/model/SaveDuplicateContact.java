package com.azbj.proposalde3.model;

public class SaveDuplicateContact {
    private String contactNumber;
    private boolean duplicate;

    public SaveDuplicateContact() {}

    public SaveDuplicateContact(String contactNumber, boolean duplicate) {
        this.contactNumber = contactNumber;
        this.duplicate = duplicate;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public boolean isDuplicate() {
        return duplicate;
    }

    public void setDuplicate(boolean duplicate) {
        this.duplicate = duplicate;
    }
}
