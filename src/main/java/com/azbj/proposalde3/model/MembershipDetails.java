package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class MembershipDetails {

    @Id
    @Column(name = "MEMBERSHIP_NO")
    private String membershipNumber;

    @Column(name = "MEM_SUM_ASSURED")
    private Double sumAssured;

    // Getters and Setters

    public String getMembershipNumber() {
        return membershipNumber;
    }

    public void setMembershipNumber(String membershipNumber) {
        this.membershipNumber = membershipNumber;
    }

    public Double getSumAssured() {
        return sumAssured;
    }

    public void setSumAssured(Double sumAssured) {
        this.sumAssured = sumAssured;
    }
}
