package com.azbj.proposalde3.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SUMMARY")
public class Summary {

    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "SEX", length = 20, nullable = false)
    private String gender = "M";

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender != null ? gender.toUpperCase() : null;
    }
}
