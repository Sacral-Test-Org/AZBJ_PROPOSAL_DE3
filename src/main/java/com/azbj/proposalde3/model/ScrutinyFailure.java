package com.azbj.proposalde3.model;

import java.util.HashMap;
import java.util.Map;

public class ScrutinyFailure {
    private String applicationNumber;
    private String userId;
    private Map<String, String> parameterList;

    public ScrutinyFailure(String applicationNumber, String userId) {
        this.applicationNumber = applicationNumber;
        this.userId = userId;
        this.parameterList = new HashMap<>();
    }

    public String getApplicationNumber() {
        return applicationNumber;
    }

    public void setApplicationNumber(String applicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Map<String, String> getParameterList() {
        return parameterList;
    }

    public void setParameterList(Map<String, String> parameterList) {
        this.parameterList = parameterList;
    }

    public void initiateScrutinyFailure() {
        if (this.applicationNumber == null || this.applicationNumber.isEmpty()) {
            throw new IllegalArgumentException("Application number cannot be null.");
        }

        if (!this.userId.startsWith("UU")) {
            throw new SecurityException("Not an Authorized ID.");
        }

        this.parameterList.put("RES_TYPE", "QC");
        this.parameterList.put("RES_appln", this.applicationNumber);

        // Call the scrutiny failure process with the created parameter list
        // This is a placeholder for the actual process call
        // scrutinyFailureProcess(this.parameterList);
    }
}