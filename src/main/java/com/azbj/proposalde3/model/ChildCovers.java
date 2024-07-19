package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class ChildCovers {

    @Id
    private Long childCoverId;

    @Column(name = "marked_for_deletion")
    private String markedForDeletion;

    // Getters and Setters

    public Long getChildCoverId() {
        return childCoverId;
    }

    public void setChildCoverId(Long childCoverId) {
        this.childCoverId = childCoverId;
    }

    public String getMarkedForDeletion() {
        return markedForDeletion;
    }

    public void setMarkedForDeletion(String markedForDeletion) {
        this.markedForDeletion = markedForDeletion;
    }
}
