package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class InsuranceAmount {

    @Id
    private Long id;

    @Column(name = "strip_no")
    private Integer stripNumber;

    @Column(name = "file_name")
    private String fileName;

    public InsuranceAmount() {}

    public InsuranceAmount(Long id, Integer stripNumber, String fileName) {
        this.id = id;
        this.stripNumber = stripNumber;
        this.fileName = fileName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getStripNumber() {
        return stripNumber;
    }

    public void setStripNumber(Integer stripNumber) {
        this.stripNumber = stripNumber;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
}
