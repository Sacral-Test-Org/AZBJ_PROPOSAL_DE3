package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class PolicyDetailsOthers {

    @Id
    private Long id;

    @Column(name = "global_view_image_count")
    private int globalViewImageCount;

    @Column(name = "current_window")
    private String currentWindow;

    @Column(name = "policy_reference")
    private String policyReference;

    @Column(name = "insured_check")
    private String insuredCheck;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getGlobalViewImageCount() {
        return globalViewImageCount;
    }

    public void setGlobalViewImageCount(int globalViewImageCount) {
        this.globalViewImageCount = globalViewImageCount;
    }

    public String getCurrentWindow() {
        return currentWindow;
    }

    public void setCurrentWindow(String currentWindow) {
        this.currentWindow = currentWindow;
    }

    public String getPolicyReference() {
        return policyReference;
    }

    public void setPolicyReference(String policyReference) {
        this.policyReference = policyReference;
    }

    public String getInsuredCheck() {
        return insuredCheck;
    }

    public void setInsuredCheck(String insuredCheck) {
        this.insuredCheck = insuredCheck;
    }
}