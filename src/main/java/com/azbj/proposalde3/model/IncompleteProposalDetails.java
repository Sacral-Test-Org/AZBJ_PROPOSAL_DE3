package com.azbj.proposalde3.model;

public class IncompleteProposalDetails {
    private String id;
    private String field1;
    private String field2;
    private boolean deleteCheckbox;
    private boolean v_recheck;
    private boolean v_stp_flg;

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getField1() {
        return field1;
    }

    public void setField1(String field1) {
        this.field1 = field1;
    }

    public String getField2() {
        return field2;
    }

    public void setField2(String field2) {
        this.field2 = field2;
    }

    public boolean isDeleteCheckbox() {
        return deleteCheckbox;
    }

    public void setDeleteCheckbox(boolean deleteCheckbox) {
        this.deleteCheckbox = deleteCheckbox;
    }

    public boolean isV_recheck() {
        return v_recheck;
    }

    public void setV_recheck(boolean v_recheck) {
        this.v_recheck = v_recheck;
    }

    public boolean isV_stp_flg() {
        return v_stp_flg;
    }

    public void setV_stp_flg(boolean v_stp_flg) {
        this.v_stp_flg = v_stp_flg;
    }
}