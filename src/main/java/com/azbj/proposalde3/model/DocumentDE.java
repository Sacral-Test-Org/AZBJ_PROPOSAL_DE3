package com.azbj.proposalde3.model;

import java.util.Date;

public class DocumentDE {
    private String PARAM_APPLN_NO;
    private String PARAM_PROPOSAL_NO;
    private String PARAM_MODULE_NAME;
    private Date PARAM_PH_DOB;
    private String PARAM_PAN;

    // Getters and Setters
    public String getPARAM_APPLN_NO() {
        return PARAM_APPLN_NO;
    }

    public void setPARAM_APPLN_NO(String PARAM_APPLN_NO) {
        this.PARAM_APPLN_NO = PARAM_APPLN_NO;
    }

    public String getPARAM_PROPOSAL_NO() {
        return PARAM_PROPOSAL_NO;
    }

    public void setPARAM_PROPOSAL_NO(String PARAM_PROPOSAL_NO) {
        this.PARAM_PROPOSAL_NO = PARAM_PROPOSAL_NO;
    }

    public String getPARAM_MODULE_NAME() {
        return PARAM_MODULE_NAME;
    }

    public void setPARAM_MODULE_NAME(String PARAM_MODULE_NAME) {
        this.PARAM_MODULE_NAME = PARAM_MODULE_NAME;
    }

    public Date getPARAM_PH_DOB() {
        return PARAM_PH_DOB;
    }

    public void setPARAM_PH_DOB(Date PARAM_PH_DOB) {
        this.PARAM_PH_DOB = PARAM_PH_DOB;
    }

    public String getPARAM_PAN() {
        return PARAM_PAN;
    }

    public void setPARAM_PAN(String PARAM_PAN) {
        this.PARAM_PAN = PARAM_PAN;
    }
}